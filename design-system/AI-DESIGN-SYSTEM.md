# Design System Library - AI Guidelines

**Library Name**: `design-system-library`
**Version**: 1.0.0
**Last Updated**: 2025-11-28
**Purpose**: Complete technical reference for AI agents consuming this design system library

---

## 📋 Table of Contents

1. [Quick Start](#-quick-start)
2. [Library Overview](#-library-overview)
3. [Installation & Usage](#-installation--usage)
4. [Design Tokens Reference](#-design-tokens-reference)
5. [Component Guidelines](#-component-guidelines)
6. [Styling Standards](#-styling-standards)
7. [Accessibility Requirements](#-accessibility-requirements)
8. [TypeScript Integration](#-typescript-integration)
9. [Common Patterns](#-common-patterns)
10. [Anti-Patterns](#-anti-patterns)

---

## 🚀 Quick Start

### For AI Agents

When working with `design-system-library`, follow these rules **strictly**:

1. **ALWAYS use design tokens** - Never hardcode colors, spacing, or other values
2. **Follow BEM naming** - Use `.block__element--modifier` for all CSS classes
3. **Desktop-first responsive** - Write desktop styles first, adjust with `max-width` media queries
4. **WCAG 2.1 Level AA** - All components must be fully accessible
5. **TypeScript required** - Use proper types for all props and components

---

## ⚠️ CRITICAL RULE: Design Tokens Only

### Golden Rule of CSS

**NEVER use hardcoded values in CSS properties. ALWAYS use CSS custom properties (design tokens).**

This is the most important rule in this design system. Breaking this rule creates:
- ❌ Inconsistent visual design
- ❌ Difficult maintenance
- ❌ Theme incompatibility
- ❌ Accessibility issues
- ❌ Technical debt

### What Are Design Tokens?

Design tokens are CSS custom properties that define all design values in a centralized, reusable way.

```css
/* Design tokens are defined in base.scss */
:root {
  --color-primary: #ED002F;
  --space-md: 16px;
  --font-size-body: 1rem;
  --radius-medium: 8px;
  /* ... hundreds more tokens ... */
}
```

### ❌ NEVER Do This (Hardcoded Values)

```scss
/* WRONG - Hardcoded values */
.component {
  color: #ED002F;              /* ❌ Hardcoded color */
  padding: 16px;               /* ❌ Hardcoded spacing */
  margin: 24px 0;              /* ❌ Hardcoded spacing */
  font-size: 1rem;             /* ❌ Hardcoded font size */
  border-radius: 8px;          /* ❌ Hardcoded radius */
  box-shadow: 0 2px 4px rgba(0,0,0,0.1); /* ❌ Hardcoded shadow */
  transition: all 0.3s ease;   /* ❌ Hardcoded duration */
  background: linear-gradient(135deg, #ED002F 0%, #c50027 100%); /* ❌ Hardcoded gradient */
}
```

### ✅ ALWAYS Do This (Design Tokens)

```scss
/* CORRECT - Using design tokens */
.component {
  color: var(--color-primary);              /* ✅ Token */
  padding: var(--space-md);                 /* ✅ Token */
  margin: var(--space-lg) 0;                /* ✅ Token */
  font-size: var(--font-size-body);         /* ✅ Token */
  border-radius: var(--radius-medium);      /* ✅ Token */
  box-shadow: var(--shadow-small);          /* ✅ Token */
  transition: all var(--duration-fast) var(--easing-ease-in-out); /* ✅ Tokens */
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%); /* ✅ Tokens */
}
```

### Design Token Categories

All available design tokens are organized into categories:

#### 🎨 Colors
```scss
/* Primary & Secondary */
--color-primary, --color-primary-light, --color-primary-dark
--color-secondary, --color-secondary-light, --color-secondary-dark

/* Neutral Palette */
--color-white, --color-black
--color-gray-50 through --color-gray-900

/* Semantic Colors */
--color-success, --color-success-light, --color-success-dark
--color-info, --color-info-light, --color-info-dark
--color-warning, --color-warning-light, --color-warning-dark
--color-error, --color-error-light, --color-error-dark

/* Background & Text */
--color-background, --color-background-alt, --color-surface
--color-text, --color-text-muted
```

#### 📏 Spacing (8px Grid System)
```scss
--space-3xs: 2px
--space-2xs: 4px
--space-xs: 8px
--space-sm: 12px
--space-md: 16px   /* DEFAULT */
--space-lg: 24px
--space-xl: 32px
--space-2xl: 48px
--space-3xl: 64px
--space-4xl: 96px
```

#### 🔤 Typography
```scss
/* Font Families */
--font-family-base, --font-family-heading, --font-family-mono

/* Font Sizes */
--font-size-xs, --font-size-sm, --font-size-body, --font-size-lg, --font-size-xl
--font-size-h1 through --font-size-h6

/* Font Weights */
--font-weight-light, --font-weight-normal, --font-weight-medium
--font-weight-semibold, --font-weight-bold, --font-weight-extrabold

/* Line Heights */
--line-height-tight, --line-height-normal, --line-height-relaxed, --line-height-loose
```

#### 🔘 Border Radius
```scss
--radius-none: 0
--radius-small: 4px
--radius-medium: 8px   /* DEFAULT */
--radius-large: 12px
--radius-xl: 16px
--radius-2xl: 24px
--radius-full: 9999px
```

#### 🌑 Shadows
```scss
--shadow-none
--shadow-small    /* Subtle elevation */
--shadow-medium   /* DEFAULT cards */
--shadow-large    /* Modals */
--shadow-xl
--shadow-2xl
```

#### ⚡ Transitions & Animations
```scss
/* Durations */
--duration-instant: 0ms
--duration-fast: 150ms       /* Hover effects */
--duration-normal: 250ms     /* DEFAULT */
--duration-slow: 350ms
--duration-slower: 500ms

/* Easing Functions */
--easing-linear, --easing-ease, --easing-ease-in, --easing-ease-out
--easing-ease-in-out   /* DEFAULT - cubic-bezier(0.4, 0, 0.2, 1) */
```

#### 📊 Z-Index Scale
```scss
--z-index-dropdown: 1000
--z-index-sticky: 1020
--z-index-fixed: 1030
--z-index-modal-backdrop: 1040
--z-index-modal: 1050
--z-index-popover: 1060
--z-index-tooltip: 1070
```

#### ♿ Accessibility
```scss
--focus-width: 2px
--focus-color: #0066cc
--focus-offset: 2px
--touch-target-min: 44px
```

### Exceptions (Extremely Rare)

There are **VERY FEW** cases where you might use specific values:

#### ✅ Acceptable Use Cases

1. **Zero values**: `0` is acceptable (no unit needed)
   ```scss
   margin: 0;
   padding: 0;
   ```

2. **Percentages for layout**: When creating fluid layouts
   ```scss
   width: 100%;
   width: 50%;
   ```

3. **Unitless values**: For properties like `line-height`, `flex`, `z-index` (when not using z-index tokens)
   ```scss
   line-height: 1;
   flex: 1;
   ```

4. **CSS functions with tokens**: Combining functions with tokens
   ```scss
   width: calc(100% - var(--space-md));
   transform: translateX(var(--space-lg));
   ```

#### ❌ NEVER Acceptable

```scss
/* ❌ WRONG - Even if "just this once" */
color: #ED002F;           /* Use var(--color-primary) */
padding: 20px;            /* Use var(--space-lg) or var(--space-xl) */
font-size: 18px;          /* Use var(--font-size-lg) */
border-radius: 5px;       /* Use var(--radius-small) */
box-shadow: 0 2px 8px rgba(0,0,0,0.15); /* Use var(--shadow-medium) */
```

### Enforcement Checklist

Before writing ANY CSS property with a value, ask yourself:

- [ ] **Is this a color?** → Use `--color-*` token
- [ ] **Is this spacing (margin/padding)?** → Use `--space-*` token
- [ ] **Is this a font property?** → Use `--font-*` token
- [ ] **Is this a border radius?** → Use `--radius-*` token
- [ ] **Is this a shadow?** → Use `--shadow-*` token
- [ ] **Is this a transition/animation?** → Use `--duration-*` and `--easing-*` tokens
- [ ] **Is this a z-index?** → Use `--z-index-*` token
- [ ] **Is this a focus style?** → Use `--focus-*` tokens

### Benefits of Design Tokens

✅ **Consistency**: All components use the same values
✅ **Maintainability**: Change once, update everywhere
✅ **Theming**: Easy to create dark mode or brand variations
✅ **Accessibility**: Centralized control of contrast and spacing
✅ **Performance**: Browser optimizations for CSS variables
✅ **Developer Experience**: Autocomplete and IntelliSense support

### How to Find the Right Token

1. **Check the Design Tokens Reference** section below
2. **Look at existing components** for similar patterns
3. **Refer to base.scss** for the complete list
4. **When in doubt, ask** - never guess with a hardcoded value

---

## 🎯 Library Overview

### What is design-system-library?

A React-based design system library built with:
- **React 19.2.0** - Modern React with hooks
- **TypeScript** - Full type safety
- **SCSS** - Nested styles with design tokens
- **Vite** - Fast build tool
- **BEM Methodology** - Strict CSS naming convention

### Package Information

```json
{
  "name": "design-system-library",
  "version": "1.0.0",
  "main": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": "./dist/index.js",
    "./styles": "./dist/index.css"
  }
}
```

### Technology Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 19.2.0 | UI library |
| TypeScript | 5.9.3 | Type safety |
| SCSS (Sass) | 1.94.2 | Styling |
| Vite | 7.2.4 | Build tool |

---

## 📦 Installation & Usage

### Installation

```bash
npm install design-system-library
```

### Basic Usage

```tsx
// Import components
import { LayoutBase } from 'design-system-library';

// Import styles (REQUIRED)
import 'design-system-library/styles';

function App() {
  return (
    <LayoutBase
      logoText="My App"
      logoAlt="My App Logo"
      navItems={[
        { label: 'Home', href: '/', active: true },
        { label: 'About', href: '/about', active: false }
      ]}
      user={{
        name: 'John Doe',
        initials: 'JD'
      }}
      pageTitle="Welcome"
      footerText="© 2025 My App"
      onNavClick={(href) => console.log('Navigate to:', href)}
      onUserClick={() => console.log('User menu clicked')}
    >
      <h1>Page Content</h1>
      <p>Your content here...</p>
    </LayoutBase>
  );
}
```

### Importing Styles

**CRITICAL**: You MUST import the library styles in your app:

```tsx
// At the top of your main app file (e.g., App.tsx or main.tsx)
import 'design-system-library/styles';
```

This imports ALL design tokens and base styles required by components.

---

## 🎨 Design Tokens Reference

All design tokens are CSS custom properties defined in the library's base styles. **ALWAYS** use these tokens instead of hardcoded values.

### Colors

#### Primary Colors
```css
--color-primary: #336699;           /* Primary brand color */
--color-primary-light: #4d7fab;     /* Light variant */
--color-primary-dark: #264d73;      /* Dark variant */

--color-secondary: #6c757d;         /* Secondary brand color */
--color-secondary-light: #868e96;   /* Light variant */
--color-secondary-dark: #545b62;    /* Dark variant */
```

#### Neutral Colors (Grayscale)
```css
--color-white: #ffffff;
--color-black: #000000;

--color-gray-50: #f8f9fa;   /* Lightest gray */
--color-gray-100: #f1f3f5;
--color-gray-200: #e9ecef;
--color-gray-300: #dee2e6;  /* Borders, dividers */
--color-gray-400: #ced4da;
--color-gray-500: #adb5bd;  /* Placeholders */
--color-gray-600: #868e96;
--color-gray-700: #495057;  /* Secondary text */
--color-gray-800: #343a40;
--color-gray-900: #212529;  /* Primary text */
```

#### Semantic Colors
```css
--color-success: #28a745;
--color-success-light: #34ce57;
--color-success-dark: #1e7e34;

--color-info: #17a2b8;
--color-info-light: #1fc8e3;
--color-info-dark: #117a8b;

--color-warning: #ffc107;
--color-warning-light: #ffcd39;
--color-warning-dark: #d39e00;

--color-error: #dc3545;
--color-error-light: #e4606d;
--color-error-dark: #bd2130;
```

#### Background & Text
```css
--color-background: #f8f9fa;        /* Page background */
--color-background-alt: #ffffff;    /* Alternate background */
--color-surface: #ffffff;           /* Component surfaces */
--color-text: #212529;              /* Primary text */
--color-text-muted: #6c757d;        /* Muted text */
```

### Spacing

Based on an 8px grid system:

```css
--space-3xs: 0.125rem;  /* 2px */
--space-2xs: 0.25rem;   /* 4px */
--space-xs: 0.5rem;     /* 8px */
--space-sm: 0.75rem;    /* 12px */
--space-md: 1rem;       /* 16px - DEFAULT */
--space-lg: 1.5rem;     /* 24px */
--space-xl: 2rem;       /* 32px */
--space-2xl: 3rem;      /* 48px */
--space-3xl: 4rem;      /* 64px */
--space-4xl: 6rem;      /* 96px */
```

**Usage Guidelines:**
- Use `--space-md` as the default
- Use smaller values for tight layouts
- Use larger values for section spacing

### Typography

#### Font Families
```css
--font-family-base: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
--font-family-heading: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
--font-family-mono: "SF Mono", Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
```

#### Font Sizes
```css
--font-size-xs: 0.75rem;        /* 12px */
--font-size-sm: 0.875rem;       /* 14px */
--font-size-body: 1rem;         /* 16px - DEFAULT */
--font-size-body-small: 0.875rem; /* 14px */
--font-size-lg: 1.125rem;       /* 18px */
--font-size-xl: 1.25rem;        /* 20px */

--font-size-h1: 2.5rem;         /* 40px */
--font-size-h2: 2rem;           /* 32px */
--font-size-h3: 1.75rem;        /* 28px */
--font-size-h4: 1.5rem;         /* 24px */
--font-size-h5: 1.25rem;        /* 20px */
--font-size-h6: 1rem;           /* 16px */
```

#### Font Weights
```css
--font-weight-light: 300;
--font-weight-normal: 400;       /* DEFAULT */
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;
--font-weight-extrabold: 800;
```

#### Line Heights
```css
--line-height-tight: 1.25;       /* Headings */
--line-height-normal: 1.5;       /* Body text - DEFAULT */
--line-height-relaxed: 1.75;
--line-height-loose: 2;
```

### Border Radius
```css
--radius-none: 0;
--radius-small: 0.25rem;         /* 4px - Buttons, inputs */
--radius-medium: 0.5rem;         /* 8px - Cards, modals */
--radius-large: 0.75rem;         /* 12px */
--radius-xl: 1rem;               /* 16px */
--radius-2xl: 1.5rem;            /* 24px */
--radius-full: 9999px;           /* Pills, avatars */
```

### Shadows
```css
--shadow-none: none;
--shadow-small: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-medium: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
--shadow-large: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
--shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
```

### Z-Index Scale
```css
--z-index-dropdown: 1000;
--z-index-sticky: 1020;
--z-index-fixed: 1030;
--z-index-modal-backdrop: 1040;
--z-index-modal: 1050;
--z-index-popover: 1060;
--z-index-tooltip: 1070;
```

### Transitions & Animations
```css
--duration-instant: 0ms;
--duration-fast: 150ms;          /* Hover, tooltips */
--duration-normal: 250ms;        /* DEFAULT */
--duration-slow: 350ms;
--duration-slower: 500ms;        /* Modals, complex animations */

--easing-linear: linear;
--easing-ease: ease;
--easing-ease-in: ease-in;
--easing-ease-out: ease-out;
--easing-ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);  /* DEFAULT */
```

### Accessibility Tokens
```css
--focus-width: 2px;              /* Focus outline width */
--focus-color: #0066cc;          /* Focus outline color */
--focus-offset: 2px;             /* Focus outline offset */
--touch-target-min: 44px;        /* Minimum touch target (44x44px) */
```

### Breakpoints

**Note**: These are reference values. Use in media queries.

```css
--breakpoint-sm: 640px;
--breakpoint-md: 768px;
--breakpoint-lg: 1024px;
--breakpoint-xl: 1280px;
--breakpoint-2xl: 1440px;
```

---

## 🧩 Component Guidelines

### Available Components

#### LayoutBase

Complete application layout with header, navigation, user menu, content area, and footer.

**Props Interface:**

```typescript
interface LayoutBaseProps {
  logoText: string;                    // Logo text
  logoAlt?: string;                    // Logo alt text
  logoIcon?: string;                   // Logo icon URL
  navItems: NavItem[];                 // Navigation items
  user?: User;                         // User info
  pageTitle?: string;                  // Page title
  actions?: React.ReactNode;           // Action buttons
  footerText?: string;                 // Footer text
  onNavClick?: (href: string) => void; // Navigation click handler
  onUserClick?: () => void;            // User menu click handler
  children: React.ReactNode;           // Page content
}

interface NavItem {
  label: string;
  href: string;
  active: boolean;
}

interface User {
  name: string;
  initials: string;
  avatar?: string;
}
```

**Example:**

```tsx
import { LayoutBase } from 'design-system-library';
import 'design-system-library/styles';

function App() {
  const navItems = [
    { label: 'Dashboard', href: '/dashboard', active: true },
    { label: 'Projects', href: '/projects', active: false },
    { label: 'Settings', href: '/settings', active: false }
  ];

  const user = {
    name: 'John Doe',
    initials: 'JD',
    avatar: '/avatar.jpg' // Optional
  };

  const handleNavClick = (href: string) => {
    // Your navigation logic
    console.log('Navigate to:', href);
  };

  const handleUserClick = () => {
    // Your user menu logic
    console.log('User menu clicked');
  };

  return (
    <LayoutBase
      logoText="My App"
      logoAlt="My App Logo"
      logoIcon="/logo.svg"
      navItems={navItems}
      user={user}
      pageTitle="Dashboard"
      actions={
        <>
          <button>Export</button>
          <button>Settings</button>
        </>
      }
      footerText="© 2025 My App. All rights reserved."
      onNavClick={handleNavClick}
      onUserClick={handleUserClick}
    >
      <h1>Page Content</h1>
      <p>Your dashboard content goes here...</p>
    </LayoutBase>
  );
}
```

**Features:**
- ✅ Responsive header with mobile hamburger menu
- ✅ Logo with text and optional icon
- ✅ Navigation menu with active state
- ✅ User dropdown menu
- ✅ Page title and action buttons
- ✅ Content area
- ✅ Footer with customizable text
- ✅ Full keyboard navigation
- ✅ WCAG 2.1 Level AA accessible

---

#### Button Classes

The design system provides a comprehensive set of CSS utility classes for buttons. These classes follow BEM methodology and are fully accessible.

**Key Classes:**
- `.btn`: Base button class
- `.btn-primary`: Primary action
- `.btn-success`: Success action
- `.btn-danger`: Destructive action
- `.btn-ghost`: Transparent/outline variant

For complete documentation on button classes, usage examples, and accessibility features, please refer to:
👉 [BUTTON-CLASSES.md](BUTTON-CLASSES.md)

---

#### Margin Utility Classes

The design system provides a comprehensive set of margin utility classes that use the spacing design tokens. All classes use `!important` to ensure they override component-specific margins when needed.

**Available Spacing Tokens:**
- `3xs`: 2px
- `2xs`: 4px
- `xs`: 8px
- `sm`: 12px
- `md`: 16px
- `lg`: 24px
- `xl`: 32px
- `2xl`: 48px
- `3xl`: 64px
- `4xl`: 96px
- `0`: 0 (no margin)

**All Sides:**
```html
<div class="margin-sm">Margin 12px on all sides</div>
<div class="margin-xl">Margin 32px on all sides</div>
<div class="margin-0">No margin</div>
```

**Specific Sides:**
```html
<!-- Top -->
<div class="margin-top-lg">Margin-top 24px</div>
<div class="margin-top-0">No margin-top</div>

<!-- Right -->
<div class="margin-right-md">Margin-right 16px</div>

<!-- Bottom -->
<div class="margin-bottom-xl">Margin-bottom 32px</div>

<!-- Left -->
<div class="margin-left-sm">Margin-left 12px</div>
```

**Axis Shortcuts:**
```html
<!-- Horizontal (left + right) -->
<div class="margin-x-lg">Margin 24px left and right</div>

<!-- Vertical (top + bottom) -->
<div class="margin-y-md">Margin 16px top and bottom</div>
```

**Auto Margins (for centering):**
```html
<!-- Center horizontally -->
<div class="margin-x-auto">Centered element</div>

<!-- All sides auto -->
<div class="margin-auto">Auto margins on all sides</div>

<!-- Specific sides -->
<div class="margin-top-auto">Margin-top auto</div>
<div class="margin-left-auto">Push to right</div>
```

**Class Pattern:**
- All sides: `.margin-{size}`
- Top: `.margin-top-{size}`
- Right: `.margin-right-{size}`
- Bottom: `.margin-bottom-{size}`
- Left: `.margin-left-{size}`
- Horizontal: `.margin-x-{size}`
- Vertical: `.margin-y-{size}`
- Auto: `.margin-auto`, `.margin-x-auto`, `.margin-y-auto`, `.margin-{side}-auto`

**Examples:**
```html
<!-- Card with bottom spacing -->
<div class="card margin-bottom-lg">
  <h2>Card Title</h2>
  <p>Card content</p>
</div>

<!-- Centered container -->
<div class="margin-x-auto" style="max-width: 1200px;">
  <p>Centered content</p>
</div>

<!-- Section with vertical spacing -->
<section class="margin-y-2xl">
  <h2>Section Title</h2>
  <p>Section content with large vertical margins</p>
</section>

<!-- Remove default margins -->
<h1 class="margin-0">Heading without margins</h1>
```

---

## 🎨 Styling Standards

### File Naming Conventions

**CRITICAL**: All files and folders MUST use kebab-case:

```
✅ CORRECT
src/
├── components/
│   ├── layout-base/
│   │   ├── layout-base.tsx
│   │   ├── layout-base.scss
│   │   └── index.ts
│   └── button/
│       ├── button.tsx
│       └── button.scss

❌ INCORRECT
src/
├── Components/           (PascalCase - wrong)
├── layout_base/          (snake_case - wrong)
└── layoutBase/           (camelCase - wrong)
```

### BEM Methodology (Strict)

Use BEM naming convention: `.block__element--modifier`

```scss
// ✅ CORRECT - Proper BEM with SCSS nesting
.card {
  padding: var(--space-md);
  background: var(--color-surface);

  &__header {
    margin-bottom: var(--space-sm);
    border-bottom: 1px solid var(--color-gray-300);
  }

  &__title {
    font-size: var(--font-size-h4);
    font-weight: var(--font-weight-semibold);
    color: var(--color-text);

    &--large {
      font-size: var(--font-size-h3);
    }
  }

  &__body {
    padding: var(--space-md);
  }

  &--featured {
    border: 2px solid var(--color-primary);
    background: var(--color-gray-50);
  }
}

// ❌ INCORRECT - Various anti-patterns
.card .title { }              // Cascading (not BEM)
.cardTitle { }                // camelCase (not BEM)
.card-header-title { }        // Multiple elements (not BEM)
.card__header__title { }      // Nested elements (not BEM)
```

**BEM Rules:**
- ✅ Block: `.card`
- ✅ Element: `.card__header`
- ✅ Modifier: `.card--featured`
- ✅ Element with modifier: `.card__title--large`
- ❌ NO nested elements: `.card__header__title`
- ❌ NO cascading: `.card .title`

### SCSS Nesting

Use SCSS nesting with the `&` parent selector for BEM:

```scss
.component {
  // Block styles
  padding: var(--space-md);

  &__element {
    // Element styles
    margin-bottom: var(--space-sm);

    &:hover {
      // Pseudo-class
      background: var(--color-gray-50);
    }

    &--modifier {
      // Element modifier
      font-weight: var(--font-weight-bold);
    }
  }

  &--modifier {
    // Block modifier
    border: 2px solid var(--color-primary);
  }
}
```

### Desktop-First Responsive Design

**ALWAYS** write desktop styles first, then adjust for smaller screens:

```scss
// ✅ CORRECT - Desktop first
.component {
  // Desktop styles (default)
  width: 33.333%;
  padding: var(--space-lg);
  font-size: var(--font-size-body);
}

// Tablet and down
@media (max-width: 1023px) {
  .component {
    width: 50%;
    padding: var(--space-md);
  }
}

// Mobile and down
@media (max-width: 767px) {
  .component {
    width: 100%;
    padding: var(--space-sm);
    font-size: var(--font-size-sm);
  }
}

// ❌ INCORRECT - Mobile first
.component {
  width: 100%;
  padding: var(--space-sm);
}

@media (min-width: 768px) {
  .component {
    width: 50%;
    padding: var(--space-lg);
  }
}
```

### CSS Property Order

**ALWAYS** order CSS properties in this sequence:

1. **Positioning**: `position`, `top`, `right`, `bottom`, `left`, `z-index`
2. **Display & Box Model**: `display`, `flex`, `grid`, `width`, `height`, `margin`, `padding`, `border`
3. **Typography**: `font-family`, `font-size`, `font-weight`, `line-height`, `color`, `text-align`
4. **Visual**: `background`, `border-radius`, `box-shadow`, `opacity`
5. **Other**: `cursor`, `transition`, `animation`, `transform`

```scss
.component {
  /* 1. Positioning */
  position: relative;
  top: 0;
  z-index: var(--z-index-dropdown);

  /* 2. Display & Box Model */
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: var(--space-md);
  border: 1px solid var(--color-gray-300);

  /* 3. Typography */
  font-family: var(--font-family-base);
  font-size: var(--font-size-body);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-normal);
  color: var(--color-text);

  /* 4. Visual */
  background-color: var(--color-surface);
  border-radius: var(--radius-medium);
  box-shadow: var(--shadow-small);

  /* 5. Other */
  cursor: pointer;
  transition: all var(--duration-fast) var(--easing-ease-in-out);
}
```

---

## ♿ Accessibility Requirements

All components from `design-system-library` meet WCAG 2.1 Level AA. When using the library, maintain these standards:

### Keyboard Navigation

✅ **Required keyboard support:**
- Tab: Navigate between focusable elements
- Enter/Space: Activate buttons and links
- Escape: Close dialogs and menus
- Arrow keys: Navigate menus and lists

```tsx
// Example: Keyboard-accessible button
<button
  type="button"
  onClick={handleClick}
  onKeyDown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  }}
>
  Click me
</button>
```

### Focus Indicators

All focusable elements MUST have visible focus indicators:

```scss
.btn,
a,
input {
  &:focus {
    outline: var(--focus-width) solid var(--focus-color);
    outline-offset: var(--focus-offset);
  }

  // Remove outline only when not using keyboard
  &:focus:not(:focus-visible) {
    outline: none;
  }
}
```

### ARIA Labels

Use ARIA attributes for accessibility:

```tsx
// Button with icon only
<button
  type="button"
  aria-label="Close dialog"
  onClick={handleClose}
>
  ×
</button>

// Form input with help text
<>
  <label htmlFor="email">Email Address</label>
  <input
    type="email"
    id="email"
    aria-describedby="email-help"
    required
  />
  <span id="email-help">We'll never share your email</span>
</>

// Collapsible section
<button
  type="button"
  aria-expanded={isOpen}
  aria-controls="content-id"
  onClick={toggle}
>
  Toggle Content
</button>
```

### Color Contrast

Maintain minimum contrast ratios:
- Normal text: **4.5:1**
- Large text (18pt+ or 14pt+ bold): **3:1**
- UI components: **3:1**

The library's design tokens already meet these requirements.

### Touch Targets

All interactive elements MUST be at least 44x44px:

```scss
button,
a,
input {
  min-width: var(--touch-target-min);  /* 44px */
  min-height: var(--touch-target-min); /* 44px */
}
```

### Semantic HTML

Use proper HTML5 elements:

```tsx
// ✅ CORRECT
<header>
  <nav role="navigation" aria-label="Main navigation">
    <ul>
      <li><a href="/">Home</a></li>
    </ul>
  </nav>
</header>

<main id="main-content">
  <article>
    <h1>Article Title</h1>
    <p>Content...</p>
  </article>
</main>

<footer>
  <p>© 2025</p>
</footer>

// ❌ INCORRECT
<div class="header">
  <div class="nav">
    <div class="item">
      <a href="/">Home</a>
    </div>
  </div>
</div>
```

---

## 📘 TypeScript Integration

### Component Props Interfaces

All components export their props interfaces:

```typescript
import { LayoutBase } from 'design-system-library';
import type { LayoutBaseProps } from 'design-system-library';

// Use the exported interface
const props: LayoutBaseProps = {
  logoText: 'My App',
  navItems: [],
  // ...
};

<LayoutBase {...props}>
  {/* content */}
</LayoutBase>
```

### Creating Custom Components

When creating components that use the library:

```typescript
import type { ReactNode } from 'react';

interface CustomComponentProps {
  title: string;
  description?: string;
  variant?: 'primary' | 'secondary';
  children: ReactNode;
}

export const CustomComponent = ({
  title,
  description,
  variant = 'primary',
  children
}: CustomComponentProps) => {
  return (
    <div className={`custom-component custom-component--${variant}`}>
      <h2 className="custom-component__title">{title}</h2>
      {description && (
        <p className="custom-component__description">{description}</p>
      )}
      <div className="custom-component__content">{children}</div>
    </div>
  );
};
```

### Type Safety Best Practices

```typescript
// ✅ CORRECT - Explicit types
interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

export const Button = ({ label, onClick, variant = 'primary', disabled = false }: ButtonProps) => {
  return (
    <button
      type="button"
      className={`button button--${variant}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

// ❌ INCORRECT - Missing types
export const Button = ({ label, onClick, variant, disabled }) => {
  // ...
};
```

---

## 📚 Common Patterns

### Pattern: Card Component

```tsx
// card.tsx
interface CardProps {
  title: string;
  content: string;
  action?: () => void;
  actionLabel?: string;
  featured?: boolean;
}

export const Card = ({ title, content, action, actionLabel, featured = false }: CardProps) => {
  return (
    <div className={`card ${featured ? 'card--featured' : ''}`}>
      <div className="card__header">
        <h3 className="card__title">{title}</h3>
      </div>
      <div className="card__body">
        <p className="card__text">{content}</p>
      </div>
      {action && actionLabel && (
        <div className="card__footer">
          <button
            type="button"
            className="card__action"
            onClick={action}
          >
            {actionLabel}
          </button>
        </div>
      )}
    </div>
  );
};
```

```scss
// card.scss
.card {
  padding: var(--space-md);
  background-color: var(--color-surface);
  border: 1px solid var(--color-gray-300);
  border-radius: var(--radius-medium);
  box-shadow: var(--shadow-small);
  transition: all var(--duration-fast) var(--easing-ease-in-out);

  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-medium);
  }

  &__header {
    margin-bottom: var(--space-sm);
    padding-bottom: var(--space-sm);
    border-bottom: 1px solid var(--color-gray-300);
  }

  &__title {
    font-size: var(--font-size-h4);
    font-weight: var(--font-weight-semibold);
    color: var(--color-text);
    margin: 0;
  }

  &__body {
    margin-bottom: var(--space-md);
  }

  &__text {
    font-size: var(--font-size-body);
    line-height: var(--line-height-normal);
    color: var(--color-text);
    margin: 0;
  }

  &__footer {
    display: flex;
    justify-content: flex-end;
  }

  &__action {
    min-width: var(--touch-target-min);
    min-height: var(--touch-target-min);
    padding: var(--space-sm) var(--space-md);
    font-size: var(--font-size-body);
    font-weight: var(--font-weight-medium);
    color: var(--color-white);
    background-color: var(--color-primary);
    border: none;
    border-radius: var(--radius-small);
    cursor: pointer;
    transition: background-color var(--duration-fast) var(--easing-ease-in-out);

    &:hover {
      background-color: var(--color-primary-dark);
    }

    &:focus {
      outline: var(--focus-width) solid var(--focus-color);
      outline-offset: var(--focus-offset);
    }
  }

  &--featured {
    border-color: var(--color-primary);
    background-color: var(--color-gray-50);
  }
}
```

### Pattern: Form Field

```tsx
// form-field.tsx
interface FormFieldProps {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  helpText?: string;
  value: string;
  onChange: (value: string) => void;
}

export const FormField = ({
  label,
  name,
  type = 'text',
  required = false,
  helpText,
  value,
  onChange
}: FormFieldProps) => {
  const inputId = `input-${name}`;
  const helpId = `help-${name}`;

  return (
    <div className="form-field">
      <label htmlFor={inputId} className="form-field__label">
        {label}
        {required && <span className="form-field__required" aria-label="required">*</span>}
      </label>
      <input
        type={type}
        id={inputId}
        name={name}
        className="form-field__input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-describedby={helpText ? helpId : undefined}
        required={required}
      />
      {helpText && (
        <span id={helpId} className="form-field__help">
          {helpText}
        </span>
      )}
    </div>
  );
};
```

```scss
// form-field.scss
.form-field {
  margin-bottom: var(--space-md);

  &__label {
    display: block;
    margin-bottom: var(--space-xs);
    font-size: var(--font-size-body);
    font-weight: var(--font-weight-medium);
    color: var(--color-text);
  }

  &__required {
    margin-left: var(--space-2xs);
    color: var(--color-error);
  }

  &__input {
    width: 100%;
    padding: var(--space-sm) var(--space-md);
    font-size: var(--font-size-body);
    color: var(--color-text);
    background-color: var(--color-surface);
    border: 1px solid var(--color-gray-300);
    border-radius: var(--radius-medium);
    transition: border-color var(--duration-fast) var(--easing-ease-in-out),
                box-shadow var(--duration-fast) var(--easing-ease-in-out);

    &:focus {
      outline: none;
      border-color: var(--color-primary);
      box-shadow: 0 0 0 3px rgba(51, 102, 153, 0.1);
    }

    &::placeholder {
      color: var(--color-text-muted);
    }
  }

  &__help {
    display: block;
    margin-top: var(--space-xs);
    font-size: var(--font-size-sm);
    color: var(--color-text-muted);
  }
}
```

---

## 🚫 Anti-Patterns

### What NOT to Do

#### 1. ❌ Hardcoding Values

```scss
/* ❌ WRONG - Hardcoded values */
.component {
  color: #336699;
  padding: 16px;
  border-radius: 8px;
  font-size: 1rem;
}

/* ✅ CORRECT - Using design tokens */
.component {
  color: var(--color-primary);
  padding: var(--space-md);
  border-radius: var(--radius-medium);
  font-size: var(--font-size-body);
}
```

#### 2. ❌ Non-BEM Naming

```scss
/* ❌ WRONG - Various anti-patterns */
.card .title { }              // Cascading
.cardTitle { }                // camelCase
.card-header-title { }        // Multiple elements
.card__header__title { }      // Nested elements

/* ✅ CORRECT - Proper BEM */
.card__title { }
.card__title--large { }
```

#### 3. ❌ Desktop-First Responsive

```scss
/* ❌ WRONG - Desktop first */
.component {
  width: 50%;
}

@media (max-width: 767px) {
  .component {
    width: 100%;
  }
}

/* ✅ CORRECT - Desktop first */
.component {
  width: 50%;
}

@media (max-width: 767px) {
  .component {
    width: 100%;
  }
}
```

#### 4. ❌ Inaccessible Elements

```tsx
// ❌ WRONG - div as button
<div onClick={handleClick}>Click me</div>

// ✅ CORRECT - proper button element
<button type="button" onClick={handleClick}>
  Click me
</button>
```

#### 5. ❌ Missing Focus States

```scss
/* ❌ WRONG - Removing focus without alternative */
.btn:focus {
  outline: none;
}

/* ✅ CORRECT - Visible focus indicator */
.btn:focus {
  outline: var(--focus-width) solid var(--focus-color);
  outline-offset: var(--focus-offset);
}

/* ✅ ALSO CORRECT - Remove only for mouse users */
.btn:focus:not(:focus-visible) {
  outline: none;
}
```

#### 6. ❌ Using !important

```scss
/* ❌ WRONG - Using !important */
.btn {
  color: red !important;
}

/* ✅ CORRECT - Use more specific selectors */
.btn.btn--error {
  color: var(--color-error);
}
```

#### 7. ❌ Missing TypeScript Types

```tsx
// ❌ WRONG - No types
export const Button = ({ label, onClick }) => {
  return <button onClick={onClick}>{label}</button>;
};

// ✅ CORRECT - Explicit types
interface ButtonProps {
  label: string;
  onClick: () => void;
}

export const Button = ({ label, onClick }: ButtonProps) => {
  return <button type="button" onClick={onClick}>{label}</button>;
};
```

---

## ⚠️ Critical Reminders

1. **Design Tokens ONLY** - Never hardcode colors, spacing, typography, or other values
2. **BEM is Strict** - Follow `.block__element--modifier` exactly
3. **Desktop-First Always** - Mobile-first is not allowed
4. **Accessibility is Mandatory** - WCAG 2.1 Level AA minimum
5. **TypeScript Required** - Use proper types for all props and components
6. **Import Styles** - Always import `design-system-library/styles`
7. **File Naming** - Always use kebab-case for files and folders

---

## 📞 Support & Documentation

### Additional Resources

- **ARCHITECTURE.md** - Project architecture and build system
- **PREVIEW-SYSTEM.md** - Preview application documentation
- **README.md** - Development guidelines

### Quick Reference

| Need to... | Check... |
|------------|----------|
| Find design tokens | This file → [Design Tokens Reference](#-design-tokens-reference) |
| Understand BEM | This file → [Styling Standards](#-styling-standards) |
| Learn accessibility | This file → [Accessibility Requirements](#-accessibility-requirements) |
| See component examples | This file → [Common Patterns](#-common-patterns) |
| TypeScript types | Import from `design-system-library` |

---

**Version**: 1.0.0
**Last Updated**: 2025-11-28

**Remember**: This library prioritizes consistency, accessibility, and maintainability. Always follow these guidelines when using `design-system-library` in your projects.
