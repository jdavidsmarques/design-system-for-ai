import React, { useState } from 'react';
import './layout-base.scss';

/**
 * LayoutBase Props Interface
 */
export interface LayoutBaseProps {
  /** Logo image source URL */
  logoSrc?: string;
  /** Logo alt text for accessibility */
  logoAlt?: string;
  /** Logo text to display next to the logo image */
  logoText?: string;
  /** Logo link URL (defaults to '/') */
  logoHref?: string;
  /** Navigation items to display in the header */
  navItems?: Array<{
    label: string;
    href: string;
    active?: boolean;
  }>;
  /** User information for the user menu */
  user?: {
    name: string;
    avatar?: string;
    initials?: string;
  };
  /** Main content to render inside the layout */
  children: React.ReactNode;
  /** Optional page title to display in the content header */
  pageTitle?: string;
  /** Optional breadcrumb items to display navigation path */
  breadcrumbs?: Array<{
    label: string;
    href?: string;
  }>;
  /** Optional action buttons to display in the content header */
  actions?: React.ReactNode;
  /** Footer signature text */
  footerText?: string;
  /** Callback when navigation link is clicked */
  onNavClick?: (href: string) => void;
  /** Callback when logo is clicked */
  onLogoClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  /** Callback when user button is clicked */
  onUserClick?: () => void;
  /** Callback when breadcrumb is clicked */
  onBreadcrumbClick?: (href: string) => void;
}

/**
 * LayoutBase Component
 *
 * A responsive layout component that provides a consistent structure for applications.
 * Features:
 * - Sticky header with logo, navigation, and user menu
 * - Mobile-responsive with hamburger menu toggle
 * - Accessible keyboard navigation
 * - Follows BEM methodology and mobile-first approach
 * - Uses design tokens for consistent styling
 *
 * @example
 * ```tsx
 * <LayoutBase
 *   logoSrc="/logo.png"
 *   logoAlt="Company Logo"
 *   logoText="My App"
 *   navItems={[
 *     { label: 'Home', href: '/', active: true },
 *     { label: 'About', href: '/about' }
 *   ]}
 *   user={{ name: 'John Doe', initials: 'JD' }}
 *   pageTitle="Dashboard"
 * >
 *   <p>Main content goes here</p>
 * </LayoutBase>
 * ```
 */
export const LayoutBase: React.FC<LayoutBaseProps> = ({
  logoSrc,
  logoAlt = 'Logo',
  logoText,
  logoHref = '/',
  navItems = [],
  user,
  children,
  pageTitle,
  breadcrumbs,
  actions,
  footerText = '© 2025 All rights reserved',
  onNavClick,
  onLogoClick,
  onUserClick,
  onBreadcrumbClick,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogoClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (onLogoClick) {
      onLogoClick(event);
    }
  };

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (onNavClick) {
      event.preventDefault();
      onNavClick(href);
    }
  };

  const handleMobileToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleUserClick = () => {
    if (onUserClick) {
      onUserClick();
    }
  };

  const handleBreadcrumbClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (onBreadcrumbClick) {
      event.preventDefault();
      onBreadcrumbClick(href);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent, callback: () => void) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      callback();
    }
  };

  return (
    <div className="layout-base">
      {/* Header */}
      <header className="layout-base__header">
        <div className="layout-base__header-container">
          {/* Logo */}
          <div className="layout-base__logo">
            <a
              href={logoHref}
              className="layout-base__logo-link"
              onClick={handleLogoClick}
              aria-label={`${logoText || logoAlt} - Go to home page`}
            >
              {logoSrc && (
                <img
                  src={logoSrc}
                  alt={logoAlt}
                  className="layout-base__logo-image"
                />
              )}
              {logoText && (
                <span className="layout-base__logo-text">{logoText}</span>
              )}
            </a>
          </div>

          {/* Navigation */}
          {navItems.length > 0 && (
            <nav className="layout-base__nav" aria-label="Main navigation">
              <ul className="layout-base__nav-list">
                {navItems.map((item, index) => (
                  <li key={index} className="layout-base__nav-item">
                    <a
                      href={item.href}
                      className={`layout-base__nav-link ${
                        item.active ? 'layout-base__nav-link--active' : ''
                      }`}
                      onClick={(e) => handleNavClick(e, item.href)}
                      aria-current={item.active ? 'page' : undefined}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}

          {/* User Area */}
          {user && (
            <div className="layout-base__user">
                <div className="layout-base__user-avatar">
                  {user.avatar ? (
                    <img src={user.avatar} alt={user.name} />
                  ) : (
                    <span>{user.initials || user.name.charAt(0)}</span>
                  )}
                </div>
                <span className="layout-base__user-name">{user.name}</span>
            </div>
          )}

          {/* Mobile Toggle */}
          <button
            type="button"
            className={`layout-base__mobile-toggle ${
              mobileMenuOpen ? 'layout-base__mobile-toggle--active' : ''
            }`}
            onClick={handleMobileToggle}
            onKeyDown={(e) => handleKeyDown(e, handleMobileToggle)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            <div className="layout-base__mobile-toggle-icon">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="layout-base__main" id="main-content">
        <div className="layout-base__main-container">
          {/* Content Header */}
          {(pageTitle || actions) && (
            <div className="layout-base__content-header">
              {pageTitle && <h1 className="layout-base__title">{pageTitle}</h1>}
              {actions && <div className="layout-base__actions">{actions}</div>}
            </div>
          )}

          {/* Breadcrumbs */}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav className="layout-base__breadcrumbs" aria-label="Breadcrumb">
              <ol className="layout-base__breadcrumbs-list">
                {breadcrumbs.map((crumb, index) => {
                  const isLast = index === breadcrumbs.length - 1;
                  return (
                    <li key={index} className="layout-base__breadcrumbs-item">
                      {crumb.href && !isLast ? (
                        <a
                          href={crumb.href}
                          className="layout-base__breadcrumbs-link"
                          onClick={(e) => handleBreadcrumbClick(e, crumb.href!)}
                        >
                          {crumb.label}
                        </a>
                      ) : (
                        <span
                          className="layout-base__breadcrumbs-current"
                          aria-current={isLast ? 'page' : undefined}
                        >
                          {crumb.label}
                        </span>
                      )}
                    </li>
                  );
                })}
              </ol>
            </nav>
          )}

          {/* Page Content */}
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="layout-base__footer">
        <div className="layout-base__footer-container">
          <p className="layout-base__footer-signature">{footerText}</p>
        </div>
      </footer>
    </div>
  );
};

export default LayoutBase;
