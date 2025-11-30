import React from 'react';
import { Card } from '../../../../components';

export const CardPreview: React.FC = () => {
    return (
        <div className="preview-page">
            <h1>Card Component</h1>
            <p className="preview-description">
                The Card component is a flexible container with consistent styling, used to group related content.
            </p>

            <section className="preview-section">
                <h2>Basic Usage</h2>
                <Card>
                    <h3>Card Title</h3>
                    <p>This is a basic card with some content inside.</p>
                </Card>
            </section>

            <section className="preview-section">
                <h2>Custom Styling</h2>
                <Card className="custom-card-example" style={{ border: '1px solid #0066cc' }}>
                    <h3>Bordered Card</h3>
                    <p>This card has a custom border applied via style prop (or custom class).</p>
                </Card>
            </section>
        </div>
    );
};

export default CardPreview;
