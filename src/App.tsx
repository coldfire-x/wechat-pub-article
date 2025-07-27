import { useState, useCallback, useMemo, useRef, useEffect } from 'react';
import { TwoColumnLayout } from './components/Layout/TwoColumnLayout';
import { Header } from './components/Layout/Header';
import { MarkdownEditor } from './components/Editor/MarkdownEditor';
import { ArticlePreview } from './components/Preview/ArticlePreview';
import { processMarkdown } from './utils/markdownProcessor';
import { TemplateProvider } from './contexts/TemplateContext';
import { initGA, trackPageView } from './utils/analytics';
import styled from 'styled-components';

const AppContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const ContentArea = styled.div`
  flex: 1;
  min-height: 0;
  display: flex;
`;

function App() {
  const editorRef = useRef<HTMLTextAreaElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  
  // Load from localStorage on initial render
  const [markdown, setMarkdown] = useState(() => {
    const saved = localStorage.getItem('wechat-article-markdown');
    return saved || `# Welcome to WeChat Article Formatter

This tool helps you convert **Markdown** content into styled HTML that's perfectly compatible with WeChat's rich text editor.

## Features

- Real-time preview
- Mobile-optimized layout
- Copy-paste ready formatting
- Multiple templates (coming soon)

## How to use

1. Type your content in Markdown format on the left
2. See the live preview on the right
3. Click "Copy to Clipboard" when ready
4. Paste directly into WeChat editor

> **Tip**: The preview shows how your article will look on mobile devices.

### Supported Markdown

- **Bold** and *italic* text
- Headers (H1-H6)
- Lists and numbered lists
- Blockquotes
- \`Inline code\` and code blocks
- Links and more!

Happy writing! 🎉`;
  });

  // Initialize Google Analytics
  useEffect(() => {
    initGA();
    trackPageView('WeChat Article Formatter');
  }, []);

  const handleMarkdownChange = useCallback((value: string) => {
    setMarkdown(value);
    // Save to localStorage
    localStorage.setItem('wechat-article-markdown', value);
  }, []);

  const handleEditorScroll = useCallback((scrollTop: number, scrollHeight: number, clientHeight: number) => {
    if (previewRef.current) {
      const scrollPercentage = scrollTop / (scrollHeight - clientHeight);
      const previewScrollHeight = previewRef.current.scrollHeight;
      const previewClientHeight = previewRef.current.clientHeight;
      const targetScrollTop = scrollPercentage * (previewScrollHeight - previewClientHeight);
      previewRef.current.scrollTop = targetScrollTop;
    }
  }, []);

  const handlePreviewScroll = useCallback((scrollTop: number, scrollHeight: number, clientHeight: number) => {
    if (editorRef.current) {
      const scrollPercentage = scrollTop / (scrollHeight - clientHeight);
      const editorScrollHeight = editorRef.current.scrollHeight;
      const editorClientHeight = editorRef.current.clientHeight;
      const targetScrollTop = scrollPercentage * (editorScrollHeight - editorClientHeight);
      editorRef.current.scrollTop = targetScrollTop;
    }
  }, []);

  const htmlContent = useMemo(() => {
    return processMarkdown(markdown);
  }, [markdown]);

  return (
    <TemplateProvider defaultTemplate="classic">
      <AppContainer>
        <Header />
        <ContentArea>
          <TwoColumnLayout
            left={
              <MarkdownEditor
                ref={editorRef}
                value={markdown}
                onChange={handleMarkdownChange}
                onScroll={handleEditorScroll}
                placeholder="Enter your Markdown content here..."
              />
            }
            right={
              <ArticlePreview
                ref={previewRef}
                htmlContent={htmlContent}
                onScroll={handlePreviewScroll}
              />
            }
          />
        </ContentArea>
      </AppContainer>
    </TemplateProvider>
  );
}

export default App;
