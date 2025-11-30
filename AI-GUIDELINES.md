# AI Agent Guidelines

**Version**: 2.0.0
**Last Updated**: 2025-11-28

This document provides essential guidelines for AI agents working on this project. Following these rules ensures consistency, quality, and maintainability across all contributions.

---

## 🎯 Golden Rule

**ALWAYS consult [design-system/AI-DESIGN-SYSTEM.md](design-system/AI-DESIGN-SYSTEM.md) before making any changes.**

This is the **single source of truth** for all design decisions, coding standards, and architectural guidelines. Every AI agent must read and follow this document.

---

## 📋 Core Principles

### 1. Design System is Law

- **Before ANY code changes**: Read [design-system/AI-DESIGN-SYSTEM.md](design-system/AI-DESIGN-SYSTEM.md)
- **All UI work MUST**: Follow the standards defined in the Design System
- **Never deviate**: From established patterns without explicit user approval
- **Always reference**: The Design System documentation when in doubt

### 2. Single Source of Truth

The Design System centralizes all critical information:

- ✅ **Design Tokens** (colors, spacing, typography, shadows, animations)
- ✅ **Coding Standards** (BEM, Atomic Design, mobile-first, accessibility)
- ✅ **Component Patterns** (how to structure and name components)
- ✅ **Best Practices** (CSS property order, JavaScript patterns, HTML semantics)
- ✅ **Workflows** (step-by-step processes for common tasks)

**Location**: [design-system/AI-DESIGN-SYSTEM.md](design-system/AI-DESIGN-SYSTEM.md)

### 3. No Hardcoded Values

**ALWAYS** use CSS custom properties (design tokens). **NEVER** hardcode values.

```css
/* ✅ CORRECT */
.component {
  color: var(--color-primary);
  padding: var(--space-md);
  border-radius: var(--radius-medium);
  font-size: var(--font-size-body);
  box-shadow: var(--shadow-small);
}

/* ❌ INCORRECT */
.component {
  color: #336699;
  padding: 16px;
  border-radius: 8px;
  font-size: 1rem;
  box-shadow: 0 1px 2px rgba(0,0,0,0.1);
}
```

### 4. BEM Methodology

Use BEM (Block Element Modifier) naming convention: `.block__element--modifier`

```css
/* ✅ CORRECT */
.card { }
.card__title { }
.card__title--large { }
.card--featured { }

/* ❌ INCORRECT */
.card .title { }
.cardTitle { }
.card-large-title { }
.featured-card { }
```

### 5. Mobile-First Approach

Always write mobile styles first, then enhance for larger screens using `min-width` media queries.

```css
/* ✅ CORRECT - Mobile first */
.component {
  width: 100%;
  padding: var(--space-sm);
}

@media (min-width: 768px) {
  .component {
    width: 50%;
    padding: var(--space-md);
  }
}

/* ❌ INCORRECT - Desktop first */
.component {
  width: 50%;
}

@media (max-width: 767px) {
  .component {
    width: 100%;
  }
}
```

### 6. Accessibility is Mandatory

All components MUST meet WCAG 2.1 Level AA standards:

- ✅ Keyboard navigable (Tab, Enter, Space, Arrow keys)
- ✅ Visible focus indicators (`outline`, `box-shadow`)
- ✅ 4.5:1 contrast ratio for normal text, 3:1 for large text
- ✅ Proper ARIA labels (`aria-label`, `aria-describedby`, `aria-expanded`)
- ✅ Minimum 44x44px touch targets
- ✅ Semantic HTML (`<header>`, `<nav>`, `<main>`, `<button>`)
- ✅ Screen reader compatible

```html
<!-- ✅ CORRECT -->
<button type="button" aria-label="Close dialog">
  ×
</button>

<label for="email">Email Address</label>
<input type="email" id="email" aria-describedby="email-help">
<span id="email-help">We'll never share your email</span>

<!-- ❌ INCORRECT -->
<div onclick="close()">×</div>
<input type="email" placeholder="Email">
```

### 7. Atomic Design Structure

Organize components by complexity level:

1. **Elements**: Basic building blocks (buttons, inputs, labels, icons)
2. **Components**: Simple groups of UI elements (layouts, cards, custom dropdowns, carousel)
3. **Pages**: Merge components with content

### 8. Language Standards

- **Code**: All code, variables, functions, classes, and comments MUST be in **English**
- **Documentation**: All documentation, READMEs, and inline comments MUST be in **English**
- **User Communication**: Can be in Portuguese if the user communicates in Portuguese
- **Consistency**: Never mix languages in the same file

```javascript
// ✅ CORRECT - English
const calculateTotal = (items) => {
  return items.reduce((total, item) => total + item.price, 0);
};

// ❌ INCORRECT - Portuguese
const calcularTotal = (itens) => {
  return itens.reduce((total, item) => total + item.preco, 0);
};
```

---

## 🔄 Standard Workflow

Follow this workflow for every task:

```
User Request
    ↓
Read AI-GUIDELINES.md (this file)
    ↓
Read design-system/AI-DESIGN-SYSTEM.md (MANDATORY)
    ↓
Check existing patterns in codebase
    ↓
Identify design tokens to use
    ↓
Follow BEM + Atomic Development + Mobile-First
    ↓
Implement with accessibility in mind
    ↓
Test and verify quality checklist
    ↓
Complete task
```

---

## ✅ Quality Checklist

Before completing any task, verify:

- [ ] Read and followed [design-system/AI-DESIGN-SYSTEM.md](design-system/AI-DESIGN-SYSTEM.md)
- [ ] Used CSS custom properties (no hardcoded values)
- [ ] Applied BEM naming convention correctly
- [ ] Implemented mobile-first responsive design
- [ ] Met WCAG 2.1 Level AA accessibility requirements
- [ ] Wrote all code and documentation in English
- [ ] Followed Atomic Design principles
- [ ] Tested keyboard navigation
- [ ] Ensured proper focus indicators
- [ ] Verified color contrast ratios
- [ ] Used semantic HTML elements
- [ ] Added proper ARIA labels where needed
- [ ] Ensured touch targets are minimum 44x44px
- [ ] Ordered CSS properties correctly
- [ ] No duplicate CSS or inline styles

---

## 📚 Documentation Reference

### Primary Documentation

| Document | Purpose | When to Read |
|----------|---------|--------------|
| **[AI-GUIDELINES.md](AI-GUIDELINES.md)** | AI agent rules and workflow | **Always read first** |
| **[design-system/AI-DESIGN-SYSTEM.md](design-system/AI-DESIGN-SYSTEM.md)** | Complete Design System guidelines | **Before any UI work (MANDATORY)** |

### How the Design System is Organized

The Design System document ([design-system/AI-DESIGN-SYSTEM.md](design-system/AI-DESIGN-SYSTEM.md)) contains:

1. **Overview** - Project objectives and key principles
2. **Design Tokens** - All CSS custom properties (colors, spacing, typography, etc.)
3. **Code Standards** - BEM, Atomic Design, mobile-first, accessibility rules
4. **Component Development** - How to create and structure components
5. **Workflows** - Step-by-step guides for common tasks
6. **Anti-Patterns** - What NOT to do
7. **File References** - Links to additional documentation

---

## 🚫 Common Mistakes to Avoid

### ❌ DON'T

1. **Skip reading the Design System** - It's mandatory, not optional
2. **Hardcode values** - Always use design tokens
3. **Use non-BEM class names** - `.my-component` ❌, use `.my-component__element` ✅
4. **Create desktop-first styles** - Mobile-first only
5. **Ignore accessibility** - Every component must be accessible
6. **Mix languages** - Code must be in English
7. **Use `!important`** - Indicates poor architecture
8. **Create deep CSS nesting** - `.parent .child .grandchild .item` ❌
9. **Use non-semantic class names** - `.red-text`, `.mt-20` ❌
10. **Skip the quality checklist** - Always verify before completing

### ✅ DO

1. **Read the Design System** - Every single time
2. **Use design tokens** - `var(--color-primary)` ✅
3. **Follow BEM strictly** - `.component__element--modifier` ✅
4. **Mobile-first approach** - Start with mobile, enhance for desktop
5. **Ensure accessibility** - Keyboard navigation, ARIA, focus states
6. **Write in English** - All code and documentation
7. **Semantic naming** - `.alert--error` ✅, not `.red-box` ❌
8. **Flat CSS structure** - Avoid deep nesting
9. **Test thoroughly** - Keyboard, screen readers, multiple browsers
10. **Document components** - Add examples and usage instructions

---

## 🎓 Quick Start for New AI Agents

If you're a new AI agent working on this project for the first time:

### Step 1: Read This File
You're here! ✅ Now understand the core principles and workflow.

### Step 2: Read the Design System
**[design-system/AI-DESIGN-SYSTEM.md](design-system/AI-DESIGN-SYSTEM.md)** - This is **MANDATORY**. Read it thoroughly.

### Step 3: Understand the Structure
The Design System explains:
- What design tokens are available
- How to name CSS classes (BEM)
- How to organize components (Atomic Design)
- How to write accessible code
- How to handle responsive design

### Step 4: Follow the Workflow
For every task, follow the [Standard Workflow](#-standard-workflow) above.

### Step 5: Check Quality
Before marking any task complete, go through the [Quality Checklist](#-quality-checklist).

---

## 💡 Examples

### Creating a New Component

**Task**: Create a new alert component.

**Workflow**:

1. ✅ Read [design-system/AI-DESIGN-SYSTEM.md](design-system/AI-DESIGN-SYSTEM.md)
2. ✅ Identify atomic level: **Molecule** (combines text + icon + button)
3. ✅ Choose BEM naming: `.alert`, `.alert__icon`, `.alert__message`, `.alert--error`
4. ✅ Use design tokens:
   - Colors: `var(--color-error)`, `var(--color-white)`
   - Spacing: `var(--space-md)`, `var(--space-sm)`
   - Border radius: `var(--radius-medium)`
5. ✅ Write mobile-first CSS
6. ✅ Add ARIA labels: `role="alert"`, `aria-live="polite"`
7. ✅ Test keyboard navigation
8. ✅ Verify quality checklist

### Modifying Existing Styles

**Task**: Change button padding.

**Workflow**:

1. ✅ Read [design-system/AI-DESIGN-SYSTEM.md](design-system/AI-DESIGN-SYSTEM.md)
2. ✅ Identify design token: `var(--space-md)`
3. ✅ Update the value in the design token if needed
4. ✅ Apply mobile-first approach
5. ✅ Verify accessibility (touch target size)
6. ✅ Test across breakpoints

---

## ⚠️ Critical Reminders

1. **Design System is MANDATORY** - [design-system/AI-DESIGN-SYSTEM.md](design-system/AI-DESIGN-SYSTEM.md) must be read before every task
2. **No hardcoded values** - Use design tokens exclusively
3. **BEM is strict** - Follow `.block__element--modifier` pattern
4. **Mobile-first only** - Desktop-first is not allowed
5. **Accessibility is not optional** - WCAG 2.1 Level AA compliance required
6. **English only** - All code and documentation must be in English
7. **Quality checklist** - Always verify before completing tasks

---

## 🆘 When in Doubt

1. **Check** [design-system/AI-DESIGN-SYSTEM.md](design-system/AI-DESIGN-SYSTEM.md) first
2. **Look** at existing patterns in the codebase
3. **Ask** the user for clarification if still unclear
4. **Never** assume or guess - always verify

---

## 📞 Support

For questions or issues:

1. Consult [design-system/AI-DESIGN-SYSTEM.md](design-system/AI-DESIGN-SYSTEM.md)
2. Review existing code patterns
3. Ask the user for guidance

---

**Remember**: These guidelines exist to ensure consistency, quality, and maintainability. Following them makes the codebase better for everyone.

**The Design System ([design-system/AI-DESIGN-SYSTEM.md](design-system/AI-DESIGN-SYSTEM.md)) is your best friend. Read it. Follow it. Trust it.**
