import React from 'react';
import { ItemLabel, Card } from '../../../../components';

export const ItemLabelPreview: React.FC = () => {
    return (
        <div className="preview-page">
            <p className="preview-description">
                The ItemLabel component is used to organize content with a label, ensuring consistency across the application.
            </p>

            <section>
                <h2>Basic Usage</h2>
                <Card>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <ItemLabel label="Username">
                            <input type="text" placeholder="Enter username" style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
                        </ItemLabel>

                        <ItemLabel label="Bio">
                            <textarea placeholder="Tell us about yourself" style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc', minHeight: '100px' }} />
                        </ItemLabel>
                    </div>
                </Card>
            </section>

            <section>
                <h2>With Label Element (for accessibility)</h2>
                <Card>
                    <ItemLabel label="Email Address" isLabelElement htmlFor="email-input">
                        <input id="email-input" type="email" placeholder="name@example.com" style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
                    </ItemLabel>
                </Card>
            </section>

            <section>
                <h2>With Custom Content</h2>
                <Card>
                    <ItemLabel label="Selected Option">
                        <div style={{ padding: '10px', background: '#f5f5f5', borderRadius: '4px' }}>
                            <strong>Option A</strong> - Description of option A
                        </div>
                    </ItemLabel>
                </Card>
            </section>
        </div>
    );
};

export default ItemLabelPreview;
