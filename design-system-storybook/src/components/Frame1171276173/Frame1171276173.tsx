import React from 'react';
import './Frame1171276173.css';
import { Zones } from '../Zones/Zones';
import heatmapImg from './heatmap.png';

export interface Frame1171276173Props {
  className?: string;
  style?: React.CSSProperties;
}

/**
 * **Heatmap Card Component** (Figma Node: 186:261)
 * 
 * Renders the full heatmap dashboard card including the title, dropdown Zone selector component,
 * Munich heatmap image, and the load level legend.
 */
export const Frame1171276173: React.FC<Frame1171276173Props> = ({
  className = '',
  style = {},
}) => {
  return (
    <div
      className={`frame1171276173-container ${className}`}
      style={{
        backgroundColor: '#ffffff',
        borderRadius: '24px',
        padding: '24px 32px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        width: '1523px',
        minWidth: '1523px',
        height: '527px',
        minHeight: '527px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.03)',
        boxSizing: 'border-box',
        fontFamily: 'Inter, sans-serif',
        ...style
      }}
      data-figma-node="186:261"
    >
      {/* Header Row */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <h2
          style={{
            margin: 0,
            fontSize: '24px',
            fontWeight: '700',
            color: '#115e59', // Dark teal header text color
            letterSpacing: '-0.02em',
          }}
        >
          Heatmap
        </h2>

        {/* Integrated Dropdown Component */}
        <Zones Property_1="Frame 601" />
      </div>

      {/* Heatmap Image Container */}
      <div
        style={{
          flex: 1,
          width: '100%',
          borderRadius: '16px',
          overflow: 'hidden',
          backgroundColor: '#f8fafc',
          boxSizing: 'border-box',
        }}
      >
        <img
          src={heatmapImg}
          alt="Munich Heatmap"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        />
      </div>

      {/* Legend Footer */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '32px',
          paddingTop: '4px',
        }}
      >
        <span
          style={{
            fontSize: '15px',
            fontWeight: '700',
            color: '#000000',
          }}
        >
          Load Levels:
        </span>

        {/* Legend Items */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          {/* Low Load */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: '#22c55e',
                display: 'inline-block',
              }}
            />
            <span style={{ fontSize: '14px', fontWeight: '500', color: '#000000' }}>
              Low load
            </span>
          </div>

          {/* Medium Load */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: '#fcd34d',
                display: 'inline-block',
              }}
            />
            <span style={{ fontSize: '14px', fontWeight: '500', color: '#000000' }}>
              Medium
            </span>
          </div>

          {/* High Load */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: '#f87171',
                display: 'inline-block',
              }}
            />
            <span style={{ fontSize: '14px', fontWeight: '500', color: '#000000' }}>
              High Load
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const HeatMapChart = Frame1171276173;

export default Frame1171276173;
