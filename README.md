# Next.js Enterprise Template

**A comprehensive Next.js template with enterprise-level Cline rules that saves you hours of setup time**

[![Next.js](https://img.shields.io/badge/Next.js-15.5.2-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.14-38B2AC)](https://tailwindcss.com/)
[![ESLint](https://img.shields.io/badge/ESLint-8.57.1-4B32C3)](https://eslint.org/)

![Next.js Enterprise Template](Screenshot.png)

## ⚡ INSTANT SETUP FOR AI ASSISTANTS (CLINE)

> 🚀 **Save Hours of Setup Time!** Get this entire enterprise template configured in seconds

### 🤖 One-Command Setup
Simply copy and paste this into your AI Assistant:

```
Set up this enterprise Next.js template: https://github.com/alicodex/cline-rules-nextjs-template

Clone it, install dependencies, and apply the .clinerules.md file as workspace rules for enterprise-level coding standards.
```

**✅ What you get instantly:**
- Complete Next.js workspace with TypeScript
- Enterprise coding standards automatically applied
- All dependencies installed and configured
- Ready-to-code development environment

---

## ✨ Features

- **🚀 Next.js 15.5.2** - Latest App Router with React 19
- **📘 TypeScript** - Strict configuration with enterprise-level type safety
- **🎨 Tailwind CSS** - Comprehensive design system with custom components
- **🔧 PostCSS** - Optimized CSS processing pipeline
- **📏 ESLint** - Comprehensive linting with accessibility rules
- **🎯 Prettier** - Code formatting with consistent style
- **🏗️ Enterprise Architecture** - Scalable folder structure and patterns
- **♿ Accessibility** - WCAG 2.1 AA compliant components
- **⚡ Performance** - Optimized for Core Web Vitals
- **🔒 Security** - Built-in security headers and best practices

## 🎯 What's New (Latest Updates)

### ✅ **Comprehensive Testing & Validation**
- **100% Error-Free**: All configurations tested and validated
- **CSS System Verified**: Tailwind CSS and PostCSS working perfectly
- **Build System Tested**: TypeScript compilation and Next.js builds successful
- **Component Testing**: All UI components properly styled and functional

### 🔧 **Configuration Improvements**
- **ESLint**: Fixed configuration with proper TypeScript support
- **Dependencies**: Updated and verified all package installations
- **Type Safety**: Resolved TypeScript type resolution issues
- **Code Quality**: Removed unused variables and improved component structure

### 🧹 **Project Cleanup**
- **Debug Files**: Added comprehensive debugging tools (gitignored)
- **Documentation**: Updated README with latest features and status
- **File Structure**: Cleaned up temporary test files

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/alicodex/cline-rules-nextjs-template.git
cd nextjs-template

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
src/
├── app/                    # App Router (Next.js 13+)
│   ├── globals.css        # Global styles with Tailwind directives
│   ├── layout.tsx         # Root layout with font optimization
│   └── page.tsx           # Home page component
├── components/            # Reusable components
│   ├── ui/               # Base UI components
│   │   ├── Button.tsx    # Enterprise button component
│   │   └── index.ts      # Component exports
│   └── index.ts          # Main component exports
├── lib/                  # Utility libraries
│   ├── cn.ts            # Class name utility (clsx + tailwind-merge)
│   ├── constants.ts     # Application constants
│   └── validations.ts   # Zod validation schemas
└── hooks/               # Custom React hooks (ready for expansion)
```

## 🎨 Design System

### Tailwind Configuration
- **Design Tokens**: Comprehensive color palette and spacing scale
- **Typography**: Optimized font loading with Inter and JetBrains Mono
- **Components**: Pre-built component variants with class-variance-authority
- **Animations**: Smooth transitions and micro-interactions
- **Responsive**: Mobile-first design with container queries
- **Dark Mode**: Built-in dark mode support

### Component Architecture
```typescript
// Example: Button component with variants
<Button variant="default" size="lg">
  Get Started
</Button>

<Button variant="outline" size="sm" loading>
  Processing...
</Button>
```

## 🔧 Configuration Files

### Core Configurations
- **`next.config.js`** - Next.js configuration with security headers
- **`tailwind.config.js`** - Comprehensive Tailwind setup with design tokens
- **`postcss.config.js`** - PostCSS pipeline with Tailwind and autoprefixer
- **`tsconfig.json`** - Strict TypeScript configuration
- **`.eslintrc.json`** - ESLint rules with accessibility and TypeScript support

### Cline AI Configuration
- **`.clinerules.md`** - Enterprise-level Cline custom instructions for Next.js development
  - Contains comprehensive coding standards and best practices
  - Includes file size constraints, architecture patterns, and quality guidelines
  - Provides TypeScript patterns, accessibility standards, and performance optimization rules
  - **Note**: Renamed from `.clinerules` to avoid conflicts with Cline's local directory structure

### Package Management
- **`package.json`** - Dependencies and scripts
- **`package-dependencies.json`** - Detailed dependency documentation

## 🧪 Testing & Quality Assurance

### ✅ **Verified Systems**
- **TypeScript Compilation**: Zero type errors
- **ESLint Validation**: All linting rules passing
- **Build Process**: Successful production builds
- **CSS Generation**: Tailwind utilities properly compiled
- **Component Rendering**: All components styled correctly

### 🔍 **Debug Tools**
The template includes comprehensive debugging tools:
- **System Debugger**: Tests all packages and configurations
- **CSS Validation**: Verifies Tailwind compilation pipeline
- **Component Analysis**: Checks component styling and imports
- **Build Verification**: Validates production build process

## 📦 Dependencies

### Core Dependencies
- **Next.js 15.5.2** - React framework
- **React 19.1.1** - UI library
- **TypeScript 5.9.2** - Type safety
- **Tailwind CSS 3.4.14** - Styling framework

### Development Tools
- **ESLint 8.57.1** - Code linting
- **Prettier 3.6.2** - Code formatting
- **PostCSS 8.5.6** - CSS processing
- **Autoprefixer 10.4.21** - CSS vendor prefixes

### Utility Libraries
- **class-variance-authority** - Component variant management
- **clsx** - Conditional class names
- **tailwind-merge** - Tailwind class merging
- **zod** - Schema validation

## 🎯 Enterprise Features

### Performance Optimization
- **Image Optimization**: Next.js Image component with WebP/AVIF support
- **Font Optimization**: Automatic font loading with `next/font`
- **Bundle Splitting**: Automatic code splitting and tree shaking
- **CSS Optimization**: PostCSS with cssnano for production builds

### Security
- **Security Headers**: X-Frame-Options, X-Content-Type-Options, CSP
- **Input Validation**: Zod schemas for type-safe validation
- **Environment Variables**: Secure configuration management

### Accessibility
- **WCAG 2.1 AA**: Compliant components and patterns
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader Support**: Proper ARIA attributes and semantic HTML
- **Focus Management**: Visible focus indicators and logical tab order

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
# Deploy to Vercel
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js Team** - For the amazing React framework
- **Tailwind CSS** - For the utility-first CSS framework
- **Vercel** - For the deployment platform
- **TypeScript Team** - For type safety and developer experience

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/alicodex/cline-rules-nextjs-template/issues)
- **Discussions**: [GitHub Discussions](https://github.com/alicodex/cline-rules-nextjs-template/discussions)

---

**Built with ❤️ for enterprise-level Next.js development**
ed this temp
