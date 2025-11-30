import React from 'react';
import './item-label.scss';

export interface ItemLabelProps {
    /** The label text to display */
    label: string;
    /** Whether to render the label as a <label> element or <div>. Defaults to false (div) */
    isLabelElement?: boolean;
    /** The content to be labeled */
    children: React.ReactNode;
    /** Optional additional CSS classes */
    className?: string;
    /** ID for the input element, required if isLabelElement is true */
    htmlFor?: string;
}

/**
 * ItemLabel Component
 * 
 * A wrapper component that adds a consistent label above any content.
 * Useful for form inputs, data displays, or any content that needs a descriptive label.
 */
export const ItemLabel: React.FC<ItemLabelProps> = ({
    label,
    isLabelElement = false,
    children,
    className = '',
    htmlFor,
}) => {
    const containerClasses = ['item-label', className].filter(Boolean).join(' ');

    const LabelTag = isLabelElement ? 'label' : 'div';
    const labelProps = isLabelElement && htmlFor ? { htmlFor } : {};

    return (
        <div className={containerClasses}>
            <LabelTag className="item-label__text" {...labelProps}>
                {label}
            </LabelTag>
            <div className="item-label__content">
                {children}
            </div>
        </div>
    );
};

export default ItemLabel;
