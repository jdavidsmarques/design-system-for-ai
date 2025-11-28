# Design System - Complete Technical Guidelines

**Version**: 2.0.0
**Last Updated**: 2025-11-28

This document serves as the **complete technical reference** for AI agents and developers working with this Design System. It consolidates all guidelines, coding standards, design tokens, and component usage patterns.

---

## 📖 Table of Contents

1. [Overview](#-overview)
2. [Project Structure](#-project-structure)
3. [Core Principles](#-core-principles)
4. [Design Tokens Reference](#-design-tokens-reference)
5. [Coding Standards](#-coding-standards)
6. [Component Architecture](#-component-architecture)
7. [Accessibility Requirements](#-accessibility-requirements)
8. [Responsive Design](#-responsive-design)
9. [Available Components](#-available-components)
10. [Workflow Guidelines](#-workflow-guidelines)
11. [Common Patterns](#-common-patterns)
12. [Anti-Patterns](#-anti-patterns)

---

## 🎯 Overview

This is a comprehensive, accessible, and maintainable Design System built with:

- **CSS Custom Properties** (Design Tokens) - Single source of truth for all visual values
- **BEM Methodology** - Strict `.block__element--modifier` naming convention
- **Atomic Development** - Component organization by complexity (Elements → Components → Pages)
- **Mobile-First** - Responsive design starting from mobile screens
- **WCAG 2.1 Level AA** - Full accessibility compliance
- **Zero Dependencies** - Pure HTML, CSS, and vanilla JavaScript

### Key Objectives

1. **Consistency**: Every component uses the same design tokens and patterns
2. **Accessibility**: All components meet or exceed WCAG 2.1 AA standards
3. **Developer Experience**: Clear documentation, intuitive patterns, comprehensive examples
4. **Performance**: Lightweight, optimized, no external dependencies
5. **Maintainability**: Strict naming conventions, clear structure, extensive documentation

---

## 📁 Project Structure

```
design-system/
├── README.md                     # This file - Complete technical guidelines
├── ui-library/                   # Production-ready UI components (SOURCE OF TRUTH)
│   ├── common.css                # Design tokens + base styles + CSS reset
│   ├── common.js                 # Shared JavaScript utilities
│   ├── code-standards.md         # Detailed coding standards documentation
│   ├── STYLE-GUIDE.md            # Visual style guide documentation
│   ├── README.md                 # UI library usage guide
│   └── components/               # Component library
│       └── layouts/
│           └── layout-base/      # Base application layout
│               ├── layout-base.html
│               ├── layout-base.css
│               ├── layout-base.js
│               └── README.md
└── ai-agent-guidelines/          # AI agent specific guidelines (optional reference)
```

### File Responsibilities

| File | Purpose | When to Modify |
|------|---------|----------------|
| `ui-library/common.css` | **SOURCE OF TRUTH** - All design tokens and base styles | When adding/modifying colors, spacing, typography, or base HTML styles |
| `ui-library/common.js` | Shared JavaScript utilities and helpers | When adding reusable JavaScript functions |
| `ui-library/components/` | All component HTML, CSS, and JavaScript | When creating or modifying components |
| `design-system/README.md` | Complete technical guidelines (this file) | When adding new patterns or standards |

---

## 🧭 Core Principles

### 1. Design Tokens First

**ALWAYS** use CSS custom properties. **NEVER** hardcode values.

```css
/* ✅ CORRECT - Using design tokens */
.component {
  color: var(--color-primary);
  padding: var(--space-md);
  border-radius: var(--radius-medium);
  font-size: var(--font-size-body);
  box-shadow: var(--shadow-small);
  transition: all var(--duration-fast) var(--easing-ease-in-out);
}

/* ❌ INCORRECT - Hardcoded values */
.component {
  color: #336699;
  padding: 16px;
  border-radius: 8px;
  font-size: 1rem;
  box-shadow: 0 1px 2px rgba(0,0,0,0.05);
  transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
```

**Why?** Design tokens ensure consistency, make global changes easy, and improve maintainability.

### 2. BEM Methodology (Strict)

Use BEM naming convention: `.block__element--modifier`

```css
/* ✅ CORRECT - Proper BEM */
.card { }                        /* Block */
.card__header { }                /* Element */
.card__title { }                 /* Element */
.card__body { }                  /* Element */
.card--featured { }              /* Modifier */
.card__title--large { }          /* Element with modifier */

/* ❌ INCORRECT - Various anti-patterns */
.card .title { }                 /* Cascading (not BEM) */
.cardTitle { }                   /* camelCase (not BEM) */
.card-header-title { }           /* Multiple elements (not BEM) */
.featured-card { }               /* Modifier first (not BEM) */
.card__header__title { }         /* Nested elements (not BEM) */
```

**BEM Rules:**
- ✅ Single underscore for normal classes: `.card`
- ✅ Double underscore for elements: `.card__title`
- ✅ Double dash for modifiers: `.card--featured`
- ❌ NO nested elements: `.card__header__title` ❌
- ❌ NO cascading: `.card .title` ❌
- ❌ NO deep nesting: `.parent .child .grandchild` ❌

### 3. Atomic Development Structure

Organize components by complexity:

1. **Elements**: Basic building blocks
   - Buttons, inputs, labels, icons, links
   - Single responsibility, highly reusable
   - Example: `<button class="btn btn--primary">Click</button>`

2. **Components**: Groups of elements working together
   - Layouts, cards, forms, navigation bars, carousels
   - Combine multiple elements
   - Example: Layout with header + navigation + footer

3. **Pages**: Complete screens with real content
   - Home page, dashboard, profile page
   - Combine multiple components
   - Example: Dashboard page using layout + cards + forms

```
Complexity Hierarchy:
Elements → Components → Pages

button → form (button + input + label) → registration page (form + layout + footer)
```

### 4. Mobile-First Approach (Mandatory)

Always write mobile styles first, then enhance for larger screens using `min-width` media queries.

```css
/* ✅ CORRECT - Mobile first */
.component {
  /* Mobile styles (default) */
  width: 100%;
  padding: var(--space-sm);
  font-size: var(--font-size-body-small);
}

/* Tablet and up */
@media (min-width: 768px) {
  .component {
    width: 50%;
    padding: var(--space-md);
  }
}

/* Desktop and up */
@media (min-width: 1024px) {
  .component {
    width: 33.333%;
    padding: var(--space-lg);
    font-size: var(--font-size-body);
  }
}

/* ❌ INCORRECT - Desktop first */
.component {
  width: 50%;
  padding: var(--space-lg);
}

@media (max-width: 767px) {
  .component {
    width: 100%;
    padding: var(--space-sm);
  }
}
```

**Breakpoints**:
- Mobile: Default (< 768px)
- Tablet: `@media (min-width: 768px)`
- Desktop: `@media (min-width: 1024px)`
- Large Desktop: `@media (min-width: 1440px)`

### 5. Accessibility (WCAG 2.1 Level AA)

All components **MUST** meet these requirements:

#### Keyboard Navigation
- ✅ All interactive elements accessible via Tab key
- ✅ Enter/Space to activate buttons and links
- ✅ Arrow keys for menus and lists
- ✅ Escape to close dialogs and menus

#### Focus Indicators
- ✅ Visible focus outline on all focusable elements
- ✅ Minimum 2px outline width
- ✅ High contrast focus color

```css
.button:focus,
.link:focus,
.input:focus {
  outline: var(--focus-width) solid var(--focus-color);
  outline-offset: var(--focus-offset);
}

/* Remove outline only when not using keyboard */
.button:focus:not(:focus-visible) {
  outline: none;
}
```

#### Color Contrast
- ✅ 4.5:1 minimum for normal text
- ✅ 3:1 minimum for large text (18pt+ or 14pt+ bold)
- ✅ 3:1 minimum for UI components and graphics

#### ARIA Labels
- ✅ `aria-label` for elements without visible text
- ✅ `aria-describedby` for additional descriptions
- ✅ `aria-expanded` for collapsible elements
- ✅ `aria-current` for current page/item

```html
<!-- ✅ CORRECT -->
<button type="button" aria-label="Close dialog" aria-expanded="false">
  ×
</button>

<label for="email">Email Address</label>
<input
  type="email"
  id="email"
  name="email"
  aria-describedby="email-help"
  required>
<span id="email-help">We'll never share your email</span>

<!-- ❌ INCORRECT -->
<div onclick="close()">×</div>
<input type="email" placeholder="Email">
```

#### Touch Targets
- ✅ Minimum 44x44px for all interactive elements
- ✅ Use `var(--touch-target-min)` token

```css
.button,
.link,
.input,
.checkbox {
  min-width: var(--touch-target-min);
  min-height: var(--touch-target-min);
}
```

#### Semantic HTML
- ✅ Use proper HTML5 elements: `<header>`, `<nav>`, `<main>`, `<footer>`, `<article>`, `<section>`
- ✅ Use `<button>` for buttons, not `<div>` or `<a>`
- ✅ Use proper heading hierarchy (h1 → h2 → h3)

---

## 🎨 Design Tokens Reference

All design tokens are defined in `ui-library/common.css` as CSS custom properties in the `:root` selector.

### Colors

#### Primary Colors
```css
--color-primary: #336699;        /* Primary brand color - links, buttons, highlights */
--color-secondary: #000000;      /* Secondary brand color */
--color-background: #f8f9fa;     /* Page background color */
```

#### Semantic Colors
```css
--color-success: #29823b;        /* Success messages, positive actions */
--color-warning: #e9a100;        /* Warning messages, caution states */
--color-error: #dc2020;          /* Error messages, destructive actions */
--color-info: #017aad;           /* Informational messages, neutral highlights */
```

#### Neutral Colors (Grayscale)
```css
--color-black: #000000;          /* Pure black */
--color-gray-900: #212529;       /* Darkest gray - primary text */
--color-gray-700: #495057;       /* Dark gray - secondary text */
--color-gray-500: #adb5bd;       /* Medium gray - placeholders, disabled text */
--color-gray-300: #dee2e6;       /* Light gray - borders, dividers */
--color-gray-100: #f8f9fa;       /* Lightest gray - backgrounds, subtle fills */
--color-white: #ffffff;          /* Pure white */
```

**Usage Guidelines:**
- Use `--color-primary` for primary actions and highlights
- Use `--color-gray-900` for main text content
- Use `--color-gray-700` for secondary text
- Use `--color-gray-300` for borders and dividers
- Use semantic colors (`success`, `error`, `warning`, `info`) only for their intended purposes

### Typography

#### Font Families
```css
--font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-mono: 'Fira Code', 'Courier New', monospace;
```

#### Font Sizes
```css
--font-size-h1: 2.5rem;          /* 40px - Page titles */
--font-size-h2: 2rem;            /* 32px - Major sections */
--font-size-h3: 1.75rem;         /* 28px - Subsections */
--font-size-h4: 1.5rem;          /* 24px - Card titles, minor headings */
--font-size-h5: 1.25rem;         /* 20px - Small headings */
--font-size-h6: 1rem;            /* 16px - Smallest heading */
--font-size-body-large: 1.125rem;/* 18px - Large body text */
--font-size-body: 1rem;          /* 16px - Default body text */
--font-size-body-small: 0.875rem;/* 14px - Small text, captions */
--font-size-caption: 0.75rem;    /* 12px - Tiny text, labels */
```

**Responsive Typography:**
- Mobile: Base font sizes
- Tablet (768px+): Headings increase slightly
- Desktop (1024px+): Headings increase further

#### Font Weights
```css
--font-weight-light: 300;        /* Light - subtle text */
--font-weight-regular: 400;      /* Regular - body text */
--font-weight-medium: 500;       /* Medium - emphasized text */
--font-weight-semibold: 600;     /* Semibold - headings, important text */
--font-weight-bold: 700;         /* Bold - strong emphasis */
```

#### Line Heights
```css
--line-height-heading: 1.2;      /* Tight - for headings */
--line-height-body: 1.5;         /* Normal - for body text */
--line-height-compact: 1.3;      /* Compact - for UI elements */
```

### Spacing (8px Scale)

```css
--space-xs: 0.25rem;   /* 4px  - Minimal spacing */
--space-sm: 0.5rem;    /* 8px  - Small spacing, gaps */
--space-md: 1rem;      /* 16px - Default spacing, padding */
--space-lg: 1.5rem;    /* 24px - Large spacing */
--space-xl: 2rem;      /* 32px - Extra large spacing */
--space-2xl: 3rem;     /* 48px - Section spacing */
--space-3xl: 4rem;     /* 64px - Major section spacing */
```

**Usage Guidelines:**
- Use `--space-md` as the default spacing
- Use `--space-sm` for tight layouts
- Use `--space-lg` and above for section spacing
- Maintain 8px grid system for visual harmony

### Border Radius

```css
--radius-none: 0;                /* No rounding */
--radius-small: 0.25rem;         /* 4px  - Buttons, small inputs */
--radius-medium: 0.5rem;         /* 8px  - Cards, modals, larger inputs */
--radius-large: 1rem;            /* 16px - Large containers */
--radius-full: 9999px;           /* Full rounding - pills, avatars, badges */
```

### Shadows

```css
--shadow-small: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
/* Subtle shadow - hover states, slight elevation */

--shadow-medium: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
/* Medium shadow - cards, dropdowns */

--shadow-large: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
/* Large shadow - modals, popovers, major elevation */

--shadow-xlarge: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
/* Extra large shadow - drawers, major overlays */
```

### Animation

#### Duration
```css
--duration-fast: 150ms;          /* Quick - hover effects, tooltips */
--duration-normal: 300ms;        /* Default - most transitions */
--duration-slow: 500ms;          /* Slow - complex animations, modals */
```

#### Easing
```css
--easing-ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);  /* Smooth - default transitions */
--easing-ease-out: cubic-bezier(0, 0, 0.2, 1);       /* Decelerate - entrances */
--easing-ease-in: cubic-bezier(0.4, 0, 1, 1);        /* Accelerate - exits */
```

**Usage Example:**
```css
.button {
  transition: all var(--duration-fast) var(--easing-ease-in-out);
}

.button:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-medium);
}
```

### Accessibility Tokens

```css
--focus-color: #0066cc;          /* Focus outline color */
--focus-width: 2px;              /* Focus outline width */
--focus-offset: 2px;             /* Focus outline offset */
--touch-target-min: 44px;        /* Minimum touch target size (44x44px) */
```

---

## 📏 Coding Standards

### CSS Property Order

**ALWAYS** order CSS properties in this exact sequence:

1. **Positioning**: `position`, `top`, `right`, `bottom`, `left`, `z-index`
2. **Display & Box Model**: `display`, `flex`, `grid`, `align-items`, `justify-content`, `width`, `height`, `margin`, `padding`, `border`
3. **Typography**: `font-family`, `font-size`, `font-weight`, `line-height`, `color`, `text-align`, `text-decoration`
4. **Visual**: `background`, `background-color`, `border-radius`, `box-shadow`, `opacity`
5. **Other**: `cursor`, `transition`, `animation`, `transform`

```css
.component {
  /* 1. Positioning */
  position: relative;
  top: 0;
  left: 0;
  z-index: 10;

  /* 2. Display & Box Model */
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--space-md);
  border: 1px solid var(--color-gray-300);

  /* 3. Typography */
  font-family: var(--font-primary);
  font-size: var(--font-size-body);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-body);
  color: var(--color-gray-900);
  text-align: left;

  /* 4. Visual */
  background-color: var(--color-white);
  border-radius: var(--radius-medium);
  box-shadow: var(--shadow-small);
  opacity: 1;

  /* 5. Other */
  cursor: pointer;
  transition: all var(--duration-fast) var(--easing-ease-in-out);
}
```

### HTML Standards

#### Semantic HTML5
```html
<!-- ✅ CORRECT - Semantic structure -->
<header class="header">
  <nav class="header__nav" role="navigation" aria-label="Main navigation">
    <ul class="header__nav-list">
      <li class="header__nav-item">
        <a href="#home" class="header__nav-link">Home</a>
      </li>
    </ul>
  </nav>
</header>

<main class="main" id="main-content">
  <article class="article">
    <h1 class="article__title">Article Title</h1>
    <p class="article__text">Content here...</p>
  </article>
</main>

<footer class="footer">
  <p class="footer__text">&copy; 2025</p>
</footer>

<!-- ❌ INCORRECT - Non-semantic divs -->
<div class="header">
  <div class="nav">
    <div class="item">
      <a href="#home">Home</a>
    </div>
  </div>
</div>
```

#### Attribute Order
1. `class`
2. `id`, `name`
3. `data-*`
4. `src`, `for`, `type`, `href`, `value`
5. `title`, `alt`
6. `role`, `aria-*`
7. `tabindex`
8. `style` (avoid inline styles)

```html
<a
  class="btn btn--primary"
  id="submit-btn"
  data-action="submit"
  href="#"
  role="button"
  aria-label="Submit form"
  tabindex="0">
  Submit
</a>
```

### JavaScript Standards

#### ES6+ Modern Syntax
```javascript
// ✅ CORRECT - ES6+ features
const calculateTotal = (items) => {
  return items.reduce((total, item) => total + item.price, 0);
};

const userProfile = {
  name: 'John Doe',
  email: 'john@example.com',
  age: 30
};

const { name, email } = userProfile;
const greeting = `Hello, ${name}!`;

// Event delegation
const nav = document.querySelector('.nav');
nav.addEventListener('click', (event) => {
  const link = event.target.closest('.nav__link');
  if (link) {
    handleNavigationClick(event, link);
  }
});

// ❌ INCORRECT - Old syntax
var total = 0;
function calc(items) {
  for (var i = 0; i < items.length; i++) {
    total = total + items[i].price;
  }
  return total;
}
```

#### Naming Conventions
```javascript
// Variables & Functions: camelCase
const userName = 'John';
const isActive = true;
const getUserData = () => { };
const handleClick = () => { };

// Constants: UPPER_SNAKE_CASE
const API_URL = 'https://api.example.com';
const MAX_ITEMS = 100;
const DEFAULT_TIMEOUT = 5000;

// Classes: PascalCase
class UserProfile { }
class DataManager { }
```

#### Function Guidelines
- Keep functions small (ideally under 20 lines)
- Use descriptive verb-based names
- Limit parameters (max 3-4, use object destructuring for more)
- Return early to avoid deep nesting
- Prefer async/await over Promise chains

```javascript
// ✅ CORRECT
const validateUser = ({ email, age, name }) => {
  if (!email) return { valid: false, error: 'Email required' };
  if (!name) return { valid: false, error: 'Name required' };
  if (age < 18) return { valid: false, error: 'Must be 18+' };

  return { valid: true };
};

// Async/await
const fetchUserData = async (userId) => {
  try {
    const response = await fetch(`/api/users/${userId}`);
    if (!response.ok) throw new Error('User not found');

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching user:', error);
    return null;
  }
};

// ❌ INCORRECT
function validate(email, age, name, country, phone, address) {
  if (email) {
    if (name) {
      if (age >= 18) {
        return true;
      }
    }
  }
  return false;
}
```

---

## 🏗️ Component Architecture

### Creating New Components

Follow this step-by-step process:

#### 1. Determine Atomic Level
- **Element**: Single responsibility (button, input, icon)
- **Component**: Multiple elements working together (layout, card, form)
- **Page**: Full screen combining multiple components

#### 2. Choose BEM Naming
```css
.component { }                    /* Block */
.component__element { }           /* Element */
.component__element--modifier { } /* Element with modifier */
.component--variant { }           /* Block with modifier */
```

#### 3. Create File Structure
```
/components/category/component-name/
  component-name.html    # Template with usage examples
  component-name.css     # BEM styles using design tokens
  component-name.js      # Vanilla JavaScript behavior
  README.md              # Documentation
```

#### 4. Implement Using Design Tokens
```css
.component {
  /* ONLY use design tokens - NO hardcoded values */
  padding: var(--space-md);
  border-radius: var(--radius-medium);
  background-color: var(--color-white);
  box-shadow: var(--shadow-small);
}
```

#### 5. Ensure Accessibility
- Keyboard navigation
- ARIA labels
- Focus indicators
- Touch targets (44x44px minimum)
- Semantic HTML

#### 6. Test Thoroughly
- Multiple browsers
- Multiple screen sizes
- Keyboard navigation
- Screen readers
- Color contrast

### Component Template

```html
<!-- HTML Structure -->
<div class="component component--variant">
  <div class="component__header">
    <h3 class="component__title">Component Title</h3>
  </div>
  <div class="component__body">
    <p class="component__text">Component content</p>
  </div>
  <div class="component__footer">
    <button class="component__action" type="button">
      Action
    </button>
  </div>
</div>
```

```css
/* CSS - Always add to ui-library/common.css or component-specific CSS */

/* Block */
.component {
  /* Positioning */
  position: relative;

  /* Display & Box Model */
  display: flex;
  flex-direction: column;
  padding: var(--space-md);
  border: 1px solid var(--color-gray-300);

  /* Visual */
  background-color: var(--color-white);
  border-radius: var(--radius-medium);
  box-shadow: var(--shadow-small);

  /* Other */
  transition: all var(--duration-fast) var(--easing-ease-in-out);
}

/* Elements */
.component__header {
  margin-bottom: var(--space-md);
  padding-bottom: var(--space-sm);
  border-bottom: 1px solid var(--color-gray-300);
}

.component__title {
  font-size: var(--font-size-h4);
  font-weight: var(--font-weight-semibold);
  color: var(--color-gray-900);
  margin: 0;
}

.component__body {
  flex: 1;
  margin-bottom: var(--space-md);
}

.component__text {
  font-size: var(--font-size-body);
  line-height: var(--line-height-body);
  color: var(--color-gray-700);
}

.component__footer {
  display: flex;
  justify-content: flex-end;
}

.component__action {
  min-width: var(--touch-target-min);
  min-height: var(--touch-target-min);
}

/* Modifiers */
.component--variant {
  border-color: var(--color-primary);
  background-color: var(--color-gray-100);
}

/* States */
.component:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-medium);
}

.component:focus-within {
  outline: var(--focus-width) solid var(--focus-color);
  outline-offset: var(--focus-offset);
}

/* Responsive */
@media (min-width: 768px) {
  .component {
    flex-direction: row;
    align-items: center;
  }

  .component__header {
    margin-bottom: 0;
    margin-right: var(--space-md);
    padding-bottom: 0;
    border-bottom: none;
    border-right: 1px solid var(--color-gray-300);
    padding-right: var(--space-md);
  }

  .component__body {
    flex: 1;
    margin-bottom: 0;
  }
}
```

```javascript
// JavaScript - Vanilla ES6+
'use strict';

/**
 * Initialize component
 */
const initComponent = () => {
  const components = document.querySelectorAll('.component');

  components.forEach(component => {
    const action = component.querySelector('.component__action');

    if (action) {
      action.addEventListener('click', handleAction);
    }
  });
};

/**
 * Handle action button click
 */
const handleAction = (event) => {
  event.preventDefault();
  const button = event.currentTarget;
  const component = button.closest('.component');

  // Component logic here
  console.log('Action clicked', component);
};

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initComponent);
} else {
  initComponent();
}

// Export for external use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { initComponent };
}
```

---

## ♿ Accessibility Requirements

All components MUST meet these specific requirements:

### 1. Keyboard Navigation Matrix

| Element Type | Tab | Enter | Space | Arrow Keys | Escape |
|--------------|-----|-------|-------|------------|--------|
| Button | ✅ Focus | ✅ Activate | ✅ Activate | - | - |
| Link | ✅ Focus | ✅ Follow | - | - | - |
| Input | ✅ Focus | - | - | - | - |
| Select | ✅ Focus | ✅ Open | ✅ Open | ✅ Navigate | ✅ Close |
| Checkbox | ✅ Focus | - | ✅ Toggle | - | - |
| Radio | ✅ Focus | - | ✅ Select | ✅ Select | - |
| Menu | ✅ Focus | ✅ Activate | - | ✅ Navigate | ✅ Close |
| Dialog | ✅ Trap focus | - | - | - | ✅ Close |

### 2. Required ARIA Attributes

| Component | Required ARIA |
|-----------|---------------|
| Button with icon only | `aria-label="Description"` |
| Collapsible section | `aria-expanded="true/false"` |
| Current page link | `aria-current="page"` |
| Form input with help | `aria-describedby="help-id"` |
| Required field | `aria-required="true"` or `required` |
| Error message | `aria-invalid="true"` + `aria-describedby="error-id"` |
| Live region | `aria-live="polite/assertive"` |
| Modal dialog | `role="dialog"` + `aria-modal="true"` + `aria-labelledby="title-id"` |

### 3. Color Contrast Requirements

| Text Type | Minimum Ratio | Example |
|-----------|---------------|---------|
| Normal text (< 18pt) | 4.5:1 | `--color-gray-900` on `--color-white` |
| Large text (≥ 18pt or 14pt bold) | 3:1 | `--color-gray-700` on `--color-gray-100` |
| UI components | 3:1 | Borders, icons, form inputs |
| Disabled text | 3:1 (recommended) | Grayed out but still readable |

### 4. Focus Indicator Requirements

```css
/* All focusable elements MUST have visible focus */
.button:focus,
.link:focus,
.input:focus {
  outline: var(--focus-width) solid var(--focus-color);
  outline-offset: var(--focus-offset);
}

/* Remove outline ONLY when not using keyboard */
.button:focus:not(:focus-visible) {
  outline: none;
}

/* Alternative: box-shadow for custom focus styles */
.button:focus-visible {
  outline: none;
  box-shadow: 0 0 0 var(--focus-width) var(--focus-color);
}
```

---

## 📱 Responsive Design

### Breakpoint Strategy

```css
/* Mobile Default (< 768px) */
.component {
  width: 100%;
  padding: var(--space-sm);
  font-size: var(--font-size-body-small);
}

/* Tablet (768px - 1023px) */
@media (min-width: 768px) {
  .component {
    width: 50%;
    padding: var(--space-md);
    font-size: var(--font-size-body);
  }
}

/* Desktop (1024px - 1439px) */
@media (min-width: 1024px) {
  .component {
    width: 33.333%;
    padding: var(--space-lg);
  }
}

/* Large Desktop (1440px+) */
@media (min-width: 1440px) {
  .component {
    max-width: 1440px;
    margin: 0 auto;
  }
}
```

### Container Max Widths

```css
.container {
  width: 100%;
  margin: 0 auto;
  padding: 0 var(--space-md);
}

@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}

@media (min-width: 1024px) {
  .container {
    max-width: 960px;
  }
}

@media (min-width: 1440px) {
  .container {
    max-width: 1200px;
  }
}
```

---

## 🧩 Available Components

### Layout Components

#### Base Layout (`layout-base`)

Complete application layout with header, navigation, user menu, content area, and footer.

**Location**: `ui-library/components/layouts/layout-base/`

**Features**:
- Responsive header with logo, navigation, and user dropdown
- Mobile-first design with hamburger menu
- Sticky header option
- Content area with title and action buttons
- Footer with signature
- Full keyboard navigation
- WCAG 2.1 Level AA accessible

**Usage**:
```html
<!-- Include CSS -->
<link rel="stylesheet" href="path/to/ui-library/common.css">
<link rel="stylesheet" href="path/to/ui-library/components/layouts/layout-base/layout-base.css">

<!-- HTML Structure -->
<div class="layout">
  <header class="layout__header">
    <div class="layout__header-container">
      <!-- Logo, Navigation, User Menu -->
    </div>
  </header>

  <main class="layout__main" id="main-content">
    <div class="layout__main-container">
      <div class="layout__content-header">
        <h1 class="layout__title">Page Title</h1>
        <div class="layout__actions">
          <button class="layout__action-button layout__action-button--primary">
            Save
          </button>
        </div>
      </div>

      <div class="layout__content">
        <!-- Your content here -->
      </div>
    </div>
  </main>

  <footer class="layout__footer">
    <div class="layout__footer-container">
      <p class="layout__footer-signature">&copy; 2025</p>
    </div>
  </footer>
</div>

<!-- Include JavaScript -->
<script src="path/to/ui-library/components/layouts/layout-base/layout-base.js"></script>
```

**Documentation**: See [Layout Base README](ui-library/components/layouts/layout-base/README.md)

### Components In Development

- **Cards**: Content containers with various layouts
- **Buttons**: Button variants and states
- **Forms**: Input fields, selects, checkboxes, radios
- **Alerts**: Success, error, warning, info messages
- **Modals**: Dialog windows and overlays
- **Navigation**: Breadcrumbs, tabs, pagination

---

## 🔄 Workflow Guidelines

### For AI Agents - Standard Task Flow

```
1. Read AI-GUIDELINES.md
   ↓
2. Read design-system/README.md (this file) - MANDATORY
   ↓
3. Identify design tokens needed
   ↓
4. Check existing patterns in codebase
   ↓
5. Apply BEM naming convention
   ↓
6. Write mobile-first CSS
   ↓
7. Ensure accessibility (keyboard, ARIA, focus, contrast)
   ↓
8. Test thoroughly
   ↓
9. Complete quality checklist
   ↓
10. Task complete
```

### Adding New Design Tokens

1. Add to `ui-library/common.css` in `:root` section
2. Follow naming convention: `--category-name`
3. Document usage and purpose
4. Update this README if needed

```css
:root {
  /* New color token */
  --color-tertiary: #ff6b6b;  /* Description of usage */
}
```

### Modifying Existing Components

1. Read component README
2. Understand component structure
3. Modify while maintaining BEM
4. Test all states and variants
5. Update documentation if needed

---

## 📚 Common Patterns

### Pattern: Card Component

```html
<div class="card">
  <div class="card__header">
    <h3 class="card__title">Card Title</h3>
  </div>
  <div class="card__body">
    <p class="card__text">Content goes here</p>
  </div>
  <div class="card__footer">
    <button class="card__action" type="button">Action</button>
  </div>
</div>
```

```css
.card {
  padding: var(--space-md);
  background-color: var(--color-white);
  border-radius: var(--radius-medium);
  box-shadow: var(--shadow-small);
  transition: all var(--duration-fast) var(--easing-ease-in-out);
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-medium);
}
```

### Pattern: Button States

```css
.button {
  padding: var(--space-sm) var(--space-md);
  font-size: var(--font-size-body);
  font-weight: var(--font-weight-medium);
  border-radius: var(--radius-small);
  transition: all var(--duration-fast) var(--easing-ease-in-out);
}

/* Primary variant */
.button--primary {
  background-color: var(--color-primary);
  color: var(--color-white);
  border: none;
}

.button--primary:hover {
  background-color: var(--color-gray-900);
}

.button--primary:focus {
  outline: var(--focus-width) solid var(--focus-color);
  outline-offset: var(--focus-offset);
}

.button--primary:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
```

### Pattern: Form Field

```html
<div class="form-field">
  <label for="email" class="form-field__label">
    Email Address
    <span class="form-field__required" aria-label="required">*</span>
  </label>
  <input
    type="email"
    id="email"
    name="email"
    class="form-field__input"
    aria-describedby="email-help"
    required>
  <span id="email-help" class="form-field__help">
    We'll never share your email
  </span>
</div>
```

```css
.form-field {
  margin-bottom: var(--space-md);
}

.form-field__label {
  display: block;
  margin-bottom: var(--space-xs);
  font-weight: var(--font-weight-medium);
  color: var(--color-gray-900);
}

.form-field__input {
  width: 100%;
  padding: var(--space-sm) var(--space-md);
  font-size: var(--font-size-body);
  border: 1px solid var(--color-gray-300);
  border-radius: var(--radius-small);
  transition: border-color var(--duration-fast) var(--easing-ease-in-out);
}

.form-field__input:focus {
  outline: var(--focus-width) solid var(--focus-color);
  outline-offset: var(--focus-offset);
  border-color: var(--color-primary);
}

.form-field__help {
  display: block;
  margin-top: var(--space-xs);
  font-size: var(--font-size-body-small);
  color: var(--color-gray-700);
}
```

---

## 🚫 Anti-Patterns

### ❌ What NOT to Do

1. **Hardcoding Values**
```css
/* ❌ WRONG */
.component {
  color: #336699;
  padding: 16px;
  border-radius: 8px;
}

/* ✅ CORRECT */
.component {
  color: var(--color-primary);
  padding: var(--space-md);
  border-radius: var(--radius-medium);
}
```

2. **Non-BEM Naming**
```css
/* ❌ WRONG */
.card .title { }
.cardTitle { }
.card-large-title { }

/* ✅ CORRECT */
.card__title { }
.card__title--large { }
```

3. **Desktop-First**
```css
/* ❌ WRONG */
.component {
  width: 50%;
}

@media (max-width: 767px) {
  .component {
    width: 100%;
  }
}

/* ✅ CORRECT */
.component {
  width: 100%;
}

@media (min-width: 768px) {
  .component {
    width: 50%;
  }
}
```

4. **Inaccessible Elements**
```html
<!-- ❌ WRONG -->
<div onclick="handleClick()">Click me</div>

<!-- ✅ CORRECT -->
<button type="button" onclick="handleClick()">Click me</button>
```

5. **Missing Focus States**
```css
/* ❌ WRONG */
.button:focus {
  outline: none; /* Never do this without alternative */
}

/* ✅ CORRECT */
.button:focus {
  outline: var(--focus-width) solid var(--focus-color);
  outline-offset: var(--focus-offset);
}

/* ✅ ALSO CORRECT - Remove outline only when not using keyboard */
.button:focus:not(:focus-visible) {
  outline: none;
}
```

6. **Using !important**
```css
/* ❌ WRONG */
.component {
  color: red !important;
}

/* ✅ CORRECT - Use more specific selectors or restructure CSS */
.component.component--error {
  color: var(--color-error);
}
```

7. **Deep Nesting**
```css
/* ❌ WRONG */
.parent .child .grandchild .item {
  color: red;
}

/* ✅ CORRECT - Use BEM */
.parent__item {
  color: var(--color-error);
}
```

---

## 🎓 Learning Resources

### Documentation Hierarchy

1. **AI-GUIDELINES.md** - Start here for AI agents
2. **design-system/README.md** - This file (complete technical reference)
3. **ui-library/README.md** - UI library usage guide
4. **ui-library/code-standards.md** - Detailed coding standards
5. **ui-library/STYLE-GUIDE.md** - Visual style guide
6. **Component READMEs** - Specific component documentation

### Quick Reference

| Need to... | Check... |
|------------|----------|
| Find design tokens | `ui-library/common.css` `:root` section |
| Understand BEM | This file → [BEM Methodology](#2-bem-methodology-strict) |
| Learn accessibility | This file → [Accessibility Requirements](#-accessibility-requirements) |
| See component examples | `ui-library/components/*/README.md` |
| Understand responsive design | This file → [Responsive Design](#-responsive-design) |

---

## ⚠️ Critical Reminders

1. **Design Tokens ONLY** - Never hardcode colors, spacing, typography, or any other values
2. **BEM is Strict** - Follow `.block__element--modifier` exactly
3. **Mobile-First Always** - Desktop-first is not allowed
4. **Accessibility is Mandatory** - WCAG 2.1 Level AA is the minimum
5. **English Only** - All code, comments, and documentation must be in English
6. **CSS Property Order** - Follow the exact order specified
7. **Test Thoroughly** - Keyboard, screen readers, multiple browsers, multiple screen sizes

---

## 📞 Support

For questions or clarifications:

1. Check this document first (design-system/README.md)
2. Check component-specific README files
3. Review existing code patterns
4. Ask the user if still unclear

---

**Version**: 2.0.0
**Last Updated**: 2025-11-28

**Remember**: This Design System prioritizes consistency, accessibility, and maintainability. Always refer to this document when making changes.
