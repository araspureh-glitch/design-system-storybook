import React from 'react';
import './CircleChart.css';

export interface CircleChartProps {
  Property_1?: 'Add A' | 'Add B' | 'Add C' | 'Add D' | 'Add E' | 'Add F' | 'View A detail' | 'View B detail' | 'View C detail' | 'View D detail' | 'View E detail' | 'View F detail';
  className?: string;
  style?: React.CSSProperties;
}

interface SliceConfig {
  id: 'A' | 'B' | 'C' | 'D' | 'E' | 'F';
  percentage: number;
  color: string;
}

const SLICES: SliceConfig[] = [
  { id: 'A', percentage: 23, color: '#a7f3d0' }, // light mint
  { id: 'B', percentage: 18, color: '#6ee7b7' }, // medium-light teal
  { id: 'C', percentage: 16, color: '#34d399' }, // medium teal
  { id: 'D', percentage: 25, color: '#059669' }, // darker teal
  { id: 'E', percentage: 10, color: '#047857' }, // darkest teal
  { id: 'F', percentage: 8, color: '#a7f3d0' },  // very thin light teal
];

/**
 * **Circle Chart** component (Figma Node: 180:4469)
 */
export const CircleChart: React.FC<CircleChartProps> = ({
  Property_1 = 'Add A',
  className = '',
  style = {},
}) => {
  // Determine how many slices to show based on "Add X" variant
  let visibleSlicesCount = 6;
  if (Property_1.startsWith('Add ')) {
    const char = Property_1.charAt(4); // A, B, C, D, E, F
    visibleSlicesCount = char.charCodeAt(0) - 'A'.charCodeAt(0) + 1;
  }

  // Determine if a specific slice is exploded
  const explodedSliceId = Property_1.startsWith('View ') ? Property_1.charAt(5) : null;

  // SVG Geometry
  const size = 240;
  const center = size / 2;
  const radius = 90;

  // Calculate start and end angles for each slice
  let currentAngle = -90; // Start at 12 o'clock

  return (
    <div
      className={`circlechart-component-container ${className}`}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        width: size,
        height: size,
        ...style
      }}
      data-figma-node="180:4469"
      data-property1={Property_1}
    >
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} overflow="visible">
        {SLICES.slice(0, visibleSlicesCount).map((slice) => {
          const angleDelta = (slice.percentage / 100) * 360;
          const startAngle = currentAngle;
          const endAngle = currentAngle + angleDelta;
          currentAngle = endAngle;

          // Compute path points
          const radStart = (startAngle * Math.PI) / 180;
          const radEnd = (endAngle * Math.PI) / 180;

          // Check if this slice is exploded
          const isExploded = explodedSliceId === slice.id;
          const bisectorRad = ((startAngle + angleDelta / 2) * Math.PI) / 180;
          
          // Center offsets for exploded slice
          const offsetX = isExploded ? Math.cos(bisectorRad) * 12 : 0;
          const offsetY = isExploded ? Math.sin(bisectorRad) * 12 : 0;

          const x1 = center + offsetX + radius * Math.cos(radStart);
          const y1 = center + offsetY + radius * Math.sin(radStart);
          const x2 = center + offsetX + radius * Math.cos(radEnd);
          const y2 = center + offsetY + radius * Math.sin(radEnd);

          const largeArcFlag = angleDelta > 180 ? 1 : 0;

          const pathData = [
            `M ${center + offsetX} ${center + offsetY}`,
            `L ${x1} ${y1}`,
            `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}`,
            'Z'
          ].join(' ');

          // Tooltip position (centered slightly outside the arc)
          const tooltipDist = radius + 22;
          const tooltipX = center + offsetX + tooltipDist * Math.cos(bisectorRad);
          const tooltipY = center + offsetY + tooltipDist * Math.sin(radRadOffset(bisectorRad, slice.id));

          return (
            <g key={slice.id} className="cc-slice-group">
              {/* Pie Slice */}
              <path
                d={pathData}
                fill={slice.color}
                className={`cc-pie-slice ${isExploded ? 'cc-pie-slice--exploded' : ''}`}
                style={{
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
              />

              {/* Exploded Label Badge */}
              {isExploded && (
                <g className="cc-tooltip-badge">
                  {/* Small Rect badge */}
                  <rect
                    x={tooltipX - 18}
                    y={tooltipY - 10}
                    width="36"
                    height="20"
                    rx="4"
                    fill="#ffffff"
                    stroke="#e2e8f0"
                    strokeWidth="1"
                    className="cc-badge-bg"
                  />
                  <text
                    x={tooltipX}
                    y={tooltipY + 1}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="#0f172a"
                    fontSize="10px"
                    fontWeight="600"
                    fontFamily="Inter, sans-serif"
                  >
                    {slice.percentage}%
                  </text>
                </g>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
};

// Helper to slightly adjust tooltip rendering alignments for perfect visuals
function radRadOffset(rad: number, id: string): number {
  return rad;
}

export default CircleChart;
