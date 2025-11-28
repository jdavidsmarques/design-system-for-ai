# Design System - Development Guidelines

**Version**: 1.0.0  
**Last Updated**: 2025-11-28

This document defines the development rules and conventions for the `design-system/` project.

---

## ⚡ Quick Reference

**Naming Conventions Summary:**

| Type | Convention | Example |
|------|------------|---------|
| **Files & Folders** | `kebab-case` | `native-elements.tsx`, `layout-base/` |
| **React Components** | `PascalCase` | `NativeElements`, `LayoutBase` |
| **Variables & Functions** | `camelCase` | `userName`, `handleClick` |
| **Constants** | `UPPER_SNAKE_CASE` | `API_URL`, `MAX_ITEMS` |
| **CSS Classes** | `kebab-case` (BEM) | `.card`, `.card__header`, `.card--featured` |

> [!IMPORTANT]
> **ALL files and folders MUST use kebab-case.** This is strictly enforced.

---

## 📋 Table of Contents

1. [Project Overview](#-project-overview)
2. [Naming Conventions](#-naming-conventions)
3. [Project Structure](#-project-structure)
4. [Technology Stack](#-technology-stack)
5. [Development Standards](#-development-standards)
6. [Component Guidelines](#-component-guidelines)
7. [Styling Standards](#-styling-standards)
8. [Git Workflow](#-git-workflow)

---

## 🎯 Project Overview

This is a React-based design system built with TypeScript, Vite, and SCSS. It provides a comprehensive library of UI components and a preview application for testing and documentation.

### Key Technologies

- **React 19.2.0** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **SCSS** - Styling with CSS preprocessor
- **ESLint** - Code quality and consistency

---

## 📝 Naming Conventions

> [!IMPORTANT]
> **ALL files and folders MUST use kebab-case (lowercase with hyphens).** This is a strict requirement for consistency across the entire codebase. No exceptions.

### File and Folder Names: **kebab-case**

All files and folders **MUST** use kebab-case (lowercase with hyphens).

```
✅ CORRECT
src/
├── preview/
│   ├── pages/
│   │   ├── native-elements.tsx
│   │   └── component-showcase.tsx
│   ├── components/
│   │   ├── code-block.tsx
│   │   └── color-palette.tsx
│   └── app.tsx
└── lib/
    └── layout-base.tsx

❌ INCORRECT
src/
├── Preview/                    (PascalCase - wrong)
├── pages/
│   ├── NativeElements.tsx      (PascalCase - wrong)
│   └── component_showcase.tsx  (snake_case - wrong)
└── lib/
    └── layoutBase.tsx          (camelCase - wrong)
```

### Component Names: **PascalCase**

React component names (the exported function/class) use PascalCase.

```tsx
// ✅ CORRECT
// File: native-elements.tsx
export const NativeElements = () => {
  return <div>...</div>;
};

// File: layout-base.tsx
export const LayoutBase = () => {
  return <div>...</div>;
};

// ❌ INCORRECT
// File: native-elements.tsx
export const native_elements = () => { }  // snake_case - wrong
export const nativeElements = () => { }   // camelCase - wrong
```

### Variables and Functions: **camelCase**

```tsx
// ✅ CORRECT
const userName = 'John';
const isActive = true;
const handleClick = () => { };
const getUserData = () => { };

// ❌ INCORRECT
const user_name = 'John';        // snake_case - wrong
const UserName = 'John';         // PascalCase - wrong
const handle_click = () => { };  // snake_case - wrong
```

### Constants: **UPPER_SNAKE_CASE**

```tsx
// ✅ CORRECT
const API_URL = 'https://api.example.com';
const MAX_ITEMS = 100;
const DEFAULT_TIMEOUT = 5000;

// ❌ INCORRECT
const apiUrl = 'https://api.example.com';  // camelCase - wrong
const maxItems = 100;                       // camelCase - wrong
```

### CSS Classes: **kebab-case** (BEM when applicable)

```scss
// ✅ CORRECT
.native-elements-preview { }
.layout-base { }
.card-header { }

// BEM naming
.card { }
.card__header { }
.card__title { }
.card--featured { }

// ❌ INCORRECT
.nativeElementsPreview { }  // camelCase - wrong
.native_elements_preview { } // snake_case - wrong
.NativeElements { }          // PascalCase - wrong
```

---

## 📁 Project Structure

```
design-system/
├── README.md                    # This file - Development guidelines
├── package.json                 # Project dependencies and scripts
├── tsconfig.json                # TypeScript configuration
├── vite.config.ts               # Vite build configuration
├── eslint.config.js             # ESLint rules
├── index.html                   # Entry HTML file
├── public/                      # Static assets
├── dist/                        # Build output (library)
├── src/
│   ├── lib/                     # UI Library components (exported)
│   │   ├── index.ts             # Main library export
│   │   └── layout-base.tsx      # Example component
│   ├── components/              # Internal components (not exported)
│   ├── styles/                  # Global styles
│   │   └── index.scss           # Main stylesheet
│   └── preview/                 # Preview application
│       ├── main.tsx             # Preview app entry
│       ├── app.tsx              # Preview app root
│       ├── pages/               # Preview pages
│       │   └── native-elements.tsx
│       ├── components/          # Preview-specific components
│       └── assets/              # Preview assets
└── node_modules/                # Dependencies (git-ignored)
```

### Directory Responsibilities

| Directory | Purpose | Naming |
|-----------|---------|--------|
| `src/lib/` | Exported UI library components | kebab-case files, PascalCase exports |
| `src/components/` | Internal/shared components | kebab-case files, PascalCase exports |
| `src/preview/` | Preview application | kebab-case files |
| `src/preview/pages/` | Preview pages/routes | kebab-case files, PascalCase exports |
| `src/styles/` | Global SCSS styles | kebab-case files |
| `public/` | Static assets (images, fonts) | kebab-case files |

---

## 🛠️ Technology Stack

### Core Dependencies

- **React 19.2.0** - UI library
- **React DOM 19.2.0** - React renderer
- **TypeScript 5.9.3** - Type system
- **Vite 7.2.4** - Build tool
- **SCSS (Sass 1.94.2)** - CSS preprocessor

### Development Tools

- **ESLint** - Code linting
- **@vitejs/plugin-react** - React support for Vite
- **typescript-eslint** - TypeScript ESLint rules

---

## 💻 Development Standards

### TypeScript

- **Always use TypeScript** - No `.js` or `.jsx` files
- **Explicit types** for props and return values
- **Interfaces** for object shapes
- **Type exports** for reusable types

```tsx
// ✅ CORRECT
interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

export const Button = ({ label, onClick, variant = 'primary' }: ButtonProps) => {
  return (
    <button onClick={onClick} className={`btn btn--${variant}`}>
      {label}
    </button>
  );
};

// ❌ INCORRECT
export const Button = ({ label, onClick, variant }) => {  // No types
  return <button onClick={onClick}>{label}</button>;
};
```

### React Best Practices

1. **Functional Components** - Use function components, not class components
2. **Hooks** - Use React hooks (useState, useEffect, etc.)
3. **Props Destructuring** - Destructure props in function signature
4. **Default Props** - Use default parameters, not defaultProps
5. **Prop Types** - Use TypeScript interfaces, not PropTypes

```tsx
// ✅ CORRECT
export const Card = ({ title, children, variant = 'default' }: CardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div className={`card card--${variant}`}>
      <h3>{title}</h3>
      {children}
    </div>
  );
};

// ❌ INCORRECT
class Card extends React.Component {  // Class component - avoid
  render() {
    return <div>{this.props.children}</div>;
  }
}
```

### Code Organization

1. **One component per file** - Each file exports one main component
2. **Imports order**:
   - React imports
   - Third-party libraries
   - Internal components
   - Styles
   - Types

```tsx
// ✅ CORRECT import order
import { useState } from 'react';
import { LayoutBase } from '../lib';
import { NativeElements } from './pages/native-elements';
import './app.scss';
import type { NavItem } from './types';
```

3. **Export at bottom** - Default export at the end of file

```tsx
// Component definition
const App = () => {
  return <div>...</div>;
};

// Export at bottom
export default App;
```

---

## 🧩 Component Guidelines

### Component Structure

```tsx
// 1. Imports
import { useState } from 'react';
import './component-name.scss';

// 2. Types/Interfaces
interface ComponentNameProps {
  title: string;
  onAction?: () => void;
}

// 3. Component
export const ComponentName = ({ title, onAction }: ComponentNameProps) => {
  // 4. Hooks
  const [state, setState] = useState(false);

  // 5. Event handlers
  const handleClick = () => {
    setState(!state);
    onAction?.();
  };

  // 6. Render
  return (
    <div className="component-name">
      <h2>{title}</h2>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};
```

### Props Guidelines

- **Required props first**, optional props last
- **Use optional chaining** for optional callbacks: `onAction?.()`
- **Destructure props** in function signature
- **Document complex props** with JSDoc comments

```tsx
interface CardProps {
  // Required props
  title: string;
  children: React.ReactNode;
  
  // Optional props
  variant?: 'default' | 'featured';
  onClose?: () => void;
}
```

---

## 🎨 Styling Standards

### SCSS Structure

```scss
// component-name.scss

// 1. Component root
.component-name {
  display: flex;
  padding: 1rem;
  
  // 2. Nested elements (BEM)
  &__header {
    margin-bottom: 1rem;
  }
  
  &__title {
    font-size: 1.5rem;
    font-weight: 600;
  }
  
  // 3. Modifiers
  &--featured {
    border: 2px solid blue;
  }
  
  // 4. States
  &:hover {
    background-color: #f5f5f5;
  }
}

// 5. Responsive (mobile-first)
@media (min-width: 768px) {
  .component-name {
    padding: 2rem;
  }
}
```

### CSS Class Naming (BEM)

- **Block**: `.component-name`
- **Element**: `.component-name__element`
- **Modifier**: `.component-name--modifier`

```scss
// ✅ CORRECT
.card { }
.card__header { }
.card__title { }
.card--featured { }

// ❌ INCORRECT
.card .header { }           // Cascading - avoid
.cardHeader { }             // camelCase - wrong
.card-header-title { }      // Multiple elements - wrong
```

### Mobile-First Approach

Always write mobile styles first, then enhance for larger screens.

```scss
// ✅ CORRECT - Mobile first
.component {
  width: 100%;
  padding: 0.5rem;
}

@media (min-width: 768px) {
  .component {
    width: 50%;
    padding: 1rem;
  }
}

// ❌ INCORRECT - Desktop first
.component {
  width: 50%;
}

@media (max-width: 767px) {
  .component {
    width: 100%;
  }
}
```

---

## 🔀 Git Workflow

### Branch Naming

Use kebab-case for branch names:

```bash
# ✅ CORRECT
feature/native-elements-page
fix/layout-header-spacing
refactor/button-component

# ❌ INCORRECT
feature/NativeElementsPage
fix/layout_header_spacing
```

### Commit Messages

Follow conventional commits format:

```bash
# Format: <type>: <description>

# ✅ CORRECT
feat: add native elements preview page
fix: correct header navigation spacing
refactor: simplify button component logic
docs: update README with naming conventions

# Types: feat, fix, refactor, docs, style, test, chore
```

---

## 📦 Scripts

```bash
# Development
npm run dev              # Start dev server (preview app)

# Build
npm run build            # Build library for production
npm run build:preview    # Build preview app

# Linting
npm run lint             # Run ESLint

# Preview
npm run preview          # Preview production build
```

---

## ✅ Checklist for New Components

- [ ] File name in kebab-case (e.g., `button-group.tsx`)
- [ ] Component name in PascalCase (e.g., `ButtonGroup`)
- [ ] TypeScript interface for props
- [ ] SCSS file with BEM naming
- [ ] Mobile-first responsive styles
- [ ] Exported from `src/lib/index.ts` (if library component)
- [ ] JSDoc comments for complex props
- [ ] Accessibility attributes (ARIA, semantic HTML)

---

## 🚫 Common Mistakes to Avoid

1. ❌ Using PascalCase for file names
2. ❌ Using snake_case anywhere
3. ❌ Using camelCase for CSS classes
4. ❌ Desktop-first media queries
5. ❌ Missing TypeScript types
6. ❌ Class components instead of functional components
7. ❌ Inline styles instead of SCSS files
8. ❌ Deep nesting in SCSS (max 3 levels)

---

## 📚 Additional Resources

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Guide](https://vitejs.dev/guide/)
- [BEM Methodology](http://getbem.com/)
- [SCSS Documentation](https://sass-lang.com/documentation/)

---

**Remember**: Consistency is key. Follow these conventions to maintain a clean, maintainable codebase.
