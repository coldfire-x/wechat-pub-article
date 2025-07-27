# WeChat Article Formatter 📝

A professional web application that converts Markdown content into styled HTML articles optimized for WeChat's rich text editor. Create beautiful, formatted articles with multiple style templates and seamless copy-paste functionality.

![WeChat Article Formatter](https://img.shields.io/badge/WeChat-Compatible-00C853?style=for-the-badge&logo=wechat)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

## ✨ Features

### 🎨 **Multiple Style Templates**
- **Classic**: Professional and formal style with elegant typography
- **Medium**: Clean, modern style inspired by Medium publications  
- **Wikipedia**: Encyclopedia-style formatting for maximum readability

### 📱 **Mobile-Optimized**
- Real-time preview in mobile format
- Font sizes optimized for mobile viewing
- Perfect rendering on WeChat mobile app

### 🔄 **Seamless Workflow**
- **Live Preview**: See changes instantly as you type
- **Rich Text Copy**: One-click copy with proper formatting
- **File Upload**: Import existing Markdown files
- **Template Switching**: Change styles with a dropdown

### 🛠️ **Advanced Features**
- **CSS Inlining**: Automatic style inlining for WeChat compatibility
- **List Fix**: Proper list formatting that works in WeChat
- **Cross-browser**: Works on all modern browsers
- **TypeScript**: Full type safety and better development experience

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd wechat-article

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Development Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint (if configured)
```

## 📖 How to Use

### 1. **Write Content**
- Type or paste your Markdown content in the left editor
- Use the "📁 Open File" button to import existing `.md` files
- Supports all standard Markdown syntax

### 2. **Choose Style**
- Select from **Classic**, **Medium**, or **Wikipedia** templates
- Preview updates instantly with your selected style
- Each template is optimized for different content types

### 3. **Copy & Paste**
- Click "Copy for WeChat" button
- Paste directly into WeChat's rich text editor
- All formatting is preserved automatically

### 4. **Supported Markdown**
- **Headers**: H1-H6 with proper hierarchy
- **Text Formatting**: Bold, italic, inline code
- **Lists**: Bullet points and numbered lists (WeChat compatible)
- **Blockquotes**: Professional quote styling
- **Code Blocks**: Syntax highlighted code
- **Links**: Clickable links with hover effects
- **Tables**: Clean, structured data presentation
- **Images**: Responsive image handling

## 🎯 Template Comparison

| Template | Best For | Font Style | Visual Style |
|----------|----------|------------|--------------|
| **Classic** | Business articles, formal documents | Modern sans-serif (Poppins) | Professional, elegant |
| **Medium** | Blog posts, stories, personal articles | Serif body text (Georgia) | Clean, readable |
| **Wikipedia** | Reference content, factual articles | System fonts (Arial) | Academic, functional |

## 🔧 Technical Architecture

### Frontend Stack
- **React 18+** with TypeScript
- **Vite** for fast development and building
- **Styled Components** for component styling
- **Markdown-it** for robust Markdown parsing

### Key Components
```
src/
├── components/
│   ├── Editor/              # Markdown editor components
│   ├── Preview/             # Article preview and copy functionality
│   └── Layout/              # App layout components
├── templates/               # Style template definitions
├── types/                   # TypeScript type definitions
├── utils/                   # Utility functions
└── contexts/                # React context for state management
```

### Template System
- **Extensible Architecture**: Easy to add new templates
- **Type-Safe**: Full TypeScript support
- **Dynamic CSS**: Runtime style generation
- **Context-Based**: React context for global template state

## 🎨 Customization

### Adding New Templates

1. Create a new template file in `src/templates/`:
```typescript
import type { StyleTemplate } from '../types/template';

export const myTemplate: StyleTemplate = {
  id: 'my-template',
  name: 'My Template',
  description: 'My custom template description',
  typography: { /* typography config */ },
  colors: { /* color palette */ },
  spacing: { /* spacing config */ },
  generateCSS: function() {
    return `/* your CSS here */`;
  },
};
```

2. Register in `src/templates/templateRegistry.ts`:
```typescript
import { myTemplate } from './myTemplate';

export const templateRegistry = {
  // ... existing templates
  'my-template': myTemplate,
};
```

3. Update the `TemplateId` type in `src/types/template.ts`

## 🌐 WeChat Compatibility

### Optimized Features
- **CSS Inlining**: All styles are inlined for maximum compatibility
- **List Formatting**: Special handling for bullet points and numbering
- **Rich Text Copy**: Uses modern clipboard API with fallbacks
- **Mobile-First**: Designed for mobile WeChat viewing

### Technical Details
- Uses `navigator.clipboard.write()` for rich text copying
- Falls back to `document.execCommand()` for older browsers
- Custom markdown-it renderer for WeChat-compatible lists
- Juice library for CSS inlining

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **markdown-it** for excellent Markdown parsing
- **Juice** for reliable CSS inlining
- **React** ecosystem for robust development tools
- **WeChat** for inspiring this tool's creation

## 📞 Support

If you encounter any issues or have questions:
- Open an issue on GitHub
- Check the existing documentation
- Review the CLAUDE.md file for development guidance

## Buy me a coffee

If you like this project, please consider buying me a coffee.
![Buy me a coffee](./public/wechat-receive-money.webp)

[![Buy me a coffee](./public/bmc_qr.png)](buymeacoffee.com/pengphy)

---

**Made with ❤️ for WeChat content creators**

Transform your Markdown into beautiful WeChat articles effortlessly!
