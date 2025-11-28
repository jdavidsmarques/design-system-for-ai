# Live Style Guide Preview

This is an interactive live documentation of the **UI Library** ([design-system/ui-library](../ui-library/)). It demonstrates all design tokens, base HTML elements, styles available in the UI Library, and multiple examples of usage.

## Purpose

The preview folder serves as the **living documentation** for the Design System's UI Library. It showcases everything available in [ui-library](../ui-library/):

- All CSS custom properties (design tokens)
- Base HTML element styles
- Typography system
- Color palette
- Spacing scale
- Border radius and shadows
- Form elements with accessibility

## Key Principle

**The preview uses the UI Library CSS as its foundation.**

```html
<!-- UI Library Base Styles (source of truth) -->
<link rel="stylesheet" href="../ui-library/styles.css">

<!-- Preview Layout Styles (minimal, layout only) -->
<link rel="stylesheet" href="styles.css">
```

This ensures:
- **Single Source of Truth**: [ui-library/styles.css](../ui-library/styles.css) is authoritative
- **Consistency**: What you see here is exactly what applications get
- **Live Updates**: Changes to UI Library immediately reflect in preview

## How to Use

1. Open [index.html](index.html) in your browser
2. Navigate through sections using the menu
3. Click any color card or code block to copy to clipboard
4. Use keyboard navigation (Tab, Enter, Space)
5. Test responsive behavior by resizing browser

## What's Documented

### Design Tokens

All CSS custom properties:

- **Colors**: Primary, semantic, and neutral colors with hex codes
- **Typography**: Font families, sizes, weights, line heights
- **Spacing**: 8px-based scale (xs to 3xl)
- **Border Radius**: None, small, medium, large, full
- **Shadows**: Small, medium, large, xlarge
- **Animation**: Durations and easing functions

### Base HTML Elements

All styled elements from [ui-library/styles.css](../ui-library/styles.css):

- **Typography**: Headings, paragraphs, links, code, blockquotes
- **Lists**: Unordered, ordered, definition lists
- **Tables**: Headers, rows, borders
- **Forms**: All input types, textarea, select, checkboxes, radio buttons
- **Interactive**: Details/summary, buttons, fieldsets
- **Layout**: Horizontal rules

## Interactive Features

- **Copy to Clipboard**: Click any color or code to copy
- **Smooth Scrolling**: Animated navigation between sections
- **Active Navigation**: Highlights current section automatically
- **Keyboard Navigation**: Full accessibility support
- **Responsive**: Mobile, tablet, desktop layouts

## Responsive Breakpoints

Mobile-first approach:

- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px - 1439px
- **Large Desktop**: 1440px+

## Accessibility

WCAG 2.1 Level AA compliant:

- Semantic HTML5 structure
- Proper heading hierarchy
- ARIA labels where needed
- Keyboard navigation
- Visible focus indicators
- Skip link for screen readers
- Sufficient color contrast (4.5:1 minimum)

## Technologies

- Semantic HTML5
- CSS3 with custom properties
- Vanilla JavaScript (no dependencies)
- Google Fonts (Inter and Fira Code)

## File Structure

```
├── index.html          # Index of documentation
├── styles.css          # css specific for documentation
├── script.js           # Logic spefici for documentation
├── README.md           # This file
├── pages/
    ├── components.html 
    ├── get-started.html
    ├── resources.html
    ├── styles.html
    └── templates.html
└── templates/
```

## Development

### Adding Documentation

When adding to the UI Library:

1. Update [ui-library/styles.css](../ui-library/styles.css)
2. Add examples to [preview/index.html](index.html)
3. Use only CSS variables (no hardcoded values)
4. Keep [preview/styles.css](styles.css) minimal

### Style Organization

**UI Library** ([ui-library/styles.css](../ui-library/styles.css)):
- CSS custom properties (tokens)
- CSS reset & normalize
- Base HTML element styles
- Utility classes

**Preview** ([preview/styles.css](styles.css)):
- Layout containers
- Documentation sections
- Demo blocks
- Grid layouts

## Related Documentation

- **[UI Library README](../ui-library/README.md)** - How to use in applications
- **[Base Styles Guide](../ui-library/BASE-STYLES.md)** - Detailed documentation
- **[Style Guide](../style-guide.md)** - Design specifications
- **[Code Rules](../../code-rules.md)** - Coding standards

## Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- iOS Safari (latest 2 versions)
- Chrome Android (latest 2 versions)

## Version

Current Version: 1.0.0

---

**Important**: This preview is the living documentation of the UI Library. Make style changes in [ui-library/styles.css](../ui-library/styles.css), not here.
