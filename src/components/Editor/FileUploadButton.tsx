import React, { useRef } from 'react';
import styled from 'styled-components';

const UploadButton = styled.button`
  background-color: #34495e;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #2c3e50;
  }
  
  &:disabled {
    background-color: #bdc3c7;
    cursor: not-allowed;
  }
`;

const HiddenFileInput = styled.input`
  display: none;
`;

interface FileUploadButtonProps {
  onFileLoad: (content: string) => void;
  disabled?: boolean;
}

export const FileUploadButton: React.FC<FileUploadButtonProps> = ({ onFileLoad, disabled = false }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    
    if (file.type === 'text/markdown' || file.name.endsWith('.md') || file.name.endsWith('.txt')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result as string;
        onFileLoad(content);
      };
      reader.readAsText(file);
    } else {
      // Try to read any text file as markdown
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result as string;
        onFileLoad(content);
      };
      reader.readAsText(file);
    }
    
    // Reset the input so the same file can be selected again
    if (event.target) {
      event.target.value = '';
    }
  };

  return (
    <>
      <UploadButton 
        onClick={handleButtonClick} 
        disabled={disabled}
        type="button"
      >
        📁 Open File
      </UploadButton>
      <HiddenFileInput
        ref={fileInputRef}
        type="file"
        accept=".md,.markdown,.txt"
        onChange={handleFileChange}
      />
    </>
  );
};