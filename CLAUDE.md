# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a WeChat Article Formatting Tool - a web application that converts Markdown content into styled HTML articles optimized for WeChat's rich text editor. The tool provides multiple templates, real-time preview, and seamless copy-paste functionality.

## Architecture

### Core Components
- **Two-Column Layout**: Left side has Markdown editor with syntax highlighting, right side shows live preview in mobile size
- **Markdown Processing**: Uses `markdown-it` for robust parsing with real-time conversion
- **Template System**: Multiple professional templates with CSS inlining for WeChat compatibility
- **Copy Optimization**: Rich text copy functionality that preserves formatting in WeChat editor

### File Structure (Planned)
```
src/
├── components/
│   ├── Editor/
│   │   ├── MarkdownEditor.tsx
│   │   └── EditorToolbar.tsx
│   ├── Preview/
│   │   ├── ArticlePreview.tsx
│   │   ├── CopyButton.tsx
│   │   └── TemplateSelector.tsx
│   └── Layout/
│       ├── TwoColumnLayout.tsx
│       └── Header.tsx
├── utils/
│   ├── markdownProcessor.ts
│   ├── cssInliner.ts
└── App.tsx
```

## Tech Stack

- **Frontend**: React 18+ with TypeScript
- **Build Tool**: Vite or Create React App with TypeScript template
- **Markdown Parser**: `markdown-it` with TypeScript definitions
- **Styling**: CSS-in-JS or styled-components
- **CSS Inlining**: `juice` library or custom implementation

## Key Technical Requirements

### WeChat Compatibility
- All styles must be inlined for maximum compatibility
- Generated HTML should be clean and optimized
- Rich text copy functionality using `navigator.clipboard.writeText()`
- Reference implementations for WeChat rich text handling available in prd.md

### Performance Considerations
- Debounced markdown processing to avoid excessive re-renders
- Lazy loading of templates
- Efficient CSS inlining process
- Optimized bundle size

## Development Phases

1. **Phase 1**: Core two-column layout, markdown-it integration, single template, basic copy
2. **Phase 2**: Multiple template support, template switching, CSS inlining
3. **Phase 3**: UI/UX improvements, performance optimization, mobile responsiveness
4. **Phase 4**: WeChat API integration for media upload and article publishing

## Important Notes

- The project is in initial stages with only a prd.md specification file
- No package.json, dependencies, or existing code structure yet
- Focus on TypeScript implementation with React 18+
- WeChat-specific formatting and compatibility is critical
- Real-time preview and copy functionality are core features