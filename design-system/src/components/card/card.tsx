import React from 'react';
import './card.scss';

/**
 * Card Props Interface
 */
export interface CardProps {
  /** Content to render inside the card */
  children: React.ReactNode;
  /** Optional additional CSS classes */
  className?: string;
  /** Optional inline styles */
  style?: React.CSSProperties;
}

/**
 * Card Component
 *
 * A flexible container component with consistent styling.
 * Features:
 * - Clean white background with subtle shadow
 * - Rounded corners
 * - Default padding
 * - Accepts any React children
 * - Follows BEM methodology and uses design tokens
 *
 * @example
 * ```tsx
 * // Basic card
 * <Card>
 *   <h2>Card Title</h2>
 *   <p>Card content goes here</p>
 * </Card>
 *
 * // Card with custom class
 * <Card className="custom-card">
 *   <p>Custom styled card</p>
 * </Card>
 * ```
 */
export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  style,
}) => {
  const cardClasses = ['card', className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={cardClasses} style={style}>
      {children}
    </div>
  );
};

export default Card;
