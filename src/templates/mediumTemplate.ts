import type { StyleTemplate } from '../types/template';

export const mediumTemplate: StyleTemplate = {
  id: 'medium',
  name: 'Medium',
  description: 'Clean, modern style inspired by Medium publications',
  author: 'Inspired by Medium.com',
  typography: {
    fontFamily: "'Georgia', 'Times', 'Times New Roman', serif",
    fontSize: {
      base: '16px',
      h1: '2.2em',
      h2: '1.8em',
      h3: '1.5em',
      h4: '1.3em',
      h5: '1.15em',
      h6: '1.05em',
      small: '0.85em',
    },
    lineHeight: {
      base: 1.58,
      heading: 1.25,
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    letterSpacing: {
      normal: 'normal',
      tight: '-0.003em',
      wide: '0.04em',
    },
  },
  colors: {
    primary: '#292929',
    text: {
      primary: '#292929',
      secondary: '#757575',
      muted: '#9C9C9C',
    },
    background: {
      primary: '#ffffff',
      secondary: '#f7f7f7',
      accent: '#fafafa',
    },
    border: {
      primary: '#e6e6e6',
      secondary: '#f0f0f0',
    },
    link: {
      primary: '#1a8917',
      hover: '#156b13',
    },
    code: {
      background: '#f7f7f7',
      text: '#d63384',
    },
    blockquote: {
      background: 'transparent',
      border: '#292929',
      text: '#6c757d',
    },
  },
  spacing: {
    paragraph: '1.5em',
    heading: '1.8em 0 0.6em 0',
    list: '1.2em 0',
    blockquote: '1.5em 0',
    code: '1.5em 0',
  },
  generateCSS: function() {
    return `
      body {
        font-family: ${this.typography.fontFamily};
        font-size: ${this.typography.fontSize.base};
        line-height: ${this.typography.lineHeight.base};
        color: ${this.colors.text.primary};
        margin: 0;
        padding: 0;
        background-color: ${this.colors.background.primary};
        min-height: 100vh;
      }
      
      .article-container {
        max-width: 680px;
        margin: 0 auto;
        background: ${this.colors.background.primary};
        padding: 32px 16px;
        position: relative;
      }
      
      h1, h2, h3, h4, h5, h6 {
        font-family: 'SF Pro Display', 'Helvetica Neue', Arial, sans-serif;
        margin: ${this.spacing.heading};
        font-weight: ${this.typography.fontWeight.bold};
        color: ${this.colors.text.primary};
        letter-spacing: ${this.typography.letterSpacing.tight};
        line-height: ${this.typography.lineHeight.heading};
      }
      
      h1 { 
        font-size: ${this.typography.fontSize.h1}; 
        font-weight: 800;
        margin-bottom: 0.4em;
        margin-top: 0;
      }
      
      h2 { 
        font-size: ${this.typography.fontSize.h2}; 
        font-weight: ${this.typography.fontWeight.bold};
        margin-top: 1.5em;
      }
      
      h3 { 
        font-size: ${this.typography.fontSize.h3}; 
        font-weight: ${this.typography.fontWeight.semibold};
        margin-top: 1.4em;
      }
      
      h4 { 
        font-size: ${this.typography.fontSize.h4};
        font-weight: ${this.typography.fontWeight.semibold};
      }
      
      h5 { 
        font-size: ${this.typography.fontSize.h5};
        font-weight: ${this.typography.fontWeight.semibold};
      }
      
      h6 { 
        font-size: ${this.typography.fontSize.h6};
        font-weight: ${this.typography.fontWeight.semibold};
        color: ${this.colors.text.secondary};
      }
      
      p {
        margin: 0 0 ${this.spacing.paragraph} 0;
        font-weight: ${this.typography.fontWeight.normal};
        line-height: ${this.typography.lineHeight.base};
        color: ${this.colors.text.primary};
        word-break: break-word;
      }
      
      strong {
        font-weight: ${this.typography.fontWeight.bold};
        color: ${this.colors.text.primary};
      }
      
      em {
        font-style: italic;
        color: ${this.colors.text.primary};
      }
      
      ul, ol {
        margin: ${this.spacing.list};
        padding: 0;
        list-style: none;
      }
      
      ul li, ol li {
        margin: 0.6em 0;
        padding-left: 0;
        line-height: ${this.typography.lineHeight.base};
        color: ${this.colors.text.primary};
      }
      
      blockquote {
        border-left: 3px solid ${this.colors.blockquote.border};
        background-color: ${this.colors.blockquote.background};
        padding: 0 1.5em;
        margin: ${this.spacing.blockquote};
        font-style: italic;
        color: ${this.colors.blockquote.text};
        font-size: 1.1em;
        line-height: 1.48;
      }
      
      blockquote p {
        margin-bottom: 0;
      }
      
      code {
        background-color: ${this.colors.code.background};
        color: ${this.colors.code.text};
        padding: 0.1em 0.3em;
        border-radius: 3px;
        font-family: 'SF Mono', 'Monaco', 'Cascadia Code', 'Consolas', monospace;
        font-size: 0.85em;
        font-weight: ${this.typography.fontWeight.normal};
      }
      
      pre {
        background-color: ${this.colors.background.secondary};
        color: ${this.colors.text.primary};
        border-radius: 6px;
        padding: 20px;
        overflow-x: auto;
        margin: ${this.spacing.code};
        font-family: 'SF Mono', 'Monaco', 'Cascadia Code', 'Consolas', monospace;
        font-size: 15px;
        line-height: 1.4;
      }
      
      pre code {
        background: transparent;
        color: ${this.colors.text.primary};
        padding: 0;
        border-radius: 0;
      }
      
      a {
        color: ${this.colors.link.primary};
        text-decoration: underline;
        font-weight: ${this.typography.fontWeight.normal};
        transition: color 0.15s ease;
      }
      
      a:hover {
        color: ${this.colors.link.hover};
      }
      
      table {
        border-collapse: collapse;
        width: 100%;
        margin: 2em 0;
        border: 1px solid ${this.colors.border.primary};
        border-radius: 4px;
        overflow: hidden;
      }
      
      th, td {
        border-bottom: 1px solid ${this.colors.border.primary};
        padding: 12px 16px;
        text-align: left;
        vertical-align: top;
      }
      
      th {
        background-color: ${this.colors.background.secondary};
        color: ${this.colors.text.primary};
        font-weight: ${this.typography.fontWeight.semibold};
        font-family: 'SF Pro Display', 'Helvetica Neue', Arial, sans-serif;
      }
      
      tbody tr:last-child td {
        border-bottom: none;
      }
      
      img {
        max-width: 100%;
        height: auto;
        display: block;
        margin: 2.5em auto;
        border-radius: 4px;
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
        margin-top: -0.3em;
      }
      
      ul + p,
      ol + p {
        margin-top: 0.8em;
      }
      
      li p {
        margin: 0.3em 0;
      }
      
      li ul,
      li ol {
        margin: 0.3em 0;
      }
    `;
  },
};