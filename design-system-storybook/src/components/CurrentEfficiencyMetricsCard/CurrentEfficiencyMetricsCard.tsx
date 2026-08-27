import React from 'react';
import './CurrentEfficiencyMetricsCard.css';
import { ProgressBarState } from '../ProgressBarState/ProgressBarState';

export interface CurrentEfficiencyMetricsCardProps {
  className?: string;
  style?: React.CSSProperties;
}

/**
 * **Current Efficiency Metrics Card** (Figma Node: 181:4697)
 * 
 * Renders the dashboard card showing progress status bars for all city systems.
 * Uses the ProgressBarState component internally for rich hover interactions.
 */
export const CurrentEfficiencyMetricsCard: React.FC<CurrentEfficiencyMetricsCardProps> = ({
  className = '',
  style = {},
}) => {
  const metricsData: { label: string; progress: '0%' | '20%' | '40%' | '60%' | '80%' | '100%' }[] = [
    { label: 'HVAC', progress: '80%' },
    { label: 'Street Lighting', progress: '60%' },
    { label: 'Public Transport', progress: '40%' },
    { label: 'Water Management', progress: '80%' },
    { label: 'Residential Buildings', progress: '100%' },
    { label: 'Industrial Load', progress: '20%' },
    { label: 'Others', progress: '40%' },
  ];

  return (
    <div
      className={`current-efficiency-card ${className}`}
      style={{
        backgroundColor: '#ffffff',
        borderRadius: '18px',
        padding: '21px 23px 23px 44px', // Figma Auto Layout: Top 21, Right 23, Bottom 23, Left 44
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.04)',
        display: 'flex',
        flexDirection: 'column',
        gap: '22px', // Figma Auto Layout gap: 22px
        fontFamily: 'Inter, sans-serif',
        width: '100%',
        maxWidth: '758px',
        height: '608px',
        boxSizing: 'border-box',
        ...style
      }}
      data-figma-node="181:4697"
    >
      {/* Card Header */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
        <h3
          style={{
            margin: 0,
            fontSize: '24px',
            fontWeight: '700',
            color: '#000000',
            letterSpacing: '-0.02em',
          }}
        >
          Current Efficiency Metrics
        </h3>
      </div>

      {/* Metrics List */}
      <div
        className="current-efficiency-list"
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '22px',
          overflowY: 'auto',
          flex: 1,
          paddingRight: '4px',
        }}
      >
        {metricsData.map((metric, index) => (
          <ProgressBarState
            key={index}
            label={metric.label}
            progress={metric.progress}
            style={{ maxWidth: '100%' }} // let progress bar take full card width
          />
        ))}
      </div>
    </div>
  );
};

export default CurrentEfficiencyMetricsCard;
