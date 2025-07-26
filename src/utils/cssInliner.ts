import juice from 'juice';

const defaultWeChatCSS = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
  
  body {
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, "Helvetica Neue", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei UI", "Microsoft YaHei", Arial, sans-serif;
    font-size: 16px;
    line-height: 1.75;
    color: #1a1a1a;
    margin: 0;
    padding: 24px;
    background-color: #fafafa;
    min-height: 100vh;
  }
  
  .article-container {
    max-width: 800px;
    margin: 0 auto;
    background: #ffffff;
    border: 1px solid #e5e5e5;
    padding: 48px;
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
    background-color: #2c3e50;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Poppins', sans-serif;
    margin: 2.5em 0 1em 0;
    font-weight: 600;
    color: #1a1a1a;
    letter-spacing: -0.02em;
    line-height: 1.3;
  }
  
  h1 { 
    font-size: 2.4em; 
    font-weight: 700;
    color: #2c3e50;
    margin-bottom: 1.5em;
    border-bottom: 1px solid #e5e5e5;
    padding-bottom: 0.5em;
  }
  
  h2 { 
    font-size: 1.8em; 
    color: #34495e;
    border-bottom: 1px solid #ecf0f1;
    padding-bottom: 0.5em;
    margin-top: 2em;
  }
  
  h3 { 
    font-size: 1.5em; 
    color: #34495e;
    margin-top: 1.8em;
  }
  
  h4 { 
    font-size: 1.3em;
    color: #34495e;
  }
  
  h5 { 
    font-size: 1.1em;
    color: #34495e;
  }
  
  h6 { 
    font-size: 1em;
    color: #34495e;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
  
  p {
    margin: 0 0 1.4em 0;
    text-align: justify;
    font-weight: 400;
    line-height: 1.8;
    color: #333333;
  }
  
  strong {
    font-weight: 600;
    color: #1a1a1a;
  }
  
  em {
    font-style: italic;
    color: #555555;
  }
  
  /* Simplified list styling for WeChat compatibility */
  ul, ol {
    margin: 1.5em 0;
    padding: 0;
    list-style: none;
  }
  
  ul li, ol li {
    margin: 0.8em 0;
    padding-left: 0;
    line-height: 1.7;
    color: #333333;
  }
  
  blockquote {
    border-left: 3px solid #2c3e50;
    background-color: #f8f9fa;
    padding: 1.5em 2em;
    margin: 2em 0;
    font-style: italic;
    color: #555555;
    position: relative;
    border-radius: 0 4px 4px 0;
  }
  
  blockquote p {
    margin-bottom: 0;
  }
  
  code {
    background-color: #f1f3f4;
    color: #c7254e;
    padding: 0.2em 0.4em;
    border-radius: 3px;
    font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
    font-size: 0.9em;
    font-weight: 500;
  }
  
  pre {
    background-color: #f8f9fa;
    color: #333333;
    border: 1px solid #e9ecef;
    border-radius: 4px;
    padding: 1.5em;
    overflow-x: auto;
    margin: 2em 0;
    font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
    font-size: 0.9em;
    line-height: 1.5;
  }
  
  pre code {
    background: transparent;
    color: #333333;
    padding: 0;
    border-radius: 0;
  }
  
  a {
    color: #2c3e50;
    text-decoration: underline;
    font-weight: 500;
    transition: color 0.2s ease;
  }
  
  a:hover {
    color: #34495e;
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
    background-color: #f8f9fa;
    color: #2c3e50;
    font-weight: 600;
    font-family: 'Poppins', sans-serif;
  }
  
  tbody tr:nth-child(even) {
    background-color: #f8f9fa;
  }
  
  img {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 2em auto;
    border: 1px solid #e5e5e5;
  }
  
  hr {
    border: none;
    height: 1px;
    background-color: #e5e5e5;
    margin: 3em 0;
  }
  
  /* Add some spacing for better readability */
  * + h1,
  * + h2,
  * + h3 {
    margin-top: 2.5em;
  }
  
  /* First element should not have top margin */
  *:first-child {
    margin-top: 0 !important;
  }
  
  /* Last element should not have bottom margin */
  *:last-child {
    margin-bottom: 0 !important;
  }
  
  /* Professional typography adjustments */
  p + ul,
  p + ol {
    margin-top: -0.5em;
  }
  
  ul + p,
  ol + p {
    margin-top: 1em;
  }
  
  /* Better spacing for nested content */
  li p {
    margin: 0.5em 0;
  }
  
  li ul,
  li ol {
    margin: 0.5em 0;
  }
`;

export const inlineCSS = (html: string, customCSS?: string): string => {
  const css = customCSS || defaultWeChatCSS;
  const htmlWithStyle = `<style>${css}</style>${html}`;
  return juice(htmlWithStyle, {
    removeStyleTags: true,
    preserveMediaQueries: false,
    preserveKeyFrames: false,
    preserveFontFaces: false,
  });
};

// For backward compatibility
export const inlineCSSWithTemplate = (html: string, templateCSS: string): string => {
  return inlineCSS(html, templateCSS);
};

// Convert HTML to plain text for fallback
const htmlToPlainText = (html: string): string => {
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = html;
  return tempDiv.textContent || tempDiv.innerText || '';
};

export const copyToClipboard = async (htmlContent: string): Promise<boolean> => {
  try {
    // Modern approach: copy as rich text (HTML) with plain text fallback
    if (navigator.clipboard && window.ClipboardItem) {
      const plainText = htmlToPlainText(htmlContent);
      
      const clipboardItem = new ClipboardItem({
        'text/html': new Blob([htmlContent], { type: 'text/html' }),
        'text/plain': new Blob([plainText], { type: 'text/plain' })
      });
      
      await navigator.clipboard.write([clipboardItem]);
      return true;
    }
    
    // Fallback 1: Use writeText for plain HTML (less ideal but works)
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(htmlContent);
      return true;
    }
    
    // Fallback 2: Legacy method for very old browsers
    const textArea = document.createElement('textarea');
    textArea.value = htmlContent;
    document.body.appendChild(textArea);
    textArea.select();
    const success = document.execCommand('copy');
    document.body.removeChild(textArea);
    return success;
    
  } catch (err) {
    console.error('Copy failed:', err);
    
    // Final fallback: try the legacy method
    try {
      const textArea = document.createElement('textarea');
      textArea.value = htmlContent;
      document.body.appendChild(textArea);
      textArea.select();
      const success = document.execCommand('copy');
      document.body.removeChild(textArea);
      return success;
    } catch (legacyErr) {
      console.error('Legacy copy also failed:', legacyErr);
      return false;
    }
  }
};