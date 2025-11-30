import React from 'react';
import { Card } from '../../../components';

interface ComponentLink {
    name: string;
    path: string;
    description: string;
}

export const Components: React.FC = () => {
    const components: ComponentLink[] = [
        {
            name: 'Item Label',
            path: '/components/item-label',
            description: 'A wrapper component that adds a consistent label above any content.',
        },
        {
            name: 'Card',
            path: '/components/card',
            description: 'A flexible container component with consistent styling.',
        },
    ];

    const handleNavigate = (path: string) => {
        window.history.pushState({}, '', path);
        // Dispatch a popstate event to trigger the router in App.tsx
        window.dispatchEvent(new PopStateEvent('popstate'));
    };

    return (
        <div className="components-page">
            <h1>Components</h1>
            <p className="page-description">
                Explore the available components in the design system.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px', marginTop: '20px' }}>
                {components.map((component) => (
                    <Card key={component.path} className="component-card">
                        <div
                            style={{ cursor: 'pointer' }}
                            onClick={() => handleNavigate(component.path)}
                        >
                            <h3 style={{ marginTop: 0 }}>{component.name}</h3>
                            <p>{component.description}</p>
                            <span style={{ color: 'var(--color-primary, #0066cc)', textDecoration: 'underline' }}>View Details</span>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Components;
