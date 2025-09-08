# Contributing

Thanks for wanting to help make this template better! 

## How to Help

### 🐛 Found a Bug?
1. Check if someone already reported it in [Issues](https://github.com/yourusername/nextjs-starter-template/issues)
2. If not, create a new issue and tell us:
   - What went wrong
   - How to reproduce it
   - What you expected to happen

### 💡 Have an Idea?
1. Check [Issues](https://github.com/yourusername/nextjs-starter-template/issues) to see if someone already suggested it
2. If not, create a new issue and describe your idea

### 🔧 Want to Code?

**Quick Steps:**
1. Fork this repo
2. Create a new branch: `git checkout -b my-feature`
3. Make your changes
4. Test them with a real Next.js project
5. Submit a pull request

**Testing Your Changes:**
```bash
# Create a test project
npx create-next-app@latest test-project --typescript --tailwind --eslint
cd test-project

# Copy your changes
cp -r ../nextjs-starter-template/* .

# Install and test
npm install clsx tailwind-merge class-variance-authority zod
npm run dev
npm run lint
```

## What We Look For

- **Keep it simple** - This template should be easy to use
- **Make it work** - Test your changes before submitting
- **Follow the style** - Use the same patterns as existing code
- **Write clear code** - Others should understand what you did

## Code Style

**Good TypeScript:**
```typescript
// ✅ Good
interface ButtonProps {
  variant?: 'default' | 'outline';
  children: React.ReactNode;
}

// ❌ Avoid
function Button(props: any) { ... }
```

**Good Components:**
```typescript
// ✅ Good - Clear and simple
export const Button = ({ variant = 'default', children, ...props }) => {
  return (
    <button className={cn('base-styles', variantStyles[variant])} {...props}>
      {children}
    </button>
  );
};
```

## Questions?

- Open an [Issue](https://github.com/yourusername/nextjs-starter-template/issues)
- Start a [Discussion](https://github.com/yourusername/nextjs-starter-template/discussions)

Thanks for helping! 🙏
