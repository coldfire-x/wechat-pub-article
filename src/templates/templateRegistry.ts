import type { StyleTemplate, TemplateId } from '../types/template';
import { classicTemplate } from './classicTemplate';
import { mediumTemplate } from './mediumTemplate';
import { wikipediaTemplate } from './wikipediaTemplate';

export const templateRegistry: Record<TemplateId, StyleTemplate> = {
  classic: classicTemplate,
  medium: mediumTemplate,
  wikipedia: wikipediaTemplate,
};

export const getTemplate = (id: TemplateId): StyleTemplate => {
  return templateRegistry[id];
};

export const getAllTemplates = (): StyleTemplate[] => {
  return Object.values(templateRegistry);
};

export const getTemplateNames = (): Array<{id: TemplateId, name: string}> => {
  return Object.entries(templateRegistry).map(([id, template]) => ({
    id: id as TemplateId,
    name: template.name,
  }));
};