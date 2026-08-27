import React from 'react';
import './NavComponent.css';

export interface NavComponentProps {
  /** Figma variant property: 'filled' | 'blank' */
  Property_1?: 'filled' | 'blank';
  /** Text label displayed in the nav item */
  label?: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

/**
 * **Nav Component** (Figma Node: 181:4854)
 * 
 * Sidebar navigation item:
 * - 'filled' — active state with white background, teal text/icon, and right-aligned indicator stripe.
 * - 'blank'  — inactive state with transparent background and muted text/icon.
 */
export const NavComponent: React.FC<NavComponentProps> = ({
  Property_1 = 'filled',
  label = 'Dashboard',
  className = '',
  style = {},
  onClick,
}) => {
  const isFilled = Property_1 === 'filled';

  return (
    <div
      className={`nav-item-container ${isFilled ? 'nav-item--active' : 'nav-item--inactive'} ${className}`}
      style={{
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        height: '76px',
        width: '320px',
        borderRadius: '16px',
        padding: '0px 24px',
        boxSizing: 'border-box',
        cursor: 'pointer',
        fontFamily: 'Inter, sans-serif',
        userSelect: 'none',
        ...style
      }}
      onClick={onClick}
      data-figma-node="181:4854"
      data-property1={Property_1}
    >
      {/* Icon + Label Flex */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flex: 1 }}>
        {/* Line Chart Icon */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke={isFilled ? '#0d9488' : '#275259'}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ transition: 'stroke 0.2s ease' }}
        >
          {/* L-shaped Axis */}
          <path d="M 4 4 L 4 20 L 20 20" />
          {/* Trendline */}
          <path d="M 6 15 L 10 10 L 14 13 L 19 6" />
        </svg>

        {/* Text Label */}
        <span
          style={{
            fontSize: '18px',
            fontWeight: '600',
            color: isFilled ? '#115e59' : '#275259',
            transition: 'color 0.2s ease',
          }}
        >
          {label}
        </span>
      </div>

      {/* Right side Active Indicator Stripe */}
      {isFilled && (
        <div
          className="nav-active-stripe"
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            bottom: 0,
            width: '16px',
            backgroundColor: '#0d9488',
            borderTopRightRadius: '16px',
            borderBottomRightRadius: '16px',
          }}
        />
      )}
    </div>
  );
};

export default NavComponent;
