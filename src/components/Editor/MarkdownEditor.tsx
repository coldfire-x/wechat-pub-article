import React from 'react';
import styled from 'styled-components';
import { FileUploadButton } from './FileUploadButton';

const EditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const EditorHeader = styled.div`
  background-color: #f5f5f5;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid #e5e5e5;
  font-weight: 500;
  color: #666;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const EditorTitle = styled.div`
  font-weight: 500;
  color: #666;
`;

const TextArea = styled.textarea`
  flex: 1;
  min-height: 0;
  height: 100%;
  border: none;
  padding: 1rem;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 14px;
  line-height: 1.5;
  resize: none;
  outline: none;
  background-color: white;
  color: #333;
  overflow-y: scroll;
  overflow-x: hidden;
  word-wrap: break-word;
  white-space: pre-wrap;
  box-sizing: border-box;

  &::placeholder {
    color: #999;
  }

  /* Ensure proper scrolling on all browsers */
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background: #c1c1c1;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #a8a8a8;
  }

  /* Firefox scrollbar styling */
  scrollbar-width: thin;
  scrollbar-color: #c1c1c1 #f1f1f1;
`;

interface MarkdownEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const MarkdownEditor: React.FC<MarkdownEditorProps> = ({
  value,
  onChange,
  placeholder = "Enter your Markdown content here..."
}) => {
  const handleFileLoad = (content: string) => {
    onChange(content);
  };

  return (
    <EditorContainer>
      <EditorHeader>
        <EditorTitle>Markdown Editor</EditorTitle>
        <FileUploadButton onFileLoad={handleFileLoad} />
      </EditorHeader>
      <TextArea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </EditorContainer>
  );
};