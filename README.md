# 🚀 Next.js Enterprise Template for Cline

**A comprehensive Next.js template with enterprise-level Cline rules that saves you hours of setup time**

> **Powered by [Cline](https://github.com/cline/cline)** - The AI coding assistant that transforms how you build applications. This template provides sophisticated Cline rules specifically designed for Next.js development, enabling you to generate professional, enterprise-quality applications with simple prompts.
> 
> **Created by [Ali Coder/Ali Codex](https://x.com/Alicoder)** - Passionate about building tools that accelerate development workflows.

![Next.js Enterprise Template for Cline](Screenshot.png)

[![GitHub stars](https://img.shields.io/github/stars/alicodex/cline-rules-nextjs-template?style=for-the-badge&logo=github&color=yellow)](https://github.com/alicodex/cline-rules-nextjs-template/stargazers)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Buy Me A Coffee](https://img.shields.io/badge/Buy%20Me%20A%20Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://buymeacoffee.com/alicoderone)

## Why Use This Template?

Transform your development workflow with enterprise-grade standards built-in. Instead of spending hours configuring the same setup repeatedly, copy this template and start building professional applications immediately.

**What you get:**
- ✅ **Sophisticated Cline rules** with comprehensive `.clinerules` for Next.js
- ✅ **Enterprise-level code standards** that guide Cline to generate professional code
- ✅ **TypeScript configured** with path aliases and strict typing
- ✅ **Tailwind CSS** with complete design system and animations
- ✅ **Professional components** with variant-based architecture
- ✅ **Form validation** with Zod schemas and type safety
- ✅ **Code quality tools** (ESLint, Prettier) pre-configured
- ✅ **Security headers** and Next.js optimization built-in
- ✅ **Optimized for Cline** - Generate sophisticated apps with simple prompts

## Prerequisites

Before using this template, make sure you have:
- **Node.js 18+** installed ([Download here](https://nodejs.org/))
- **Git** installed ([Download here](https://git-scm.com/))
- A **GitHub account** (for template usage)
- **VS Code** with Cline extension (recommended)

## 🚀 Quick Start

### Method 1: Use as GitHub Template (Recommended)

**Step 1: Create from Template**
1. Click the **"Use this template"** button at the top of this page
2. Choose **"Create a new repository"**
3. Name your project (e.g., `my-awesome-app`)
4. Choose public or private
5. Click **"Create repository"**

**Step 2: Clone and Setup**
```bash
# Clone your new repository
git clone https://github.com/YOUR-USERNAME/YOUR-PROJECT-NAME.git
cd YOUR-PROJECT-NAME

# Install required dependencies
npm install clsx tailwind-merge class-variance-authority zod

# Install development dependencies
npm install -D @types/node @types/react @types/react-dom eslint eslint-config-next prettier typescript tailwindcss postcss autoprefixer tailwindcss-animate

# Start development server
npm run dev
```

**Step 3: Start Building with Cline**
Open your project in VS Code and start using Cline with prompts like:
- *"Create a homepage with hero section and navigation"*
- *"Build a contact form with validation"*
- *"Generate a blog layout with post cards"*

### Method 2: Add to Existing Next.js Project

**Step 1: Download Template Files**
1. Go to https://github.com/alicodex/cline-rules-nextjs-template
2. Click **"Code"** → **"Download ZIP"**
3. Extract the downloaded file

**Step 2: Copy Essential Files**
Copy these files to your Next.js project root:
```
✅ .clinerules              (Cline rules - most important!)
✅ tsconfig.json            (TypeScript configuration)
✅ tailwind.config.js       (Design system)
✅ next.config.js           (Security & optimization)
✅ postcss.config.js        (PostCSS configuration)
✅ .eslintrc.json           (Code quality rules)
✅ .prettierrc              (Code formatting)
✅ src/lib/                 (Utility functions)
✅ src/components/ui/       (Starter components)
```

**Step 3: Install Dependencies**
```bash
# Install required packages
npm install clsx tailwind-merge class-variance-authority zod

# Install dev dependencies (if not already installed)
npm install -D tailwindcss postcss autoprefixer tailwindcss-animate
```

### Method 3: Start from Scratch

**Step 1: Create Next.js Project**
```bash
# Create new Next.js project
npx create-next-app@latest my-project --typescript --tailwind --eslint --app
cd my-project
```

**Step 2: Add Template Files**
Follow Method 2 steps above to copy template files.

**Step 3: Install Additional Dependencies**
```bash
npm install clsx tailwind-merge class-variance-authority zod
npm install -D tailwindcss-animate
```

## What's Included

### 📁 Configuration Files
- **`.clinerules`** - **Sophisticated Cline rules for Next.js** - Enterprise coding standards that guide Cline to generate professional, scalable applications
- **`tsconfig.json`** - TypeScript configuration with path aliases
- **`tailwind.config.js`** - Complete design system with colors, animations, and utilities
- **`next.config.js`** - Security headers, image optimization, and performance settings
- **`postcss.config.js`** - PostCSS configuration for Tailwind CSS
- **`.eslintrc.json`** - Code quality rules with accessibility checks
- **`.prettierrc`** - Consistent code formatting
- **`.gitignore`** - Comprehensive ignore patterns

### 🧩 Starter Components & Utilities
- **`src/lib/cn.ts`** - Advanced class merging utilities
- **`src/lib/constants.ts`** - Application constants and configuration
- **`src/lib/validations.ts`** - Zod validation schemas with TypeScript types
- **`src/components/ui/Button.tsx`** - Professional button component with variants

### 🎨 Design System Features
```tsx
import { Button } from '@/components/ui/Button';

// Multiple variants and sizes
<Button variant="default" size="lg">
  Primary Action
</Button>

<Button variant="outline" size="sm" loading>
  Loading State
</Button>

<Button variant="destructive" fullWidth>
  Full Width Button
</Button>

// With icons
<Button leftIcon={<Icon />} variant="secondary">
  With Icon
</Button>
```

## Project Structure

```
nextjs-enterprise-template/
├── .clinerules                 # Enterprise coding standards
├── tsconfig.json              # TypeScript configuration
├── tailwind.config.js         # Design system configuration
├── next.config.js             # Next.js optimization & security
├── postcss.config.js          # PostCSS configuration
├── .eslintrc.json             # Code quality rules
├── .prettierrc                # Code formatting
├── package-dependencies.json  # Dependency reference
├── setup-commands.txt         # Quick setup guide
├── src/
│   ├── components/
│   │   └── ui/
│   │       └── Button.tsx     # Professional button component
│   └── lib/
│       ├── cn.ts              # Class utility functions
│       ├── constants.ts       # App configuration
│       └── validations.ts     # Zod schemas
├── CONTRIBUTING.md            # Contribution guidelines
├── LICENSE                    # MIT License
└── README.md                  # This file
```

## Enterprise Features

### 🔒 Security & Performance
- **Security headers** configured in Next.js
- **Image optimization** with WebP/AVIF support
- **Bundle optimization** with code splitting
- **TypeScript strict mode** enabled
- **React strict mode** for development

### 🎨 Design System
- **Complete color palette** with semantic naming
- **Responsive breakpoints** matching Tailwind defaults
- **Animation utilities** for micro-interactions
- **Dark mode support** built-in
- **Accessibility-first** component design

### 🛠️ Developer Experience
- **Path aliases** configured (`@/components`, `@/lib`)
- **Auto-formatting** on save with Prettier
- **Lint rules** for code quality and accessibility
- **Type safety** with strict TypeScript
- **AI assistant optimization** with comprehensive rules

## How It Accelerates Development

| Traditional Setup | With This Template |
|------------------|-------------------|
| 4-6 hours configuration | 5 minutes setup |
| Inconsistent code patterns | Enterprise standards enforced |
| Manual component creation | Professional components included |
| Basic security setup | Production-ready security |
| Limited design system | Complete design tokens |
| No AI assistant optimization | Optimized for rapid AI development |

## Customization Guide

### 1. Update App Constants
Edit `src/lib/constants.ts` to match your application:
```typescript
export const APP_CONFIG = {
  name: 'Your App Name',
  description: 'Your app description',
  // ... customize all settings
};
```

### 2. Extend Validation Schemas
Add your forms to `src/lib/validations.ts`:
```typescript
export const yourFormSchema = z.object({
  // Define your form fields
});
```

### 3. Customize Design System
Modify `tailwind.config.js` to match your brand:
```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your brand colors
      },
    },
  },
},
```

### 4. Add Components
Follow the established patterns in `src/components/ui/Button.tsx` for new components.

## Cline Integration - The Magic Behind This Template

This template is specifically designed for **[Cline](https://github.com/cline/cline)**, the revolutionary AI coding assistant that transforms development workflows.

### 🎯 **How Cline Rules Work**

The `.clinerules` file contains sophisticated instructions that teach Cline to:
- **Generate enterprise-quality Next.js applications** with consistent architecture
- **Follow industry best practices** for TypeScript, React, and Tailwind CSS
- **Create accessible, performant components** with proper error handling
- **Implement security best practices** from day one
- **Maintain consistent code style** across your entire project

### 🚀 **Cline + This Template = Supercharged Development**

With these Cline rules, you can generate complete, professional applications with simple prompts:

```
🎯 "Create a SaaS dashboard with user authentication and billing"
🎯 "Build an e-commerce product catalog with search and filters"
🎯 "Generate a blog platform with markdown support and comments"
🎯 "Create a real-time chat application with WebSocket integration"
```

**Cline will automatically:**
- Follow your enterprise coding standards
- Generate TypeScript interfaces and validation schemas
- Create responsive, accessible UI components
- Implement proper error boundaries and loading states
- Add security headers and performance optimizations
- Structure files according to Next.js best practices

### 💡 **Why Cline + These Rules = Game Changer**

| Traditional Development | Cline + This Template |
|------------------------|----------------------|
| Hours of boilerplate setup | Minutes to full application |
| Inconsistent code quality | Enterprise standards enforced |
| Manual component creation | AI-generated professional components |
| Security as an afterthought | Security built-in from start |
| Basic styling patterns | Complete design system |

**The result?** Professional, scalable Next.js applications generated at the speed of thought.

## 🔧 Troubleshooting

### Common Issues

**"Cannot find module '@/components'"**
- Make sure `tsconfig.json` is copied to your project root
- Restart your development server: `npm run dev`
- Verify the path aliases are configured correctly

**"Tailwind classes not working"**
- Ensure `tailwind.config.js` and `postcss.config.js` are in your project root
- Restart your development server: `npm run dev`
- Check that Tailwind CSS is installed: `npm list tailwindcss`

**"ESLint errors after setup"**
- Make sure `.eslintrc.json` is copied to your project
- Run: `npm run lint --fix` to auto-fix issues
- Restart VS Code if errors persist

**"Button component not found"**
- Copy the entire `src/` folder from the template
- Make sure path aliases are working (see first issue above)
- Verify the import path: `import { Button } from '@/components/ui/Button'`

**"TypeScript errors in components"**
- Ensure all dependencies are installed correctly
- Run: `npm run type-check` to verify TypeScript setup
- Make sure `@types/react` and `@types/react-dom` are installed

**"Development server won't start"**
- Check Node.js version: `node --version` (should be 18+)
- Clear npm cache: `npm cache clean --force`
- Delete `node_modules` and reinstall: `rm -rf node_modules && npm install`

### Need Help?
- 🐛 [Report bugs](https://github.com/alicodex/cline-rules-nextjs-template/issues)
- 💬 [Ask questions](https://github.com/alicodex/cline-rules-nextjs-template/discussions)
- 📖 Check the `setup-commands.txt` file for quick reference
- 🎥 Watch setup tutorials (coming soon)

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

### Quick Contribution Steps
1. Fork the repository
2. Create a feature branch
3. Make your changes following the `.clinerules` standards
4. Test with a real Next.js project
5. Submit a pull request

## Support

- 🐛 **Bug Reports:** [Create an issue](https://github.com/alicodex/cline-rules-nextjs-template/issues)
- 💡 **Feature Requests:** [Suggest a feature](https://github.com/alicodex/cline-rules-nextjs-template/issues)
- ❓ **Questions:** [Start a discussion](https://github.com/alicodex/cline-rules-nextjs-template/discussions)
- 📖 **Documentation:** Check the inline comments and setup guides

## Support the Creator

If this template saves you time and helps you build better applications, consider supporting the creator:

[![Buy Me A Coffee](https://img.shields.io/badge/Buy%20Me%20A%20Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://buymeacoffee.com/alicoderone)

**Follow Ali Coder for more development tools and templates:**
- 🐦 **Twitter/X:** [@Alicoder](https://x.com/Alicoder)
- ☕ **Buy Me a Coffee:** [Support the work](https://buymeacoffee.com/alicoderone)

## License

MIT License - use it however you want! See [LICENSE](LICENSE) for details.

---

**Powered by Cline** 🤖 **Build enterprise applications faster** ⚡ **Professional quality from day one** 🚀

> **Created with ❤️ by [Ali Coder/Ali Codex](https://x.com/Alicoder)**
> 
> Special thanks to the [Cline](https://github.com/cline/cline) team for creating the AI coding assistant that makes this level of rapid, high-quality development possible.
> 
> If this template helps you build amazing applications, consider [buying me a coffee](https://buymeacoffee.com/alicoderone) ☕
