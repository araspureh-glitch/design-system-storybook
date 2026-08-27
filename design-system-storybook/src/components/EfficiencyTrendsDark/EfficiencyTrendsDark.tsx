import React from 'react';
import './EfficiencyTrendsDark.css';

export interface EfficiencyTrendsDarkProps {
  /** Figma variant property: '75 d', '80 d', '85 d', '90d', '95 d' */
  Property_1?: '75 d' | '80 d' | '85 d' | '90d' | '95 d';
  /** Custom height */
  height?: number;
  /** Custom width */
  width?: number;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * **Efficiency trends dark** individual bar component.
 * Figma ID: 180:4438
 */
export const EfficiencyTrendsDark: React.FC<EfficiencyTrendsDarkProps> = ({
  Property_1 = '75 d',
  height = 220,
  width = 52,
  className = '',
  style = {},
}) => {
  // Parse value from string (extracting numbers like 75, 80, 85, 90, 95)
  const value = parseInt(Property_1.replace(/[^\d]/g, ''), 10) || 75;
  const barHeight = (value / 95) * height;

  return (
    <div
      className={`et-dark-bar-container ${className}`}
      style={{
        width,
        height,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        background: '#e5f2f5',
        borderRadius: `${width / 2}px`,
        overflow: 'hidden',
        ...style
      }}
      data-figma-node="180:4438"
      data-property1={Property_1}
    >
      <div
        style={{
          height: `${barHeight}px`,
          backgroundColor: '#0d9488',
          borderRadius: `${width / 2}px`,
          width: '100%',
          transition: 'height 0.3s ease',
        }}
      />
    </div>
  );
};

export default EfficiencyTrendsDark;
