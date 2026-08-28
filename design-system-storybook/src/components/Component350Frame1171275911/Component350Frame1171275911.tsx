import React from 'react';
import './Component350Frame1171275911.css';

export interface Component350Frame1171275911Props {
  className?: string;
  style?: React.CSSProperties;
  title?: string;
  percent?: number;
  showIcon?: boolean;
}

const PlusIcon: React.FC = () => (
  <svg 
    width="22" 
    height="22" 
    viewBox="0 0 22 22" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    style={{ display: 'block' }}
  >
    <path 
      d="M11 4V18M4 11H18" 
      stroke="#018793" 
      strokeWidth="2.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * **Preserved Figma Layer Name**: `Component 350/Frame 1171275911`
 * Page: `cards`
 * Type: `COMPONENT`
 * ID: `4:891`
 */
export const Component350Frame1171275911: React.FC<Component350Frame1171275911Props> = ({
  className = '',
  style = {},
  title = "Smart City Health Score",
  percent = 82,
  showIcon = true,
  ...props
}) => {
  // SVG circular progress calculation
  const cx = 80;
  const cy = 80;
  const outerRadius = 80;
  const strokeWidth = 14;
  const radius = outerRadius - strokeWidth / 2; // = 73
  const circumference = 2 * Math.PI * radius; // ≈ 458.67
  
  const clampedPercent = Math.min(100, Math.max(0, percent));
  const strokeDashoffset = circumference - (clampedPercent / 100) * circumference;

  return (
    <div 
      className={`component350frame1171275911-container ${className}`}
      style={style}
      data-figma-layer="Component 350/Frame 1171275911"
      data-figma-page="cards"
      {...props}
    >
      <div className="health-score-card">
        {/* Header */}
        <div className="health-score-header">
          <h3 className="health-score-title">{title}</h3>
          {showIcon && (
            <div className="health-score-icon">
              <PlusIcon />
            </div>
          )}
        </div>
        
        {/* Circular Progress Ring */}
        <div className="health-score-chart-container">
          <svg 
            width="160" 
            height="160" 
            viewBox="0 0 160 160" 
            className="health-score-svg"
            aria-label={`Progress: ${clampedPercent}%`}
          >
            <defs>
              <linearGradient id="health-score-grad" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#67b7be" />
                <stop offset="100%" stopColor="#30848d" />
              </linearGradient>
              <filter id="health-inner-shadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="4" stdDeviation="5" floodColor="#003c42" floodOpacity="0.08" />
              </filter>
            </defs>

            {/* Background circle track */}
            <circle 
              cx={cx}
              cy={cy}
              r={radius}
              fill="transparent"
              stroke="#e8f5f7"
              strokeWidth={strokeWidth}
            />

            {/* Active progress circle */}
            <circle 
              cx={cx}
              cy={cy}
              r={radius}
              fill="transparent"
              stroke="url(#health-score-grad)"
              strokeWidth={strokeWidth}
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              transform={`rotate(-90 ${cx} ${cy})`}
              className="health-score-progress-ring"
            />

            {/* Inner white circle badge overlay with shadow */}
            <circle 
              cx={cx}
              cy={cy}
              r="48"
              fill="#FFFFFF"
              filter="url(#health-inner-shadow)"
            />

            {/* Value text in the center */}
            <text 
              x={cx}
              y={cy}
              textAnchor="middle"
              dominantBaseline="central"
              className="health-score-center-value"
            >
              {clampedPercent}%
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Component350Frame1171275911;
