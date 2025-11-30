# Button Classes Documentation

This document describes the button utility classes available in the Design System Library.

## Overview

The Design System provides a complete set of button classes that follow BEM methodology and use design tokens exclusively. All buttons are fully accessible (WCAG 2.1 Level AA) with keyboard navigation and proper focus states.

## Base Button Class

### `.btn`

The base button class with default primary styling.

```html
<button type="button" class="btn">Click me</button>
<a href="#" class="btn">Link Button</a>
```

**Features:**
- ✅ Minimum touch target: 44x44px (accessible)
- ✅ Keyboard navigation with visible focus states
- ✅ Smooth transitions and hover effects
- ✅ Disabled state support
- ✅ Works on `<button>`, `<a>`, and `<input>` elements

**Default Styling:**
- Background: `var(--color-primary)` (#336699)
- Color: `var(--color-white)`
- Padding: `var(--space-sm) var(--space-lg)` (12px 24px)
- Border radius: `var(--radius-medium)` (8px)
- Font weight: `var(--font-weight-medium)` (500)
- Shadow: `var(--shadow-small)`

## Button Variants

### `.btn-primary`

Primary action button (blue).

```html
<button type="button" class="btn btn-primary">Primary Action</button>
```

**Use cases:**
- Main call-to-action
- Submit forms
- Confirm actions
- Primary navigation

**Colors:**
- Background: `var(--color-primary)` (#336699)
- Hover: `var(--color-primary-dark)` (#264d73)
- Text: `var(--color-white)`

---

### `.btn-success`

Success/confirmation button (green).

```html
<button type="button" class="btn btn-success">Save Changes</button>
<button type="submit" class="btn btn-success">Submit Form</button>
```

**Use cases:**
- Save/submit actions
- Confirm positive actions
- Success indicators
- Create/add new items

**Colors:**
- Background: `var(--color-success)` (#28a745)
- Hover: `var(--color-success-dark)` (#1e7e34)
- Text: `var(--color-white)`

---

### `.btn-danger`

Destructive/warning button (red).

```html
<button type="button" class="btn btn-danger">Delete Account</button>
<button type="button" class="btn btn-danger">Remove Item</button>
```

**Use cases:**
- Delete actions
- Cancel/remove operations
- Destructive actions
- Error confirmations

**Colors:**
- Background: `var(--color-error)` (#dc3545)
- Hover: `var(--color-error-dark)` (#bd2130)
- Text: `var(--color-white)`

---

### `.btn-ghost`

Transparent button with border (ghost/outline style).

```html
<button type="button" class="btn btn-ghost">Cancel</button>
<button type="button" class="btn btn-ghost">Learn More</button>
```

**Use cases:**
- Secondary actions
- Cancel buttons
- Less prominent options
- Tertiary navigation

**Colors:**
- Background: `transparent`
- Border: `var(--color-gray-300)` (2px solid)
- Text: `var(--color-text)`
- Hover background: `var(--color-gray-50)`
- Hover border: `var(--color-gray-400)`

---

## Usage Examples

### Basic Usage

```html
<!-- Primary button (default) -->
<button type="button" class="btn">
  Default Button
</button>

<!-- Explicit primary -->
<button type="button" class="btn btn-primary">
  Primary Action
</button>

<!-- Success button -->
<button type="submit" class="btn btn-success">
  Save Changes
</button>

<!-- Danger button -->
<button type="button" class="btn btn-danger">
  Delete Item
</button>

<!-- Ghost button -->
<button type="button" class="btn btn-ghost">
  Cancel
</button>
```

### With Links

```html
<a href="/login" class="btn btn-primary">
  Sign In
</a>

<a href="/docs" class="btn btn-ghost">
  Read Documentation
</a>
```

### Disabled State

```html
<!-- Disabled buttons -->
<button type="button" class="btn btn-primary" disabled>
  Disabled Primary
</button>

<button type="button" class="btn btn-success" disabled>
  Disabled Success
</button>

<button type="button" class="btn btn-danger" disabled>
  Disabled Danger
</button>

<button type="button" class="btn btn-ghost" disabled>
  Disabled Ghost
</button>
```

### Button Groups

```html
<!-- Action buttons group -->
<div class="button-group">
  <button type="submit" class="btn btn-success">
    Save
  </button>
  <button type="button" class="btn btn-ghost">
    Cancel
  </button>
</div>

<!-- Destructive action with confirmation -->
<div class="button-group">
  <button type="button" class="btn btn-danger">
    Delete Account
  </button>
  <button type="button" class="btn btn-ghost">
    Keep Account
  </button>
</div>
```

## Accessibility Features

### Keyboard Navigation

All buttons support keyboard navigation:

- **Tab**: Navigate to button
- **Enter/Space**: Activate button
- **Shift+Tab**: Navigate backwards

### Focus States

```scss
.btn:focus {
  outline: var(--focus-width) solid var(--focus-color); // 2px solid #0066cc
  outline-offset: var(--focus-offset); // 2px
}

// Remove outline for mouse users only
.btn:focus:not(:focus-visible) {
  outline: none;
}
```

### Touch Targets

All buttons meet minimum touch target requirements:

```scss
.btn {
  min-width: var(--touch-target-min);  // 44px
  min-height: var(--touch-target-min); // 44px
}
```

### Disabled State

Disabled buttons are clearly indicated:

```scss
.btn:disabled {
  background-color: var(--color-gray-400);
  color: var(--color-white);
  cursor: not-allowed;
  opacity: 0.6;
  // Prevents hover effects
}
```

## Interactive States

### Hover

```scss
.btn:hover {
  transform: translateY(-1px);    // Subtle lift effect
  box-shadow: var(--shadow-medium); // Enhanced shadow
}
```

### Active (Click)

```scss
.btn:active {
  transform: translateY(0);       // Return to normal position
  box-shadow: var(--shadow-small); // Reduced shadow
}
```

## Design Tokens Used

All button styles use design tokens exclusively:

```scss
// Colors
--color-primary: #336699
--color-primary-dark: #264d73
--color-success: #28a745
--color-success-dark: #1e7e34
--color-error: #dc3545
--color-error-dark: #bd2130
--color-white: #ffffff
--color-text: #212529
--color-gray-300: #dee2e6
--color-gray-400: #ced4da
--color-gray-50: #f8f9fa
--color-gray-100: #f1f3f5

// Spacing
--space-sm: 0.75rem   // 12px
--space-lg: 1.5rem    // 24px

// Typography
--font-family-base: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto...
--font-size-body: 1rem          // 16px
--font-weight-medium: 500
--line-height-normal: 1.5

// Visual
--radius-medium: 0.5rem         // 8px
--shadow-small: 0 1px 2px 0 rgba(0, 0, 0, 0.05)
--shadow-medium: 0 4px 6px -1px rgba(0, 0, 0, 0.1)...

// Transitions
--duration-fast: 150ms
--easing-ease-in-out: cubic-bezier(0.4, 0, 0.2, 1)

// Accessibility
--focus-width: 2px
--focus-color: #0066cc
--focus-offset: 2px
--touch-target-min: 44px
```

## Best Practices

### Do's ✅

```html
<!-- Use semantic button types -->
<button type="button" class="btn btn-primary">Click me</button>
<button type="submit" class="btn btn-success">Submit</button>

<!-- Combine with base .btn class -->
<button class="btn btn-danger">Delete</button>

<!-- Use appropriate variants for context -->
<button class="btn btn-success">Save</button>
<button class="btn btn-ghost">Cancel</button>

<!-- Provide clear, actionable text -->
<button class="btn btn-primary">Sign Up Now</button>
```

### Don'ts ❌

```html
<!-- Don't use variant without base .btn -->
<button class="btn-primary">Wrong</button>

<!-- Don't mix multiple variants -->
<button class="btn btn-primary btn-danger">Confusing</button>

<!-- Don't use vague text -->
<button class="btn btn-primary">Click Here</button>

<!-- Don't use divs as buttons -->
<div class="btn btn-primary" onclick="...">Wrong Element</div>
```

## CSS Property Order

All button styles follow the Design System CSS property order:

1. **Positioning** (not used in buttons)
2. **Display & Box Model**
3. **Typography**
4. **Visual**
5. **Other**

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Related Documentation

- [AI-DESIGN-SYSTEM.md](../AI-DESIGN-SYSTEM.md) - Complete design system
- [LIBRARY-EXPORTS.md](LIBRARY-EXPORTS.md) - What the library exports
- [base.scss](src/styles/base.scss) - Design tokens reference
- [native-elements.scss](src/styles/native-elements.scss) - Button implementation

## Version History

- **v1.0.0** - Initial button classes
  - `.btn` - Base button class
  - `.btn-primary` - Primary variant
  - `.btn-success` - Success variant
  - `.btn-danger` - Danger variant
  - `.btn-ghost` - Ghost variant
  - Full accessibility support
  - All design tokens integrated

---

**Remember**: Always use design tokens, never hardcode values. Follow BEM methodology and ensure WCAG 2.1 Level AA compliance.
