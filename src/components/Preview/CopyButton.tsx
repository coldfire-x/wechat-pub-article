import React, { useState } from 'react';
import styled from 'styled-components';
import { copyToClipboard, inlineCSSWithTemplate } from '../../utils/cssInliner';
import { useTemplate } from '../../contexts/TemplateContext';

const Button = styled.button<{ isSuccess: boolean }>`
  background-color: ${props => props.isSuccess ? '#27ae60' : '#3498db'};
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.isSuccess ? '#229954' : '#2980b9'};
  }
  
  &:disabled {
    background-color: #bdc3c7;
    cursor: not-allowed;
  }
`;

interface CopyButtonProps {
  content: string;
  disabled?: boolean;
}

export const CopyButton: React.FC<CopyButtonProps> = ({ content, disabled = false }) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [copyType, setCopyType] = useState<'rich' | 'html' | 'unknown'>('unknown');
  const { selectedTemplate } = useTemplate();

  const handleCopy = async () => {
    if (disabled || isLoading || !content.trim()) return;
    
    setIsLoading(true);
    try {
      // Apply CSS inlining with selected template for WeChat compatibility
      const templateCSS = selectedTemplate.generateCSS();
      const inlinedContent = inlineCSSWithTemplate(content, templateCSS);
      
      // Detect copy capability
      const hasRichTextSupport = navigator.clipboard && window.ClipboardItem;
      setCopyType(hasRichTextSupport ? 'rich' : 'html');
      
      const success = await copyToClipboard(inlinedContent);
      if (success) {
        setIsSuccess(true);
        setTimeout(() => {
          setIsSuccess(false);
          setCopyType('unknown');
        }, 3000);
      }
    } catch (error) {
      console.error('Failed to copy content:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const isDisabled = disabled || isLoading || !content.trim();

  const getButtonText = () => {
    if (isLoading) return 'Copying...';
    if (isSuccess) {
      if (copyType === 'rich') return 'Copied as Rich Text!';
      if (copyType === 'html') return 'Copied as HTML!';
      return 'Copied!';
    }
    return 'Copy for WeChat';
  };

  return (
    <Button 
      onClick={handleCopy} 
      disabled={isDisabled}
      isSuccess={isSuccess}
      title={isSuccess && copyType === 'rich' ? 'Rich text copied - paste directly into WeChat' : 'Copy formatted content for WeChat'}
    >
      {getButtonText()}
    </Button>
  );
};