import React from 'react';
import './Component424.css';

export interface Component424Props {
  /** Figma variant property: '5', '10', '15', '20', '25', '30', '35' or '5MW', '10MW', '15MW', '20MW', '25MW', '30MW', '35MW' */
  Property_1?: '5' | '10' | '15' | '20' | '25' | '30' | '35' | '5MW' | '10MW' | '15MW' | '20MW' | '25MW' | '30MW' | '35MW';
  /** Custom height */
  height?: number;
  /** Custom width */
  width?: number;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * **Component 424** (Figma ID: 125:2420)
 * 
 * A single vertical bar with customizable heights:
 * - Simple grey/blue rounded bars ('5', '10', etc.)
 * - Gradient teal rounded bars with a top value badge ('5MW', '10MW', etc.)
 */
export const Component424: React.FC<Component424Props> = ({
  Property_1 = '5',
  height = 280,
  width = 60,
  className = '',
  style = {},
}) => {
  const isMW = Property_1.endsWith('MW');
  const numericValue = parseInt(Property_1.replace(/[^\d]/g, ''), 10) || 5;

  // Compute height of the bar based on the value (5 to 35)
  const barHeight = (numericValue / 35) * (height - 60);

  return (
    <div
      className={`c424-bar-container ${isMW ? 'c424-bar-container--mw' : ''} ${className}`}
      style={{
        width,
        height,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
        position: 'relative',
        ...style
      }}
      data-figma-node="125:2420"
      data-property1={Property_1}
    >
      {/* Tooltip Badge (MW variants only) */}
      {isMW && (
        <div
          className="c424-badge"
          style={{
            position: 'absolute',
            bottom: barHeight + 12,
            background: 'linear-gradient(135deg, #7bc1c9, #0d9488)',
            color: '#ffffff',
            padding: '6px 12px',
            borderRadius: '9999px',
            fontSize: '11px',
            fontWeight: '600',
            fontFamily: 'Inter, sans-serif',
            boxShadow: '0 2px 8px rgba(13, 148, 136, 0.25)',
            whiteSpace: 'nowrap',
            zIndex: 2,
            transition: 'bottom 0.3s ease',
          }}
        >
          {Property_1}
        </div>
      )}

      {/* Main Bar */}
      <div
        className="c424-bar"
        style={{
          width: '100%',
          height: barHeight,
          background: isMW
            ? 'linear-gradient(to top, #0d9488, #7bc1c9)'
            : '#e5f2f5',
          borderRadius: '20px',
          transition: 'all 0.3s ease',
        }}
      />
    </div>
  );
};

export default Component424;
