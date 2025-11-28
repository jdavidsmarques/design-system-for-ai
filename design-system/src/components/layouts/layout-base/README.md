# LayoutBase Component

A responsive layout component that provides a consistent structure for applications with header, navigation, content area, and footer.

## Features

- ✅ **Sticky Header** - Header stays visible while scrolling
- ✅ **Responsive Design** - Mobile-first approach with tablet and desktop breakpoints
- ✅ **Mobile Navigation** - Hamburger menu toggle for small screens
- ✅ **User Menu** - Optional user area with avatar and name
- ✅ **Flexible Content** - Supports page titles and action buttons
- ✅ **Accessible** - WCAG 2.1 Level AA compliant with keyboard navigation
- ✅ **BEM Naming** - Follows Block Element Modifier methodology
- ✅ **Design Tokens** - Uses CSS custom properties for consistent styling

## Installation

```bash
npm install @your-org/design-system
```

## Basic Usage

```tsx
import { LayoutBase } from '@your-org/design-system';

function App() {
  return (
    <LayoutBase
      logoSrc="/logo.png"
      logoAlt="Company Logo"
      logoText="My App"
      footerText="© 2025 My Company"
    >
      <p>Your main content goes here</p>
    </LayoutBase>
  );
}
```

## With Navigation

```tsx
import { LayoutBase } from '@your-org/design-system';

const navItems = [
  { label: 'Home', href: '/', active: true },
  { label: 'Products', href: '/products' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

function App() {
  return (
    <LayoutBase
      logoSrc="/logo.png"
      logoAlt="Company Logo"
      logoText="My App"
      navItems={navItems}
      onNavClick={(href) => {
        console.log('Navigate to:', href);
        // Handle navigation with your router
      }}
    >
      <p>Your main content goes here</p>
    </LayoutBase>
  );
}
```

## With User Menu

```tsx
import { LayoutBase } from '@your-org/design-system';

const user = {
  name: 'John Doe',
  initials: 'JD',
  avatar: '/avatars/john-doe.jpg',
};

function App() {
  return (
    <LayoutBase
      logoSrc="/logo.png"
      logoText="My App"
      user={user}
      onUserClick={() => {
        console.log('User menu clicked');
        // Show user dropdown menu
      }}
    >
      <p>Your main content goes here</p>
    </LayoutBase>
  );
}
```

## With Page Title and Actions

```tsx
import { LayoutBase } from '@your-org/design-system';

function DashboardPage() {
  return (
    <LayoutBase
      logoSrc="/logo.png"
      logoText="My App"
      pageTitle="Dashboard"
      actions={
        <>
          <button>Export</button>
          <button>Settings</button>
        </>
      }
    >
      <div className="dashboard-content">
        <h2>Welcome to your dashboard</h2>
        <p>Here's your content...</p>
      </div>
    </LayoutBase>
  );
}
```

## Full Example

```tsx
import { LayoutBase } from '@your-org/design-system';

const navItems = [
  { label: 'Dashboard', href: '/dashboard', active: true },
  { label: 'Projects', href: '/projects' },
  { label: 'Team', href: '/team' },
  { label: 'Settings', href: '/settings' },
];

const user = {
  name: 'Jane Smith',
  initials: 'JS',
  avatar: '/avatars/jane-smith.jpg',
};

function App() {
  const handleNavClick = (href: string) => {
    // Use your router's navigation method
    console.log('Navigate to:', href);
  };

  const handleUserClick = () => {
    // Show user menu dropdown
    console.log('Show user menu');
  };

  return (
    <LayoutBase
      logoSrc="/logo.png"
      logoAlt="My Company"
      logoText="My App"
      logoHref="/"
      navItems={navItems}
      user={user}
      pageTitle="Dashboard"
      actions={
        <>
          <button className="btn btn--secondary">Export Data</button>
          <button className="btn btn--primary">Create Project</button>
        </>
      }
      footerText="© 2025 My Company. All rights reserved."
      onNavClick={handleNavClick}
      onLogoClick={(e) => {
        e.preventDefault();
        console.log('Logo clicked');
      }}
      onUserClick={handleUserClick}
    >
      <div className="dashboard">
        <h2>Welcome back, {user.name}!</h2>
        <p>Here's what's happening with your projects today.</p>
      </div>
    </LayoutBase>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `logoSrc` | `string` | - | Logo image source URL |
| `logoAlt` | `string` | `'Logo'` | Logo alt text for accessibility |
| `logoText` | `string` | - | Logo text to display next to the logo image |
| `logoHref` | `string` | `'/'` | Logo link URL |
| `navItems` | `Array<NavItem>` | `[]` | Navigation items to display in the header |
| `user` | `UserInfo` | - | User information for the user menu |
| `children` | `ReactNode` | **required** | Main content to render inside the layout |
| `pageTitle` | `string` | - | Optional page title to display in the content header |
| `actions` | `ReactNode` | - | Optional action buttons to display in the content header |
| `footerText` | `string` | `'© 2025 All rights reserved'` | Footer signature text |
| `onNavClick` | `(href: string) => void` | - | Callback when navigation link is clicked |
| `onLogoClick` | `(event: MouseEvent) => void` | - | Callback when logo is clicked |
| `onUserClick` | `() => void` | - | Callback when user button is clicked |

### NavItem Type

```typescript
interface NavItem {
  label: string;
  href: string;
  active?: boolean;
}
```

### UserInfo Type

```typescript
interface UserInfo {
  name: string;
  avatar?: string;
  initials?: string;
}
```

## Accessibility

The LayoutBase component follows WCAG 2.1 Level AA standards:

- ✅ **Keyboard Navigation**: All interactive elements are keyboard accessible (Tab, Enter, Space)
- ✅ **Focus Indicators**: Visible focus states on all interactive elements
- ✅ **ARIA Labels**: Proper ARIA labels and roles for screen readers
- ✅ **Semantic HTML**: Uses semantic elements (`<header>`, `<nav>`, `<main>`, `<footer>`)
- ✅ **Touch Targets**: Minimum 44x44px touch targets for mobile
- ✅ **Screen Readers**: Compatible with screen reader technology

### Keyboard Shortcuts

- **Tab**: Navigate between interactive elements
- **Enter** or **Space**: Activate buttons and links
- **Shift + Tab**: Navigate backwards

## Responsive Behavior

The component adapts to different screen sizes:

### Mobile (< 768px)
- Hamburger menu toggle visible
- Logo text hidden
- Navigation hidden (can be toggled)
- User name hidden (avatar only)

### Tablet (768px+)
- Logo text visible
- Navigation visible
- User name visible
- Mobile toggle hidden

### Desktop (1024px+)
- Increased spacing
- Optimized layout for larger screens

## Customization

### Using Design Tokens

The component uses CSS custom properties (design tokens) for styling. You can customize the appearance by overriding these tokens:

```css
:root {
  --color-primary: #336699;
  --color-background: #f8f9fa;
  --color-white: #ffffff;
  --space-md: 1rem;
  --radius-medium: 0.5rem;
  --shadow-small: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}
```

### Custom Styling

You can apply custom styles by targeting BEM class names:

```css
.layout-base__header {
  /* Custom header styles */
}

.layout-base__nav-link {
  /* Custom navigation link styles */
}

.layout-base__main {
  /* Custom main content styles */
}
```

## Best Practices

1. **Always provide `logoAlt`** for accessibility
2. **Use `onNavClick` with your router** for SPA navigation
3. **Provide user `initials`** as fallback when no avatar is available
4. **Keep navigation items concise** (4-6 items recommended)
5. **Use semantic action buttons** in the `actions` prop
6. **Avoid deep nesting** inside the main content area

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Related Components

- **Button** - For action buttons in the header
- **Avatar** - For user profile images
- **Icon** - For navigation icons

## License

MIT
