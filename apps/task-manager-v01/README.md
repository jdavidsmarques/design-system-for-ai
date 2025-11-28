# Task Manager v01

A comprehensive task management application built using the Design System. This application demonstrates proper implementation of design tokens, BEM methodology, Atomic Design principles, and accessibility standards.

## Features

### Core Functionality

- **Create Tasks**: Add new tasks with title, description, due date, and status
- **Update Tasks**: Edit task details at any time
- **Delete Tasks**: Remove tasks with confirmation
- **Task Status Management**: Track tasks through three states:
  - **New**: Newly created tasks
  - **Active**: Tasks currently in progress
  - **Done**: Completed tasks
- **Filter Tasks**: View tasks by status (All, New, Active, Done)
- **Add Comments**: Leave comments on tasks for collaboration and notes
- **Persistent Storage**: Tasks are saved to browser localStorage

### Technical Features

- **Design System Compliant**: Built following all Design System guidelines
- **BEM Methodology**: Clean, maintainable CSS class naming
- **Atomic Design**: Component-based architecture
- **Mobile-First**: Responsive design optimized for all screen sizes
- **WCAG 2.1 AA**: Full accessibility compliance
- **Keyboard Navigation**: Complete keyboard support
- **ES6+ JavaScript**: Modern, clean JavaScript code
- **No Dependencies**: Pure HTML, CSS, and JavaScript

## Project Structure

```
task-manager-v01/
├── index.html        # Application structure
├── styles.css        # Component styles (BEM + Design Tokens)
├── script.js         # Application logic (ES6+)
└── README.md         # This file
```

## Design System Compliance

### CSS Architecture

This application strictly follows the Design System guidelines:

#### Design Tokens Used

```css
/* Colors */
--color-primary: #ed002f
--color-success: #29823b
--color-warning: #e9a100
--color-error: #dc2020
--color-info: #017aad

/* Spacing */
--space-xs through --space-3xl (4px to 64px)

/* Typography */
--font-primary, --font-size-*, --font-weight-*, --line-height-*

/* Borders & Shadows */
--radius-*, --shadow-*

/* Animation */
--duration-*, --easing-*
```

#### BEM Components

All CSS follows BEM naming convention:

- **Blocks**: `.task-card`, `.task-form`, `.modal`, `.btn`
- **Elements**: `.task-card__title`, `.task-card__status`, `.modal__header`
- **Modifiers**: `.btn--primary`, `.task-card__status--done`

### HTML Structure

- **Semantic HTML5**: Proper use of `<header>`, `<main>`, `<section>`, `<article>`, `<footer>`
- **Accessibility**: ARIA labels, roles, keyboard navigation
- **Form Labels**: All inputs properly labeled with `for` attribute
- **Skip Links**: For screen reader users

### JavaScript Standards

- **ES6+ Syntax**: Arrow functions, const/let, template literals, destructuring
- **Pure Functions**: No side effects in utility functions
- **Event Delegation**: Efficient event handling
- **State Management**: Centralized state object
- **Error Handling**: Try-catch blocks and validation
- **XSS Prevention**: HTML escaping for user input

## Usage

### Opening the Application

1. Navigate to the `apps/task-manager-v01/` directory
2. Open `index.html` in a web browser
3. Or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000

   # Using Node.js
   npx http-server
   ```

### Creating a Task

1. Fill in the "Create New Task" form
2. Required fields:
   - Task Title (max 100 characters)
   - Due Date (must be today or future)
   - Status (New/Active/Done)
3. Optional fields:
   - Description (max 500 characters)
4. Click "Create Task" button

### Editing a Task

1. Click the "Edit" button on any task card
2. Modal opens with task details
3. Update any fields
4. Click "Update Task" button

### Adding Comments

1. Click "Edit" on a task to open the modal
2. Scroll to the "Comments" section
3. Enter your comment (max 300 characters)
4. Click "Add Comment"

### Filtering Tasks

- Click filter buttons above the task list
- Options: All Tasks, New, Active, Done
- Active filter is highlighted

### Deleting a Task

1. Click "Delete" button on task card
2. Confirm deletion in dialog
3. Task is permanently removed

## Keyboard Navigation

The application is fully keyboard accessible:

- **Tab**: Navigate between interactive elements
- **Enter/Space**: Activate buttons and links
- **Escape**: Close modal dialog
- **All form inputs**: Accessible via keyboard

## Accessibility Features

### WCAG 2.1 Level AA Compliance

- ✅ Minimum 4.5:1 color contrast ratio
- ✅ 44x44px minimum touch targets
- ✅ Visible focus indicators
- ✅ Screen reader support with ARIA labels
- ✅ Semantic HTML structure
- ✅ Keyboard navigation
- ✅ Form validation with clear error messages
- ✅ Skip to main content link

### Assistive Technology Support

- **Screen Readers**: Tested with VoiceOver, NVDA
- **Keyboard Only**: Full functionality without mouse
- **High Contrast**: Works with high contrast modes
- **Zoom**: Responsive up to 200% zoom

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Data Storage

Tasks are stored in browser localStorage:

- **Key**: `taskManagerTasks`
- **Format**: JSON array
- **Persistence**: Data survives page refreshes
- **Privacy**: Data stays in browser (not sent to server)

## Component Breakdown

### Atoms (Basic Elements)

- Buttons (`.btn`, `.btn--primary`, `.btn--secondary`)
- Form inputs (`.form-group__input`)
- Labels (`.form-group__label`)
- Status badges (`.task-card__status`)

### Molecules (Simple Groups)

- Form groups (`.form-group`)
- Task card header (`.task-card__header`)
- Filter buttons (`.task-filters__container`)
- Comment items (`.task-comments__item`)

### Organisms (Complex Components)

- Task card (`.task-card`)
- Task form (`.task-form`)
- Modal dialog (`.modal`)
- Comments section (`.task-comments`)

### Templates (Page Layouts)

- Application header (`.app-header`)
- Main content area (`.app-main`)
- Application footer (`.app-footer`)

## Responsive Breakpoints

Following mobile-first approach:

- **Mobile**: Default (< 768px)
- **Tablet**: 768px - 1023px (2-column task grid)
- **Desktop**: 1024px - 1439px (3-column task grid)
- **Large Desktop**: 1440px+ (wider container)

## Code Quality

### CSS Property Order

1. Positioning
2. Display & Box Model
3. Typography
4. Visual
5. Other (transitions, animations)

### JavaScript Best Practices

- Const by default, let when needed
- Arrow functions for callbacks
- Descriptive variable names
- Small, focused functions
- Event delegation
- No global pollution

## Future Enhancements

Potential features for future versions:

- Task priority levels
- Task categories/tags
- Due date reminders
- Search functionality
- Sort options
- Export tasks (JSON, CSV)
- Dark mode toggle
- Multiple users
- Task attachments

## Testing Checklist

Before deployment, verify:

- [x] All CRUD operations work
- [x] Filtering functions correctly
- [x] Comments can be added
- [x] Data persists on refresh
- [x] Responsive on all screen sizes
- [x] Keyboard navigation works
- [x] Form validation works
- [x] Modal opens/closes correctly
- [x] No console errors
- [x] Accessible to screen readers

## Credits

Built with the Design System following:

- BEM Methodology
- Atomic Design principles
- WCAG 2.1 guidelines
- ES6+ JavaScript standards
- Mobile-first responsive design

## License

This application is part of the Design System project.

---

**Version**: 1.0.0
**Last Updated**: 2025
**Author**: Design System Team
