import React, { useMemo } from 'react';
import { useTemplate } from '../../contexts/TemplateContext';

interface DynamicArticleContentProps {
  htmlContent: string;
}

export const DynamicArticleContent: React.FC<DynamicArticleContentProps> = ({ htmlContent }) => {
  const { selectedTemplate } = useTemplate();

  const dynamicStyles = useMemo(() => {
    // Generate CSS for preview that matches the template
    const css = selectedTemplate.generateCSS();
    
    // Adapt the CSS for the preview container
    const adaptedCSS = css
      .replace(/\.article-container/g, '.dynamic-article-content')
      .replace(/body\s*{[^}]*}/g, '') // Remove body styles for preview
      .replace(/@import[^;]*;/g, ''); // Remove imports for inline styles
    
    return adaptedCSS;
  }, [selectedTemplate]);

  const containerStyle: React.CSSProperties = {
    padding: '1.5rem',
    fontFamily: selectedTemplate.typography.fontFamily,
    fontSize: selectedTemplate.typography.fontSize.base,
    lineHeight: selectedTemplate.typography.lineHeight.base,
    color: selectedTemplate.colors.text.primary,
    backgroundColor: selectedTemplate.colors.background.primary,
    border: `1px solid ${selectedTemplate.colors.border.primary}`,
    position: 'relative',
    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
    overflow: 'hidden',
  };

  const topBorderStyle: React.CSSProperties = {
    content: '',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '1px',
    backgroundColor: selectedTemplate.colors.primary,
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: dynamicStyles }} />
      <div className="dynamic-article-content" style={containerStyle}>
        <div style={topBorderStyle} />
        <div dangerouslySetInnerHTML={{ __html: htmlContent || '<p>Start typing to see preview...</p>' }} />
      </div>
    </>
  );
};