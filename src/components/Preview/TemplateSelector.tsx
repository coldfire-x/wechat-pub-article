import React from 'react';
import styled from 'styled-components';
import type { TemplateId } from '../../types/template';
import { getTemplateNames } from '../../templates/templateRegistry';

const SelectorContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: #666;
  white-space: nowrap;
`;

const Select = styled.select`
  padding: 0.375rem 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  background-color: white;
  font-size: 0.875rem;
  color: #374151;
  cursor: pointer;
  transition: border-color 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 1px #3b82f6;
  }
  
  &:hover {
    border-color: #9ca3af;
  }
`;

const Option = styled.option`
  padding: 0.5rem;
`;

interface TemplateSelectorProps {
  selectedTemplate: TemplateId;
  onTemplateChange: (templateId: TemplateId) => void;
}

export const TemplateSelector: React.FC<TemplateSelectorProps> = ({
  selectedTemplate,
  onTemplateChange,
}) => {
  const templates = getTemplateNames();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onTemplateChange(event.target.value as TemplateId);
  };

  return (
    <SelectorContainer>
      <Label htmlFor="template-select">Style:</Label>
      <Select
        id="template-select"
        value={selectedTemplate}
        onChange={handleChange}
      >
        {templates.map((template) => (
          <Option key={template.id} value={template.id}>
            {template.name}
          </Option>
        ))}
      </Select>
    </SelectorContainer>
  );
};