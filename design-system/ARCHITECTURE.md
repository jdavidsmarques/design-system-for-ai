# Design System Architecture

## Overview

This project is structured to serve two purposes:
1. **Library**: Exportable components that can be consumed by other applications
2. **Preview Application**: A development environment to preview and test components

## Project Structure

```
design-system/
├── src/
│   ├── components/          # Exportable components (library code)
│   │   └── layouts/
│   │       └── layout-base/
│   │           ├── layout-base.tsx
│   │           ├── layout-base.scss
│   │           ├── index.ts
│   │           └── readme.md
│   │
│   ├── lib/                 # Library entry point
│   │   └── index.ts         # Exports all components for external consumption
│   │
│   └── preview/             # Preview application (NOT included in library)
│       ├── main.tsx         # Preview app entry point
│       ├── main.scss        # Preview app global styles
│       ├── app.tsx          # Preview app root component
│       ├── app.scss         # Preview app specific styles
│       ├── assets/          # Preview app assets
│       ├── components/      # Preview-specific components
│       └── pages/           # Preview app pages
│
├── dist/                    # Library build output (published to npm)
│   ├── index.js             # Bundled library code
│   ├── index.css            # Bundled library styles
│   └── index.d.ts           # TypeScript type definitions
│
├── dist-preview/            # Preview app build output (NOT published)
│
├── index.html               # Preview app HTML entry point
├── vite.config.ts           # Build configuration
└── package.json             # Package configuration
```

## Architecture Principles

### 1. Separation of Concerns

- **`src/components/`**: Contains ONLY library code that will be exported
- **`src/lib/`**: Entry point for the library, exports all components
- **`src/preview/`**: Contains ONLY preview application code (NOT exported)

### 2. Build Outputs

#### Library Build (`npm run build:lib`)
- Entry: `src/lib/index.ts`
- Output: `dist/`
- Includes: Components + Styles
- External: `react`, `react-dom` (peer dependencies)
- Usage: Import in other projects

#### Preview Build (`npm run build:preview`)
- Entry: `src/preview/main.tsx`
- Output: `dist-preview/`
- Includes: Full application bundle
- Usage: Static hosting for component preview

### 3. Import Strategy

**In preview application** (`src/preview/app.tsx`):
```tsx
// Import from library entry point (simulates external usage)
import { LayoutBase } from '../lib';
```

**In other applications** (after npm install):
```tsx
// Import from published package
import { LayoutBase } from 'design-system-library';
import 'design-system-library/styles';
```

## Available Scripts

### Development

```bash
# Start preview application in development mode
npm run dev

# Alternative command (same as above)
npm run dev:preview
```

### Building

```bash
# Build library for distribution (default)
npm run build

# Build library explicitly
npm run build:lib

# Build preview application
npm run build:preview
```

### Preview

```bash
# Preview the development server
npm run preview

# Preview the built preview application
npm run preview:dist
```

### Linting

```bash
# Run ESLint
npm run lint
```

## Component Development Workflow

### 1. Create a New Component

```bash
src/components/
└── [category]/              # e.g., layouts, elements, etc.
    └── [component-name]/    # kebab-case
        ├── [component-name].tsx
        ├── [component-name].scss
        ├── index.ts
        └── readme.md
```

### 2. Export Component

Update `src/lib/index.ts`:
```typescript
export * from '../components/[category]/[component-name]';
export type { ComponentNameProps } from '../components/[category]/[component-name]';
```

### 3. Use in Preview

Create a preview page in `src/preview/pages/[component-name].tsx`:
```tsx
import { ComponentName } from '../../lib';

export function ComponentNamePreview() {
  return <ComponentName prop="value" />;
}
```

### 4. Test and Build

```bash
# Test in development
npm run dev

# Build library
npm run build:lib

# Verify build output
ls -la dist/
```

## Styling Guidelines

### 1. Component Styles

- Use SCSS with nesting
- Follow BEM naming convention
- Use design tokens (CSS custom properties)
- Mobile-first responsive design

Example:
```scss
.component-name {
  color: var(--color-primary);

  &__element {
    padding: var(--space-md);

    &--modifier {
      background: var(--color-background);
    }
  }
}
```

### 2. Global Styles

- Library: NO global styles (only component styles)
- Preview: Global styles in `src/preview/main.scss`

## TypeScript

### Exports

Each component must export:
1. Component itself (named and default)
2. Props interface

Example:
```typescript
export interface ComponentNameProps {
  prop: string;
}

export const ComponentName: React.FC<ComponentNameProps> = ({ prop }) => {
  return <div>{prop}</div>;
};

export default ComponentName;
```

### Type Definitions

- TypeScript declarations are automatically generated
- Output: `dist/index.d.ts`
- Configured in `tsconfig.json`

## Publishing

### Package Configuration

`package.json` is configured for npm publishing:

```json
{
  "name": "design-system-library",
  "version": "1.0.0",
  "main": "./dist/index.js",
  "module": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "import": "./dist/index.js",
      "types": "./dist/index.d.ts"
    },
    "./styles": "./dist/index.css"
  },
  "files": ["dist", "README.md"]
}
```

### Publishing Workflow

```bash
# 1. Build library
npm run build:lib

# 2. Test build
ls -la dist/

# 3. Publish to npm (when ready)
npm publish
```

## Consuming the Library

### Installation

```bash
npm install design-system-library
```

### Usage

```tsx
import { LayoutBase } from 'design-system-library';
import 'design-system-library/styles';

function App() {
  return (
    <LayoutBase
      logoText="My App"
      navItems={[{ label: 'Home', href: '/' }]}
    >
      <h1>Content</h1>
    </LayoutBase>
  );
}
```

## File Naming Conventions

- **Components**: `kebab-case.tsx` (e.g., `layout-base.tsx`)
- **Styles**: `kebab-case.scss` (e.g., `layout-base.scss`)
- **Folders**: `kebab-case/` (e.g., `layout-base/`)
- **Types**: PascalCase interfaces (e.g., `LayoutBaseProps`)

## Best Practices

### ✅ DO

- Keep library code in `src/components/`
- Keep preview code in `src/preview/`
- Use design tokens for all styles
- Follow BEM naming for CSS classes
- Write mobile-first responsive styles
- Export TypeScript interfaces
- Document components in readme.md files

### ❌ DON'T

- Mix library and preview code
- Add preview-specific code to `src/components/`
- Hardcode values (use design tokens)
- Use global styles in library components
- Commit `dist/` or `dist-preview/` folders
- Use PascalCase for file names (use kebab-case)

## Development Tips

### Hot Module Replacement (HMR)

The preview application supports HMR:
- Changes to components auto-reload
- Changes to styles auto-reload
- State is preserved when possible

### Testing Components

Use the preview application to test:
1. Different prop combinations
2. Responsive behavior
3. Accessibility features
4. Interactive states

### Debugging

- Use browser DevTools
- Check console for errors
- Verify CSS variables in DevTools
- Test keyboard navigation
- Use screen reader testing tools

## Vite Configuration

The `vite.config.ts` file handles two build modes:

### Library Mode (`--mode lib`)
- Builds components as external library
- Externalizes React dependencies
- Outputs ES modules
- Generates type definitions

### Preview Mode (default)
- Builds full application
- Bundles all dependencies
- Outputs to `dist-preview/`
- Includes all assets

## Next Steps

1. Add more components to `src/components/`
2. Create preview pages for each component
3. Document components in readme.md files
4. Set up automated testing
5. Configure CI/CD for publishing
6. Create component documentation site

---

**Version**: 1.0.0
**Last Updated**: 2025-11-28
