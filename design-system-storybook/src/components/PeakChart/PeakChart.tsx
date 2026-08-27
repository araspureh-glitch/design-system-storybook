import React from 'react';
import './PeakChart.css';

export interface PeakChartProps {
  /** Figma variant property: '1800d' | '1600d' | '1400d' | '1200d' | '1000d' | '800d' | '600d' | '400d' */
  Property_1?: '1800d' | '1600d' | '1400d' | '1200d' | '1000d' | '800d' | '600d' | '400d';
  /** Total component container height */
  height?: number;
  /** Width of the bar */
  width?: number;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * **Peak chart** bar component (Figma Node: 180:4421)
 * 
 * Renders a single vertical pill-shaped dark teal bar whose height
 * is proportional to the variant value (from 400d to 1800d).
 */
export const PeakChart: React.FC<PeakChartProps> = ({
  Property_1 = '1800d',
  height = 220,
  width = 52,
  className = '',
  style = {},
}) => {
  // Parse numeric value from string (e.g., "1800d" -> 1800)
  const value = parseInt(Property_1.replace(/[^\d]/g, ''), 10) || 1800;
  
  // Calculate relative height of the bar (max value is 1800)
  const barHeight = (value / 1800) * height;

  return (
    <div
      className={`peak-bar-container ${className}`}
      style={{
        width,
        height,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        position: 'relative',
        ...style
      }}
      data-figma-node="180:4421"
      data-property1={Property_1}
    >
      <div
        className="peak-bar-fill"
        style={{
          width: '100%',
          height: barHeight,
          backgroundColor: '#105e68', // Dark teal color from Figma spec
          borderRadius: `${width / 2}px`, // Pill shaped corners
          transition: 'height 0.3s ease',
        }}
      />
    </div>
  );
};

export default PeakChart;
