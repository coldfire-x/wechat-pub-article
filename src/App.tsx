import { useState, useCallback, useMemo } from 'react';
import { TwoColumnLayout } from './components/Layout/TwoColumnLayout';
import { Header } from './components/Layout/Header';
import { MarkdownEditor } from './components/Editor/MarkdownEditor';
import { ArticlePreview } from './components/Preview/ArticlePreview';
import { processMarkdown } from './utils/markdownProcessor';
import { TemplateProvider } from './contexts/TemplateContext';
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
  const [markdown, setMarkdown] = useState(`# Welcome to WeChat Article Formatter

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

Happy writing! 🎉`);

  const handleMarkdownChange = useCallback((value: string) => {
    setMarkdown(value);
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
                value={markdown}
                onChange={handleMarkdownChange}
                placeholder="Enter your Markdown content here..."
              />
            }
            right={
              <ArticlePreview
                htmlContent={htmlContent}
              />
            }
          />
        </ContentArea>
      </AppContainer>
    </TemplateProvider>
  );
}

export default App;
