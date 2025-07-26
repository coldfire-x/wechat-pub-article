import type { StyleTemplate } from '../types/template';

export const classicTemplate: StyleTemplate = {
  id: 'classic',
  name: 'Classic',
  description: 'Professional and formal style with elegant typography',
  author: 'WeChat Article Formatter',
  typography: {
    fontFamily: "'Poppins', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei UI', 'Microsoft YaHei', Arial, sans-serif",
    fontSize: {
      base: '14px',
      h1: '1.8em',
      h2: '1.5em',
      h3: '1.3em',
      h4: '1.2em',
      h5: '1.1em',
      h6: '1em',
      small: '0.85em',
    },
    lineHeight: {
      base: 1.75,
      heading: 1.3,
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    letterSpacing: {
      normal: 'normal',
      tight: '-0.02em',
      wide: '0.05em',
    },
  },
  colors: {
    primary: '#2c3e50',
    text: {
      primary: '#1a1a1a',
      secondary: '#333333',
      muted: '#555555',
    },
    background: {
      primary: '#ffffff',
      secondary: '#f8f9fa',
      accent: '#fafafa',
    },
    border: {
      primary: '#e5e5e5',
      secondary: '#ecf0f1',
    },
    link: {
      primary: '#2c3e50',
      hover: '#34495e',
    },
    code: {
      background: '#f1f3f4',
      text: '#c7254e',
    },
    blockquote: {
      background: '#f8f9fa',
      border: '#2c3e50',
      text: '#555555',
    },
  },
  spacing: {
    paragraph: '1.4em',
    heading: '2.5em 0 1em 0',
    list: '1.5em 0',
    blockquote: '2em 0',
    code: '2em 0',
  },
  generateCSS: function() {
    return `
      @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
      
      body {
        font-family: ${this.typography.fontFamily};
        font-size: ${this.typography.fontSize.base};
        line-height: ${this.typography.lineHeight.base};
        color: ${this.colors.text.primary};
        margin: 0;
        padding: 24px;
        background-color: ${this.colors.background.accent};
        min-height: 100vh;
      }
      
      .article-container {
        max-width: 800px;
        margin: 0 auto;
        background: ${this.colors.background.primary};
        border: 1px solid ${this.colors.border.primary};
        padding: 24px;
        position: relative;
        box-shadow: 0 2px 8px rgba(0,0,0,0.04);
      }
      
      .article-container::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 1px;
        background-color: ${this.colors.primary};
      }
      
      h1, h2, h3, h4, h5, h6 {
        font-family: ${this.typography.fontFamily};
        margin: ${this.spacing.heading};
        font-weight: ${this.typography.fontWeight.semibold};
        color: ${this.colors.text.primary};
        letter-spacing: ${this.typography.letterSpacing.tight};
        line-height: ${this.typography.lineHeight.heading};
      }
      
      h1 { 
        font-size: ${this.typography.fontSize.h1}; 
        font-weight: ${this.typography.fontWeight.bold};
        color: ${this.colors.primary};
        margin-bottom: 1.5em;
        border-bottom: 1px solid ${this.colors.border.primary};
        padding-bottom: 0.5em;
      }
      
      h2 { 
        font-size: ${this.typography.fontSize.h2}; 
        color: #34495e;
        border-bottom: 1px solid ${this.colors.border.secondary};
        padding-bottom: 0.5em;
        margin-top: 2em;
      }
      
      h3 { 
        font-size: ${this.typography.fontSize.h3}; 
        color: #34495e;
        margin-top: 1.8em;
      }
      
      h4 { 
        font-size: ${this.typography.fontSize.h4};
        color: #34495e;
      }
      
      h5 { 
        font-size: ${this.typography.fontSize.h5};
        color: #34495e;
      }
      
      h6 { 
        font-size: ${this.typography.fontSize.h6};
        color: #34495e;
        text-transform: uppercase;
        letter-spacing: ${this.typography.letterSpacing.wide};
      }
      
      p {
        margin: 0 0 ${this.spacing.paragraph} 0;
        text-align: justify;
        font-weight: ${this.typography.fontWeight.normal};
        line-height: 1.8;
        color: ${this.colors.text.secondary};
      }
      
      strong {
        font-weight: ${this.typography.fontWeight.semibold};
        color: ${this.colors.text.primary};
      }
      
      em {
        font-style: italic;
        color: ${this.colors.text.muted};
      }
      
      ul, ol {
        margin: ${this.spacing.list};
        padding: 0;
        list-style: none;
      }
      
      ul li, ol li {
        margin: 0.8em 0;
        padding-left: 0;
        line-height: 1.7;
        color: ${this.colors.text.secondary};
      }
      
      blockquote {
        border-left: 3px solid ${this.colors.blockquote.border};
        background-color: ${this.colors.blockquote.background};
        padding: 1.5em 2em;
        margin: ${this.spacing.blockquote};
        font-style: italic;
        color: ${this.colors.blockquote.text};
        position: relative;
        border-radius: 0 4px 4px 0;
      }
      
      blockquote p {
        margin-bottom: 0;
      }
      
      code {
        background-color: ${this.colors.code.background};
        color: ${this.colors.code.text};
        padding: 0.2em 0.4em;
        border-radius: 3px;
        font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
        font-size: ${this.typography.fontSize.small};
        font-weight: ${this.typography.fontWeight.medium};
      }
      
      pre {
        background-color: ${this.colors.background.secondary};
        color: ${this.colors.text.secondary};
        border: 1px solid #e9ecef;
        border-radius: 4px;
        padding: 1.5em;
        overflow-x: auto;
        margin: ${this.spacing.code};
        font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
        font-size: ${this.typography.fontSize.small};
        line-height: 1.5;
      }
      
      pre code {
        background: transparent;
        color: ${this.colors.text.secondary};
        padding: 0;
        border-radius: 0;
      }
      
      a {
        color: ${this.colors.link.primary};
        text-decoration: underline;
        font-weight: ${this.typography.fontWeight.medium};
        transition: color 0.2s ease;
      }
      
      a:hover {
        color: ${this.colors.link.hover};
      }
      
      table {
        border-collapse: collapse;
        width: 100%;
        margin: 2em 0;
        border: 1px solid #dee2e6;
      }
      
      th, td {
        border: 1px solid #dee2e6;
        padding: 0.8em 1.2em;
        text-align: left;
        vertical-align: top;
      }
      
      th {
        background-color: ${this.colors.background.secondary};
        color: ${this.colors.primary};
        font-weight: ${this.typography.fontWeight.semibold};
        font-family: ${this.typography.fontFamily};
      }
      
      tbody tr:nth-child(even) {
        background-color: ${this.colors.background.secondary};
      }
      
      img {
        max-width: 100%;
        height: auto;
        display: block;
        margin: 2em auto;
        border: 1px solid ${this.colors.border.primary};
      }
      
      hr {
        border: none;
        height: 1px;
        background-color: ${this.colors.border.primary};
        margin: 3em 0;
      }
      
      *:first-child {
        margin-top: 0 !important;
      }
      
      *:last-child {
        margin-bottom: 0 !important;
      }
      
      p + ul,
      p + ol {
        margin-top: -0.5em;
      }
      
      ul + p,
      ol + p {
        margin-top: 1em;
      }
      
      li p {
        margin: 0.5em 0;
      }
      
      li ul,
      li ol {
        margin: 0.5em 0;
      }
    `;
  },
};