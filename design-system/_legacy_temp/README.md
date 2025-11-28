# UI Library & Design System Standards

This is the production-ready UI component library that implements the Design System specifications. It serves as the single source of truth for front-end development, combining coding standards, best practices, and the visual style guide.

## Table of Contents

1. [Overview](#overview)
2. [Installation](#installation)
3. [General Principles](#general-principles)
4. [Design System Foundation](#design-system-foundation)
5. [Coding Standards](#coding-standards)
    - [HTML](#html-standards)
    - [CSS](#css-standards)
    - [JavaScript](#javascript-standards)
6. [File Organization](#file-organization)
7. [Base Styles Reference](#base-styles-reference)
8. [Component Library & Usage](#component-library--usage)
9. [Customization](#customization)
10. [Quality Assurance](#quality-assurance)
11. [Browser Support](#browser-support)

---

## Overview

The UI Library provides pre-built, reusable components following the Design System standards. All components are:

-   **Consistent**: Built according to design tokens.
-   **Accessible**: WCAG 2.1 Level AA compliant.
-   **Responsive**: Mobile-first design.
-   **Modular**: Following BEM and Atomic Development.
-   **Framework-agnostic**: Pure HTML, CSS, and JavaScript.

---

## Installation

### Quick Start

1. **Include Base Styles**: Add `common.css` to your HTML head. This includes design tokens, CSS reset, and base typography.

2. **Include Component Styles**: Add the specific component CSS files you need.

3. **Include JavaScript**: Add component JavaScript files before the closing `</body>` tag.

### Basic Setup

```html
<!DOCTYPE html>
<html lang="pt">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Application</title>

  <!-- Step 1: Base Design System Styles (Required) -->
  <link rel="stylesheet" href="path/to/ui-library/common.css">

  <!-- Step 2: Component-Specific Styles (As needed) -->
  <link rel="stylesheet" href="path/to/ui-library/components/layouts/layout-base/layout-base.css">
</head>
<body>
  <!-- Your content here using components -->

  <!-- Step 3: Component JavaScript (As needed) -->
  <script src="path/to/ui-library/components/layouts/layout-base/layout-base.js"></script>
</body>
</html>
```

### Using with Build Tools

If you're using a build tool (Webpack, Vite, etc.), you can import CSS and JavaScript:

```javascript
// Import base styles
import './path/to/ui-library/common.css';

// Import component styles
import './path/to/ui-library/components/layouts/layout-base/layout-base.css';

// Import component JavaScript
import { initLayout } from './path/to/ui-library/components/layouts/layout-base/layout-base.js';

// Initialize
initLayout();
```

---

## General Principles

### Atomic Development
We follow the **Atomic Development** methodology to build scalable interfaces:

1.  **Elements**: Basic building blocks (buttons, inputs, labels, icons).
2.  **Components**: Groups of UI elements merged (layout, card, user info, custom dropdown, etc).
3.  **Pages**: A screen composed by reusing components.

### Code Quality
-   **Readability**: Write code that is easy to read and understand.
-   **Single Responsibility**: Keep functions and components focused on doing one thing well.
-   **DRY (Don't Repeat Yourself)**: Reuse code and components whenever possible.
-   **Composition**: Prefer composition over inheritance.

---

## Design System Foundation

### CSS Custom Properties (Design Tokens)
All design tokens are available as CSS variables in the `:root` selector (common.css). **Always use these tokens instead of hardcoded values.**

```css
:root {
  /* Colors */
  --color-primary: #ed002f;
  --color-secondary: #000000;
  --color-success: #29823b;
  --color-white: #ffffff;
  --color-gray-300: #e2e8f0;
  --color-gray-900: #1a202c;

  /* Typography */
  --font-primary: 'Inter', -apple-system, sans-serif;
  --font-size-body: 1rem;
  --font-weight-medium: 500;

  /* Spacing */
  --space-xs: 0.25rem;
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --space-lg: 1.5rem;
  --space-xl: 2rem;

  /* UI */
  --radius-small: 0.25rem;
  --radius-medium: 0.5rem;
  --shadow-medium: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}
```

### CSS Reset & Normalize
We use a modern CSS reset that:
-   Sets `box-sizing: border-box` globally.
-   Removes default margins and padding.
-   Improves font rendering (`antialiased`).
-   Sets a consistent base font size (16px).

---

## Coding Standards

### HTML Standards

#### Semantic HTML
Use semantic HTML5 elements to provide meaning and structure.

```html
<!-- Good -->
<article>
  <header>
    <h1>Article Title</h1>
  </header>
  <p>Content...</p>
</article>
```

#### Attributes Order
1.  `class`
2.  `id`, `name`
3.  `data-*`
4.  `src`, `for`, `type`, `href`, `value`
5.  `title`, `alt`
6.  `role`, `aria-*`

### CSS Standards

#### BEM Methodology
Use **BEM (Block Element Modifier)** for naming classes: `.block__element--modifier`.

-   **Block**: `.card`
-   **Element**: `.card__title`
-   **Modifier**: `.card--featured`

```css
.button { ... }             /* Block */
.button__icon { ... }       /* Element */
.button--primary { ... }    /* Modifier */
```

#### CSS Organization
Order properties logically:
1.  **Positioning** (`position`, `z-index`)
2.  **Box Model** (`display`, `width`, `margin`, `padding`)
3.  **Typography** (`font`, `color`)
4.  **Visual** (`background`, `border`)
5.  **Misc** (`cursor`, `transition`)

#### Mobile-First
Write styles for mobile first, then use `min-width` media queries for larger screens.

```css
.component { width: 100%; } /* Mobile */
@media (min-width: 768px) {
  .component { width: 50%; } /* Tablet+ */
}
```

### JavaScript Standards

#### Code Style
-   Use **ES6+** features (const/let, arrow functions, destructuring).
-   **Variables**: Use `const` by default. Never use `var`.
-   **Naming**:
    -   Variables/Functions: `camelCase`
    -   Constants: `UPPER_SNAKE_CASE`
    -   Classes: `PascalCase`

#### Functions
-   Keep them small and focused.
-   Use descriptive verb-based names (`calculateTotal`, `fetchUser`).
-   Prefer async/await over Promise chains.

---

## File Organization

### Project Structure

```
design-system/ui-library/
├── common.css              # Design tokens and base styles
├── common.js               # Shared JavaScript utilities
├── code-standards.md       # Detailed coding standards
├── STYLE-GUIDE.md          # Visual style guide
├── README.md               # This file
└── components/
    ├── layouts/
    │   ├── layout-base/
    │   │   ├── layout-base.html
    │   │   ├── layout-base.css
    │   │   ├── layout-base.js
    │   │   └── README.md
    │   ├── layout-blank/     # In development
    │   └── layout-login/     # In development
    └── cards/                # In development
```

### Component Structure

Each component follows this standardized structure:

```
/component-name/
  component-name.html    # Template with usage examples
  component-name.css     # BEM methodology styles
  component-name.js      # Vanilla JavaScript behavior
  README.md              # Complete documentation
```

### Naming Conventions

-   **Files**: `kebab-case` (e.g., `layout-base.js`, `user-profile.css`)
-   **CSS Classes**: BEM (e.g., `.layout__header`, `.button--primary`)
-   **JavaScript Variables**: `camelCase` (e.g., `userName`, `isActive`)
-   **JavaScript Constants**: `UPPER_SNAKE_CASE` (e.g., `API_URL`, `MAX_ITEMS`)
-   **JavaScript Functions**: `camelCase` with verbs (e.g., `getUserData`, `handleClick`)

---

## Base Styles Reference

### Typography
-   **Headings**: Inter font, semibold (600), optimized line-height.
-   **Body**: 1rem (16px), line-height 1.5.
-   **Links**: Primary color, underline on hover, visible focus outline.

### Form Elements
All inputs, buttons, and selects are styled for consistency and accessibility.
-   **Focus States**: Visible 2px blue outline.
-   **Touch Targets**: Minimum 44x44px.

---

## Component Library & Usage

Components are organized following Atomic Development methodology. Each component is self-contained with its own HTML, CSS, JavaScript, and documentation.

### Available Components

#### Layouts

Layout components provide the overall page structure for applications.

##### Base Layout (`layout-base`)

Complete application layout with header, navigation, user menu, content area, and footer.

**Location**: `components/layouts/layout-base/`

**Features**:
- Responsive header with logo, navigation, and user dropdown
- Mobile-first design with hamburger menu
- Sticky header
- Content area with title and action buttons
- Footer with signature
- Full keyboard navigation
- WCAG 2.1 Level AA accessible

**Usage**:
```html
<!-- Include CSS -->
<link rel="stylesheet" href="path/to/common.css">
<link rel="stylesheet" href="path/to/components/layouts/layout-base/layout-base.css">

<!-- Layout Structure -->
<div class="layout">
  <header class="layout__header">
    <!-- Logo, Navigation, User Menu -->
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
    <!-- Footer content -->
  </footer>
</div>

<!-- Include JavaScript -->
<script src="path/to/components/layouts/layout-base/layout-base.js"></script>
```

**Documentation**: See [Layout Base README](components/layouts/layout-base/README.md)

---

### Component Structure

Each component follows this structure:

```
/component-name
  component-name.html    # Template with examples
  component-name.css     # BEM styles
  component-name.js      # Vanilla JavaScript behavior
  README.md              # Full documentation
```

### Coming Soon

Additional components are in development:

- **Cards**: Content containers with various layouts
- **Buttons**: Button variants and states
- **Forms**: Input fields, selects, checkboxes, radios
- **Alerts**: Success, error, warning, info messages
- **Modals**: Dialog windows and overlays
- **Navigation**: Breadcrumbs, tabs, pagination

---

## Customization

### Using Design Tokens
You can customize components by overriding CSS variables:

```css
:root {
  --color-primary: #your-color;
  --font-primary: 'YourFont', sans-serif;
}
```

### Extending Components
Create custom variations using BEM modifiers:

```css
.button--custom {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

---

## Quality Assurance

### Accessibility (a11y)
Ensure WCAG 2.1 Level AA compliance:
1.  **Keyboard Nav**: All interactive elements must be keyboard accessible.
2.  **Alt Text**: Required for all images.
3.  **Contrast**: Minimum 4.5:1 for text.
4.  **Semantic HTML**: Use correct elements.

### Performance
1.  **Lazy Load**: Use `loading="lazy"` for images.
2.  **Defer JS**: Use `defer` for scripts.
3.  **Optimize CSS**: Minimize unused styles.

### Code Review Checklist
Before submitting code:
-   [ ] Follows BEM & Atomic Development?
-   [ ] Uses Design Tokens?
-   [ ] Mobile-first?
-   [ ] Accessible (Keyboard/Screen Reader)?
-   [ ] Clean, readable, and DRY?
-   [ ] No console.logs?

---

## Browser Support

-   Chrome (latest 2 versions)
-   Firefox (latest 2 versions)
-   Safari (latest 2 versions)
-   Edge (latest 2 versions)
-   iOS Safari (latest 2 versions)
-   Chrome Android (latest 2 versions)

---

## Support

For questions, issues, or contributions, please create an issue in the project repository.