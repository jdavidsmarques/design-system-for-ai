# Design System Library - Exports Documentation

This document describes what is exported by the `design-system-library` package and how to use it in your applications.

## Package Information

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

## What's Included

### 1. Components

All React components are exported from the library:

```typescript
import { LayoutBase } from 'design-system-library';
```

**Available Components:**
- `LayoutBase` - Complete application layout with header, nav, content, footer

### 2. TypeScript Types

All component prop interfaces are exported:

```typescript
import type { LayoutBaseProps } from 'design-system-library';
```

**Available Types:**
- `LayoutBaseProps` - Props interface for LayoutBase component

### 3. Styles (CSS)

The library includes a complete CSS file with:

**✅ Design Tokens (CSS Custom Properties)**
- Colors (primary, secondary, neutral, semantic)
- Spacing scale (8px grid system)
- Typography (font families, sizes, weights, line heights)
- Border radius
- Shadows
- Z-index scale
- Transitions & animations
- Accessibility tokens
- Grid & layout

**✅ CSS Reset & Normalization**
- Box model reset
- Typography reset
- Form elements reset
- List reset
- Media elements
- Table reset

**✅ Base Styles**
- HTML & body base styles
- Link styles with hover/focus states
- Button reset with focus states
- Input/select/textarea base styles

**✅ Utility Classes**
- `.sr-only` - Screen reader only
- `.focus-visible` - Focus visible for keyboard navigation
- `.hide-mobile`, `.hide-tablet`, `.hide-desktop` - Responsive visibility

**✅ Component Styles**
- All component-specific styles (LayoutBase, etc.)

**✅ Accessibility Features**
- Focus states for keyboard navigation
- Reduced motion support
- Print styles
- Dark mode support (optional, respects user preference)

## Usage

### Basic Setup

```tsx
// 1. Import the library styles (REQUIRED - do this once in your app entry point)
import 'design-system-library/styles';

// 2. Import components
import { LayoutBase } from 'design-system-library';

// 3. Use the components
function App() {
  return (
    <LayoutBase
      logoText="My App"
      navItems={[
        { label: 'Home', href: '/', active: true }
      ]}
      user={{ name: 'John Doe', initials: 'JD' }}
      footerText="© 2025 My App"
    >
      <h1>Welcome!</h1>
    </LayoutBase>
  );
}
```

### With TypeScript

```tsx
import 'design-system-library/styles';
import { LayoutBase } from 'design-system-library';
import type { LayoutBaseProps } from 'design-system-library';

const props: LayoutBaseProps = {
  logoText: 'My App',
  navItems: [
    { label: 'Home', href: '/', active: true }
  ],
  user: { name: 'John Doe', initials: 'JD' },
  footerText: '© 2025 My App',
  children: <h1>Welcome!</h1>
};

function App() {
  return <LayoutBase {...props} />;
}
```

## Design Tokens Usage

All design tokens are available as CSS custom properties. You can use them in your own styles:

```scss
.my-component {
  /* Colors */
  color: var(--color-primary);
  background-color: var(--color-surface);

  /* Spacing */
  padding: var(--space-md);
  margin-bottom: var(--space-lg);

  /* Typography */
  font-size: var(--font-size-body);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-normal);

  /* Border & Shadow */
  border-radius: var(--radius-medium);
  box-shadow: var(--shadow-small);

  /* Transitions */
  transition: all var(--duration-fast) var(--easing-ease-in-out);

  /* Accessibility */
  &:focus {
    outline: var(--focus-width) solid var(--focus-color);
    outline-offset: var(--focus-offset);
  }
}
```

## Build Output

When you build the library, it generates:

```
dist/
├── index.js         # 4.25 kB - ES module with all components
├── index.css        # 25.72 kB - Complete styles (design tokens + components)
└── index.d.ts       # TypeScript declarations
```

## Important Notes

1. **ALWAYS import styles**: You must import `design-system-library/styles` in your app entry point (e.g., `main.tsx` or `App.tsx`)

2. **Import once**: Import the styles only once in your application, typically in the main entry file

3. **Design tokens available**: After importing styles, all CSS custom properties are available globally

4. **No hardcoded values**: Never use hardcoded values in your styles - always use design tokens

5. **BEM methodology**: All component classes follow BEM naming (`.block__element--modifier`)

6. **Mobile-first**: All styles are mobile-first with `min-width` media queries

7. **WCAG 2.1 AA**: All components meet accessibility standards

## File Structure

The library source is organized as:

```
src/
├── lib/
│   └── index.ts              # Main library entry point
├── components/
│   └── layouts/
│       └── layout-base/      # Component source
└── styles/
    ├── base.scss             # Design tokens + CSS reset
    └── native-elements.scss  # Native element styles
```

## Version History

- **v1.0.0** - Initial release
  - LayoutBase component
  - Complete design token system
  - CSS reset & normalization
  - Accessibility features
  - Dark mode support

## Support

For issues or questions, refer to:
- [AI-DESIGN-SYSTEM.md](../AI-DESIGN-SYSTEM.md) - Complete design system documentation
- [AI-GUIDELINES.md](../AI-GUIDELINES.md) - Development guidelines
- [README.md](README.md) - Project overview
