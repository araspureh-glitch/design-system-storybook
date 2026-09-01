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
  { month: 'Jan', val2024: 84.2, val2025: 90.8, valBg: 96.5 },
  { month: 'Feb', val2024: 81.0, val2025: 90.8, valBg: 96.5 },
  { month: 'Mar', val2024: 82.5, val2025: 90.8, valBg: 96.5 },
  { month: 'Apr', val2024: 81.0, val2025: 90.8, valBg: 96.5 },
  { month: 'May', val2024: 81.0, val2025: 90.8, valBg: 96.5 },
  { month: 'Jun', val2024: 81.0, val2025: 90.8, valBg: 96.5 },
  { month: 'Jul', val2024: 81.0, val2025: 90.8, valBg: 96.5 },
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
                width={44}
                val2024={d.val2024}
                val2025={d.val2025}
                valBg={d.valBg}
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
