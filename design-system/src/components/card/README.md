# Card Component

A flexible container component with consistent styling for grouping related content.

## Features

- ✅ Clean white background with subtle shadow
- ✅ Rounded corners using design tokens
- ✅ Default padding (responsive)
- ✅ Accepts any React children
- ✅ Hover effect with elevated shadow
- ✅ Responsive padding (increases on larger screens)
- ✅ Follows BEM methodology
- ✅ Uses design tokens exclusively
- ✅ WCAG 2.1 Level AA compliant

## Usage

### Basic Card

```tsx
import { Card } from 'design-system-library';

<Card>
  <h2>Card Title</h2>
  <p>Card content goes here</p>
</Card>
```

### Card with custom content

```tsx
<Card>
  <div className="custom-header">
    <h3>Custom Header</h3>
    <button>Action</button>
  </div>
  <div className="custom-body">
    <p>Custom body content</p>
  </div>
</Card>
```

### Card with custom class

```tsx
<Card className="my-custom-card">
  <p>Card with additional custom styling</p>
</Card>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `React.ReactNode` | Required | Content to render inside the card |
| `className` | `string` | `''` | Optional additional CSS classes |

## Design Tokens Used

```scss
// Spacing
--space-lg: 24px      // Default padding (mobile)
--space-xl: 32px      // Default padding (tablet+)

// Visual
--color-white: #ffffff
--radius-large: 12px
--shadow-small: 0 1px 2px 0 rgba(0, 0, 0, 0.05)
--shadow-medium: 0 4px 6px -1px rgba(0, 0, 0, 0.1)...

// Transitions
--duration-fast: 150ms
--easing-ease-in-out: cubic-bezier(0.4, 0, 0.2, 1)
```

## Accessibility

- Semantic HTML (`<div>` element)
- Can contain any accessible content
- Hover state provides visual feedback
- Works with keyboard navigation (when children are interactive)

## Responsive Behavior

- **Desktop (1024px+)**: `padding: 32px`
- **Tablet (768px - 1023px)**: `padding: 32px`
- **Mobile (< 768px)**: `padding: 24px`

## Examples in Templates

See [detail.tsx](../../templates/detail/detail.tsx) for real-world usage examples.

## Version

- **v1.0.0** - Initial release
  - Basic card with padding
  - Hover state
  - Responsive padding
  - Custom className support
