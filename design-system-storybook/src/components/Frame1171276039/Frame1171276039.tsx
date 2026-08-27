import React from 'react';
import './Frame1171276039.css';
import { EfficiencyTrends } from '../EfficiencyTrends/EfficiencyTrends';

export interface Frame1171276039Props {
  title?: string;
  className?: string;
  style?: React.CSSProperties;
}

// Proportions matching the Figma image values for 2025 (light teal) and 2024 (dark teal)
const MONTHLY_DATA = [
  { month: 'Jan', darkPercent: 44, midPercent: 18, lightPercent: 33 }, // total = 95
  { month: 'Feb', darkPercent: 40, midPercent: 20, lightPercent: 35 }, // total = 95
  { month: 'Mar', darkPercent: 42, midPercent: 18, lightPercent: 35 }, // total = 95
  { month: 'Apr', darkPercent: 40, midPercent: 20, lightPercent: 35 }, // total = 95
  { month: 'May', darkPercent: 40, midPercent: 20, lightPercent: 35 }, // total = 95
  { month: 'Jun', darkPercent: 40, midPercent: 20, lightPercent: 35 }, // total = 95
  { month: 'Jul', darkPercent: 40, midPercent: 20, lightPercent: 35 }, // total = 95
];

/**
 * **Efficiency trends card** (`Frame 1171276039`)
 * 
 * Page: `cards` | Node ID: `186:349` | Type: `FRAME`
 */
export const Frame1171276039: React.FC<Frame1171276039Props> = ({
  title = 'Efficiency trends',
  className = '',
  style = {},
  ...props
}) => {
  const yTicks = [95, 90, 85, 80, 75];

  return (
    <div
      className={`et-card-container ${className}`}
      style={style}
      data-figma-layer="Frame 1171276039"
      data-figma-page="cards"
      data-figma-node-id="186:349"
      {...props}
    >
      {/* Header */}
      <div className="et-card-header">
        <h3 className="et-card-title">{title}</h3>
        <div className="et-card-legend">
          <div className="et-card-legend-item">
            <span className="et-card-dot et-card-dot--2025" />
            <span className="et-card-legend-label">2025</span>
          </div>
          <div className="et-card-legend-item">
            <span className="et-card-dot et-card-dot--2024" />
            <span className="et-card-legend-label">2024</span>
          </div>
        </div>
      </div>

      {/* Chart Layout */}
      <div className="et-card-chart-area">
        {/* Y Axis Grid lines */}
        <div className="et-card-grid">
          {yTicks.map((tick) => (
            <div key={tick} className="et-card-grid-row">
              <span className="et-card-y-label">{tick}</span>
              <div className="et-card-grid-line" />
            </div>
          ))}
        </div>

        {/* Columns */}
        <div className="et-card-columns">
          {MONTHLY_DATA.map((d) => (
            <div key={d.month} className="et-card-column-wrapper">
              <EfficiencyTrends
                height={200}
                width={40}
                darkPercent={d.darkPercent}
                midPercent={d.midPercent}
                lightPercent={d.lightPercent}
              />
              <span className="et-card-x-label">{d.month}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Frame1171276039;
