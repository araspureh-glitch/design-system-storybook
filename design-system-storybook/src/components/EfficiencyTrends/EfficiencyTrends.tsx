import React from 'react';
import './EfficiencyTrends.css';

export interface EfficiencyTrendsProps {
  /**
   * Figma variant:
   * - 'Default' — standard bar (taller top section)
   * - 'hover'   — hover state (slightly elevated glow, same structure)
   */
  Property_1?: 'Default' | 'hover';
  /** Total bar height in px */
  height?: number;
  /** Width of the bar pill in px */
  width?: number;
  /** Value for the dark (2024) segment as % of total height (0–100) */
  darkPercent?: number;
  /** Value for the medium (mid teal) segment as % of total height (0–100) */
  midPercent?: number;
  /** Value for the light (top) segment as % of total height (0–100) */
  lightPercent?: number;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * **Efficiency Trends Bar** — single bar column sub-component
 *
 * Page: `charts` | Node ID: `180:4460` | Type: `COMPONENT_SET`
 *
 * A pill-shaped stacked bar with 3 color layers:
 * - Top    → Light mint  (#e8f5f7) — 2025 light background
 * - Middle → Medium teal (#7fc2c8) — transition zone
 * - Bottom → Dark teal   (#0d9488) — 2024 solid value
 */
export const EfficiencyTrends: React.FC<EfficiencyTrendsProps> = ({
  Property_1 = 'Default',
  height = 220,
  width = 52,
  darkPercent,
  midPercent,
  lightPercent,
  className = '',
  style = {},
}) => {
  const isHover = Property_1 === 'hover';

  // If explicit percentages are not provided, use exact proportions matching the Figma image variants
  const defaultDark = Property_1 === 'hover' ? 45 : 40;
  const defaultMid = Property_1 === 'hover' ? 25 : 15;
  const defaultLight = Property_1 === 'hover' ? 30 : 45;

  const actualDark = darkPercent ?? defaultDark;
  const actualMid = midPercent ?? defaultMid;
  const actualLight = lightPercent ?? defaultLight;

  // Clamp percents so they sum to 100
  const total = actualDark + actualMid + actualLight;
  const dark  = (actualDark  / total) * 100;
  const mid   = (actualMid   / total) * 100;
  const light = (actualLight / total) * 100;


  const uniqueId = React.useId().replace(/:/g, '-');
  const clipId = `et-clip-${uniqueId}`;
  const glowId = `et-glow-${uniqueId}`;
  const rx = width / 2; // fully rounded pill radius

  return (
    <div
      className={`et-bar-wrap ${isHover ? 'et-bar-wrap--hover' : ''} ${className}`}
      style={{ width, height, ...style }}
      data-figma-node="180:4460"
      data-figma-layer="Efficiency trends"
      data-property1={Property_1}
      aria-label={`Efficiency bar: ${actualDark}% dark, ${actualMid}% mid, ${actualLight}% light`}
    >
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        overflow="visible"
      >
        <defs>
          {/* Clip to pill shape */}
          <clipPath id={clipId}>
            <rect x={0} y={0} width={width} height={height} rx={rx} ry={rx} />
          </clipPath>

          {/* Hover glow filter */}
          {isHover && (
            <filter id={glowId} x="-20%" y="-10%" width="140%" height="120%">
              <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#0d9488" floodOpacity="0.35" />
            </filter>
          )}
        </defs>

        {/* Outer pill clipping group */}
        <g clipPath={`url(#${clipId})`}>
          {/* Layer 1: Light mint — TOP */}
          <rect
            x={0}
            y={0}
            width={width}
            height={(light / 100) * height}
            fill="#e5f2f5"
            className="et-seg et-seg--light"
          />

          {/* Layer 2: Medium teal — MIDDLE */}
          <rect
            x={0}
            y={(light / 100) * height}
            width={width}
            height={(mid / 100) * height}
            fill="#7bc1c9"
            className="et-seg et-seg--mid"
          />

          {/* Layer 3: Dark teal — BOTTOM */}
          <rect
            x={0}
            y={((light + mid) / 100) * height}
            width={width}
            height={(dark / 100) * height}
            fill="#0d9488"
            className="et-seg et-seg--dark"
          />
        </g>

        {/* Hover overlay glow */}
        {isHover && (
          <rect
            x={0}
            y={0}
            width={width}
            height={height}
            rx={rx}
            ry={rx}
            fill="none"
            stroke="#0d9488"
            strokeWidth={2}
            opacity={0.5}
            filter={`url(#${glowId})`}
          />
        )}
      </svg>
    </div>
  );
};

export default EfficiencyTrends;
