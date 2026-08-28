import React from 'react';
import './ChartBar.css';

export interface ChartBarProps {
  month: string;
  energyLoad: string;
  renewableShare: number;
  carbonEmissions: string;
  status: string;
  isActive?: boolean;
  /** Stagger delay for entrance animation, e.g. "0.1s" */
  animationDelay?: string;
}

export const ChartBar: React.FC<ChartBarProps> = ({
  month,
  energyLoad,
  renewableShare,
  carbonEmissions,
  status,
  isActive = true,
  animationDelay = '0s'
}) => {
  // fill height base percentage
  const fillHeight = `${renewableShare}%`;

  const barDelayStyle = animationDelay !== '0s' ? { '--bar-delay': animationDelay } as React.CSSProperties : {};

  return (
    <div className="chart-bar-container" style={barDelayStyle}>
      {/* Single merged bar column */}
      <div className={`chart-bar-col ${isActive ? 'is-active' : ''}`}>
        <div className="chart-bar-active-fill" style={{ height: fillHeight }} />

        {/* Knob and tooltip details */}
        <div className="chart-bar-knob-wrapper" style={{ bottom: fillHeight }}>
          <div className="chart-bar-knob" />

          <div className="chart-bar-tooltip">
            <div className="chart-bar-tooltip-header">
              {month}
            </div>
            <div className="chart-bar-tooltip-content">
              <div>Energy Load: {energyLoad}</div>
              <div>Renewable Share: {renewableShare}%</div>
              <div>Carbon Emissions: {carbonEmissions}</div>
              <div className="chart-bar-tooltip-status">
                Status: <span>{status}</span>
              </div>
            </div>
          </div>
          <div className="chart-bar-tooltip-arrow" />
        </div>
      </div>
    </div>
  );
};

export default ChartBar;
