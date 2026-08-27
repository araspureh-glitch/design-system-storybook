import React from 'react';
import './Nav.css';

export interface NavProps {
  /** Figma variant property: 'hover' | 'blank' | 'selected' */
  Property_1?: 'hover' | 'blank' | 'selected';
  /** Text label displayed in the tab */
  label?: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

/**
 * **Nav Tab Item** component (Figma Node: 181:4800)
 * 
 * Individual tab item supporting multiple states:
 * - 'hover': active hover state with white background and dark teal text.
 * - 'blank': default inactive/blank state with transparent background.
 * - 'selected': active selection state with solid dark teal background and white text.
 */
export const Nav: React.FC<NavProps> = ({
  Property_1 = 'blank',
  label = 'Overview',
  className = '',
  style = {},
  onClick,
}) => {
  const isHover = Property_1 === 'hover';
  const isSelected = Property_1 === 'selected';

  return (
    <div
      className={`nav-tab-item nav-tab-item--${Property_1} ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '308px',
        height: '39px',
        borderRadius: '13px',
        fontSize: '15px',
        fontWeight: '600',
        cursor: 'pointer',
        userSelect: 'none',
        transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
        fontFamily: 'Inter, sans-serif',
        ...getStylesForState(Property_1),
        ...style
      }}
      onClick={onClick}
      data-figma-node="181:4800"
      data-property1={Property_1}
    >
      {label}
    </div>
  );
};

// Helper helper function to assign visual tokens based on active figma variant
function getStylesForState(state: 'hover' | 'blank' | 'selected'): React.CSSProperties {
  switch (state) {
    case 'hover':
      return {
        backgroundColor: '#ffffff',
        color: '#105e68',
        boxShadow: '0 2px 8px rgba(16, 94, 104, 0.08)',
      };
    case 'selected':
      return {
        backgroundColor: '#105e68', // Dark teal background
        color: '#ffffff',
        boxShadow: '0 2px 8px rgba(16, 94, 104, 0.15)',
      };
    case 'blank':
    default:
      return {
        backgroundColor: 'transparent',
        color: '#475569', // Muted text
      };
  }
}

export default Nav;
