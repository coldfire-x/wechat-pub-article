import React from 'react';
import styled from 'styled-components';
import { CopyButton } from './CopyButton';
import { TemplateSelector } from './TemplateSelector';
import { DynamicArticleContent } from './DynamicArticleContent';
import { useTemplate } from '../../contexts/TemplateContext';

const PreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const PreviewHeader = styled.div`
  background-color: #ecf0f1;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid #e5e5e5;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PreviewTitle = styled.div`
  font-weight: 500;
  color: #666;
`;

const MobileFrame = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem;
  background-color: #f9f9f9;
  overflow-y: auto;
`;

const MobileContainer = styled.div`
  width: 375px;
  max-width: 100%;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;


interface ArticlePreviewProps {
  htmlContent: string;
}

export const ArticlePreview: React.FC<ArticlePreviewProps> = ({ htmlContent }) => {
  const { selectedTemplateId, setSelectedTemplate } = useTemplate();
  
  return (
    <PreviewContainer>
      <PreviewHeader>
        <PreviewTitle>Preview (Mobile)</PreviewTitle>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <TemplateSelector
            selectedTemplate={selectedTemplateId}
            onTemplateChange={setSelectedTemplate}
          />
          <CopyButton 
            content={htmlContent}
          />
        </div>
      </PreviewHeader>
      
      <MobileFrame>
        <MobileContainer>
          <DynamicArticleContent htmlContent={htmlContent} />
        </MobileContainer>
      </MobileFrame>
    </PreviewContainer>
  );
};