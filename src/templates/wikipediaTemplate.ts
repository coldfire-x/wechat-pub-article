import type { StyleTemplate } from '../types/template';

export const wikipediaTemplate: StyleTemplate = {
  id: 'wikipedia',
  name: 'Wikipedia',
  description: 'Clean, encyclopedia-style formatting for maximum readability',
  author: 'Inspired by Wikipedia.org',
  typography: {
    fontFamily: "'Arial', 'Helvetica', sans-serif",
    fontSize: {
      base: '14px',
      h1: '1.9em',
      h2: '1.6em',
      h3: '1.4em',
      h4: '1.25em',
      h5: '1.1em',
      h6: '1em',
      small: '0.85em',
    },
    lineHeight: {
      base: 1.6,
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
      tight: '-0.01em',
      wide: '0.02em',
    },
  },
  colors: {
    primary: '#0645ad',
    text: {
      primary: '#000000',
      secondary: '#222222',
      muted: '#666666',
    },
    background: {
      primary: '#ffffff',
      secondary: '#f8f9fa',
      accent: '#f6f6f6',
    },
    border: {
      primary: '#a2a9b1',
      secondary: '#c8ccd1',
    },
    link: {
      primary: '#0645ad',
      hover: '#0b0080',
    },
    code: {
      background: '#f8f9fa',
      text: '#000000',
      border: '#eaecf0',
    },
    blockquote: {
      background: '#f8f9fa',
      border: '#a2a9b1',
      text: '#222222',
    },
  },
  spacing: {
    paragraph: '1em',
    heading: '1.5em 0 0.5em 0',
    list: '1em 0',
    blockquote: '1em 0',
    code: '1em 0',
  },
  generateCSS: function() {
    return `
      body {
        font-family: ${this.typography.fontFamily};
        font-size: ${this.typography.fontSize.base};
        line-height: ${this.typography.lineHeight.base};
        color: ${this.colors.text.primary};
        margin: 0;
        padding: 20px;
        background-color: ${this.colors.background.primary};
        min-height: 100vh;
      }
      
      .article-container {
        max-width: 960px;
        margin: 0 auto;
        background: ${this.colors.background.primary};
        padding: 16px;
        position: relative;
      }
      
      h1, h2, h3, h4, h5, h6 {
        font-family: 'Georgia', 'Times', serif;
        margin: ${this.spacing.heading};
        font-weight: ${this.typography.fontWeight.normal};
        color: ${this.colors.text.primary};
        letter-spacing: ${this.typography.letterSpacing.normal};
        line-height: ${this.typography.lineHeight.heading};
        border-bottom: none;
        padding: 0;
      }
      
      h1 { 
        font-size: ${this.typography.fontSize.h1}; 
        font-weight: ${this.typography.fontWeight.normal};
        margin-bottom: 0.25em;
        border-bottom: 3px solid ${this.colors.border.primary};
        padding-bottom: 2px;
      }
      
      h2 { 
        font-size: ${this.typography.fontSize.h2}; 
        font-weight: ${this.typography.fontWeight.normal};
        margin-top: 1em;
        border-bottom: 1px solid ${this.colors.border.secondary};
        padding-bottom: 1px;
      }
      
      h3 { 
        font-size: ${this.typography.fontSize.h3}; 
        font-weight: ${this.typography.fontWeight.bold};
        margin-top: 1em;
      }
      
      h4 { 
        font-size: ${this.typography.fontSize.h4};
        font-weight: ${this.typography.fontWeight.bold};
      }
      
      h5 { 
        font-size: ${this.typography.fontSize.h5};
        font-weight: ${this.typography.fontWeight.bold};
      }
      
      h6 { 
        font-size: ${this.typography.fontSize.h6};
        font-weight: ${this.typography.fontWeight.bold};
      }
      
      p {
        margin: 0 0 ${this.spacing.paragraph} 0;
        font-weight: ${this.typography.fontWeight.normal};
        line-height: ${this.typography.lineHeight.base};
        color: ${this.colors.text.primary};
        text-align: left;
      }
      
      strong, b {
        font-weight: ${this.typography.fontWeight.bold};
        color: ${this.colors.text.primary};
      }
      
      em, i {
        font-style: italic;
        color: ${this.colors.text.primary};
      }
      
      ul, ol {
        margin: ${this.spacing.list};
        padding: 0;
        list-style: none;
      }
      
      ul li, ol li {
        margin: 0.3em 0;
        padding-left: 0;
        line-height: ${this.typography.lineHeight.base};
        color: ${this.colors.text.primary};
      }
      
      blockquote {
        border-left: 2px solid ${this.colors.blockquote.border};
        background-color: ${this.colors.blockquote.background};
        padding: 8px 12px;
        margin: ${this.spacing.blockquote};
        font-style: normal;
        color: ${this.colors.blockquote.text};
        font-size: inherit;
      }
      
      blockquote p {
        margin-bottom: 0;
      }
      
      code {
        background-color: ${this.colors.code.background};
        color: ${this.colors.code.text};
        padding: 1px 4px;
        border: 1px solid ${this.colors.code.border};
        border-radius: 2px;
        font-family: 'Consolas', 'Courier New', 'Lucida Console', monospace;
        font-size: 0.875em;
        font-weight: ${this.typography.fontWeight.normal};
      }
      
      pre {
        background-color: ${this.colors.background.secondary};
        color: ${this.colors.text.primary};
        border: 1px solid ${this.colors.border.secondary};
        border-radius: 2px;
        padding: 8px;
        overflow-x: auto;
        margin: ${this.spacing.code};
        font-family: 'Consolas', 'Courier New', 'Lucida Console', monospace;
        font-size: 0.875em;
        line-height: 1.4;
      }
      
      pre code {
        background: transparent;
        color: ${this.colors.text.primary};
        padding: 0;
        border: none;
        border-radius: 0;
      }
      
      a {
        color: ${this.colors.link.primary};
        text-decoration: underline;
        font-weight: ${this.typography.fontWeight.normal};
      }
      
      a:hover {
        color: ${this.colors.link.hover};
      }
      
      a:visited {
        color: #0b0080;
      }
      
      table {
        border-collapse: collapse;
        width: 100%;
        margin: 1em 0;
        border: 1px solid ${this.colors.border.primary};
        background-color: ${this.colors.background.primary};
      }
      
      th, td {
        border: 1px solid ${this.colors.border.primary};
        padding: 4px 8px;
        text-align: left;
        vertical-align: top;
      }
      
      th {
        background-color: ${this.colors.background.secondary};
        color: ${this.colors.text.primary};
        font-weight: ${this.typography.fontWeight.bold};
        font-family: ${this.typography.fontFamily};
      }
      
      img {
        max-width: 100%;
        height: auto;
        display: block;
        margin: 1em auto;
        border: 1px solid ${this.colors.border.secondary};
      }
      
      hr {
        border: none;
        height: 1px;
        background-color: ${this.colors.border.secondary};
        margin: 2em 0;
      }
      
      *:first-child {
        margin-top: 0 !important;
      }
      
      *:last-child {
        margin-bottom: 0 !important;
      }
      
      p + ul,
      p + ol {
        margin-top: 0;
      }
      
      ul + p,
      ol + p {
        margin-top: 0.5em;
      }
      
      li p {
        margin: 0.2em 0;
      }
      
      li ul,
      li ol {
        margin: 0.2em 0;
      }
      
      /* Wikipedia-specific elements */
      .infobox {
        background-color: ${this.colors.background.secondary};
        border: 1px solid ${this.colors.border.primary};
        padding: 8px;
        margin: 0 0 1em 1em;
        float: right;
        clear: right;
        width: 300px;
        font-size: 0.875em;
      }
      
      .navbox {
        background-color: ${this.colors.background.secondary};
        border: 1px solid ${this.colors.border.primary};
        padding: 2px;
        margin: 1em 0;
        clear: both;
      }
    `;
  },
};