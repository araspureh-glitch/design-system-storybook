import React from 'react';
import './Condition.css';

export interface ConditionProps {
  /** Figma variant property: 'good' | 'optimal' | 'excellent' */
  Property_1?: 'good' | 'optimal' | 'excellent';
  className?: string;
  style?: React.CSSProperties;
}

/**
 * **Condition** status label component (Figma Node: 181:6753)
 * 
 * Displays a clean text label showing the status condition:
 * - 'good'
 * - 'optimal'
 * - 'excellent'
 */
export const Condition: React.FC<ConditionProps> = ({
  Property_1 = 'good',
  className = '',
  style = {},
}) => {
  return (
    <div
      className={`condition-tag condition-tag--${Property_1} ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        fontFamily: 'Inter, sans-serif',
        fontSize: '28px',
        fontWeight: '500',
        color: '#0d9488', // Premium design system teal status text
        textTransform: 'lowercase',
        letterSpacing: '-0.02em',
        transition: 'all 0.2s ease',
        ...style
      }}
      data-figma-node="181:6753"
      data-property1={Property_1}
    >
      {Property_1}
    </div>
  );
};

export default Condition;
