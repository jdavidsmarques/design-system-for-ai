import './home.scss'

export const Home = () => {
    return (
        <div className="home">
            {/* Hero Section */}
            <section className="home__hero">
                <div className="home__hero-content">
                    <h1 className="home__title">
                        Design System for AI
                    </h1>
                    <p className="home__subtitle">
                        A comprehensive React-based design system built with TypeScript, Vite, and SCSS.
                        Create beautiful, accessible, and consistent user interfaces with ease.
                    </p>
                    <div className="home__cta">
                        <a href="#getting-started" className="home__button home__button--primary">
                            Get Started
                        </a>
                        <a href="/native-elements" className="home__button home__button--secondary">
                            View Components
                        </a>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="home__features">
                <h2 className="home__section-title">Why Choose This Design System?</h2>
                <div className="home__features-grid">
                    <div className="home__feature-card">
                        <div className="home__feature-icon">⚡</div>
                        <h3 className="home__feature-title">Lightning Fast</h3>
                        <p className="home__feature-description">
                            Built with Vite for instant hot module replacement and optimized production builds.
                        </p>
                    </div>

                    <div className="home__feature-card">
                        <div className="home__feature-icon">🎨</div>
                        <h3 className="home__feature-title">Beautiful Design</h3>
                        <p className="home__feature-description">
                            Carefully crafted components with modern aesthetics and smooth animations.
                        </p>
                    </div>

                    <div className="home__feature-card">
                        <div className="home__feature-icon">♿</div>
                        <h3 className="home__feature-title">Accessible</h3>
                        <p className="home__feature-description">
                            WCAG 2.1 Level AA compliant with keyboard navigation and screen reader support.
                        </p>
                    </div>

                    <div className="home__feature-card">
                        <div className="home__feature-icon">📱</div>
                        <h3 className="home__feature-title">Responsive</h3>
                        <p className="home__feature-description">
                            Mobile-first approach ensures perfect rendering on all devices and screen sizes.
                        </p>
                    </div>

                    <div className="home__feature-card">
                        <div className="home__feature-icon">🔧</div>
                        <h3 className="home__feature-title">TypeScript</h3>
                        <p className="home__feature-description">
                            Fully typed components with excellent IDE support and autocomplete.
                        </p>
                    </div>

                    <div className="home__feature-card">
                        <div className="home__feature-icon">🎯</div>
                        <h3 className="home__feature-title">Customizable</h3>
                        <p className="home__feature-description">
                            Design tokens and CSS variables make theming and customization effortless.
                        </p>
                    </div>
                </div>
            </section>

            {/* Getting Started Section */}
            <section id="getting-started" className="home__getting-started">
                <h2 className="home__section-title">Getting Started</h2>
                <p className="home__section-subtitle">
                    Follow these simple steps to start using the design system in your project
                </p>

                <div className="home__steps">
                    <div className="home__step">
                        <div className="home__step-number">1</div>
                        <div className="home__step-content">
                            <h3 className="home__step-title">Install the Package</h3>
                            <p className="home__step-description">
                                Add the design system library to your project using npm or yarn
                            </p>
                            <div className="home__code-block">
                                <code>npm install design-system-library</code>
                            </div>
                        </div>
                    </div>

                    <div className="home__step">
                        <div className="home__step-number">2</div>
                        <div className="home__step-content">
                            <h3 className="home__step-title">Import the Styles</h3>
                            <p className="home__step-description">
                                Import the base styles in your main application file
                            </p>
                            <div className="home__code-block">
                                <code>import 'design-system-library/styles';</code>
                            </div>
                        </div>
                    </div>

                    <div className="home__step">
                        <div className="home__step-number">3</div>
                        <div className="home__step-content">
                            <h3 className="home__step-title">Import Components</h3>
                            <p className="home__step-description">
                                Start using components in your React application
                            </p>
                            <div className="home__code-block">
                                <code>
                                    {`import { LayoutBase } from 'design-system-library';

function App() {
  return (
    <LayoutBase
      logoText="My App"
      navItems={[...]}
    >
      {/* Your content */}
    </LayoutBase>
  );
}`}
                                </code>
                            </div>
                        </div>
                    </div>

                    <div className="home__step">
                        <div className="home__step-number">4</div>
                        <div className="home__step-content">
                            <h3 className="home__step-title">Customize & Build</h3>
                            <p className="home__step-description">
                                Override CSS variables to match your brand and start building amazing UIs
                            </p>
                            <div className="home__code-block">
                                <code>
                                    {`:root {
  --color-primary: #your-brand-color;
  --font-family-base: 'Your Font', sans-serif;
}`}
                                </code>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tech Stack Section */}
            <section className="home__tech-stack">
                <h2 className="home__section-title">Built With Modern Technologies</h2>
                <div className="home__tech-grid">
                    <div className="home__tech-item">
                        <div className="home__tech-badge">React 19</div>
                        <p>Latest React features and hooks</p>
                    </div>
                    <div className="home__tech-item">
                        <div className="home__tech-badge">TypeScript</div>
                        <p>Type-safe development</p>
                    </div>
                    <div className="home__tech-item">
                        <div className="home__tech-badge">Vite</div>
                        <p>Next-gen build tool</p>
                    </div>
                    <div className="home__tech-item">
                        <div className="home__tech-badge">SCSS</div>
                        <p>Powerful CSS preprocessing</p>
                    </div>
                </div>
            </section>

            {/* Quick Links Section */}
            <section className="home__quick-links">
                <h2 className="home__section-title">Explore the Design System</h2>
                <div className="home__links-grid">
                    <a href="/native-elements" className="home__link-card">
                        <h3 className="home__link-title">Native Elements</h3>
                        <p className="home__link-description">
                            See how native HTML elements are styled by default
                        </p>
                        <span className="home__link-arrow">→</span>
                    </a>

                    <a href="/components" className="home__link-card">
                        <h3 className="home__link-title">Components</h3>
                        <p className="home__link-description">
                            Browse the complete library of React components
                        </p>
                        <span className="home__link-arrow">→</span>
                    </a>

                    <a href="/docs" className="home__link-card">
                        <h3 className="home__link-title">Documentation</h3>
                        <p className="home__link-description">
                            Learn about component APIs and usage guidelines
                        </p>
                        <span className="home__link-arrow">→</span>
                    </a>
                </div>
            </section>
        </div>
    )
}

export default Home
