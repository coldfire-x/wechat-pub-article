import React, { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import type { TemplateId, StyleTemplate } from '../types/template';
import { getTemplate } from '../templates/templateRegistry';

interface TemplateContextType {
  selectedTemplateId: TemplateId;
  selectedTemplate: StyleTemplate;
  setSelectedTemplate: (templateId: TemplateId) => void;
}

const TemplateContext = createContext<TemplateContextType | undefined>(undefined);

interface TemplateProviderProps {
  children: ReactNode;
  defaultTemplate?: TemplateId;
}

export const TemplateProvider: React.FC<TemplateProviderProps> = ({
  children,
  defaultTemplate = 'classic',
}) => {
  const [selectedTemplateId, setSelectedTemplateId] = useState<TemplateId>(defaultTemplate);
  const selectedTemplate = getTemplate(selectedTemplateId);

  const setSelectedTemplate = (templateId: TemplateId) => {
    setSelectedTemplateId(templateId);
  };

  const value: TemplateContextType = {
    selectedTemplateId,
    selectedTemplate,
    setSelectedTemplate,
  };

  return (
    <TemplateContext.Provider value={value}>
      {children}
    </TemplateContext.Provider>
  );
};

export const useTemplate = (): TemplateContextType => {
  const context = useContext(TemplateContext);
  if (context === undefined) {
    throw new Error('useTemplate must be used within a TemplateProvider');
  }
  return context;
};