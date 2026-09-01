import React from 'react';
import './EfficiencyTrendsLight.css';

export interface EfficiencyTrendsLightProps {
  /** Figma variant property: '75', '80', '85', '90', '95' */
  Property_1?: '75' | '80' | '85' | '90' | '95';
  /** Custom height */
  height?: number;
  /** Custom width */
  width?: number;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * **Efficiency trends light** individual bar component.
 * Figma ID: 180:4449
 */
export const EfficiencyTrendsLight: React.FC<EfficiencyTrendsLightProps> = ({
  Property_1 = '75',
  height = 220,
  width = 52,
  className = '',
  style = {},
}) => {
  const value = parseInt(Property_1, 10) || 75;
  // Map value (75-95) to actual fill percentage of the bar height
  // Since this is the "light" variant, it represents 2025 (light teal #7bc1c9)
  const barHeight = (value / 95) * height;

  return (
    <div
      className={`et-light-bar-container ${className}`}
      style={{
        width,
        height,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        background: '#e5f2f5',
        borderRadius: '14px',
        overflow: 'hidden',
        ...style
      }}
      data-figma-node="180:4449"
      data-property1={Property_1}
    >
      <div
        style={{
          height: `${barHeight}px`,
          backgroundColor: '#7bc1c9',
          borderRadius: '14px',
          width: '100%',
          transition: 'height 0.3s ease',
        }}
      />
    </div>
  );
};

export default EfficiencyTrendsLight;
