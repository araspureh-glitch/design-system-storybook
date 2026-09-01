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
  height = 200,
  width = 44,
  val2024,
  val2025,
  valBg,
  darkPercent,
  midPercent,
  lightPercent,
  className = '',
  style = {},
}) => {
  const isHover = Property_1 === 'hover';

  let darkH: number;
  let midH: number;
  let bgH: number;

  if (val2024 !== undefined || val2025 !== undefined || valBg !== undefined) {
    const v2024 = val2024 ?? 81;
    const v2025 = val2025 ?? 90.8;
    const vBg = valBg ?? 96.5;

    const scale = (val: number) => Math.max(0, ((val - 75) / 20) * height);
    darkH = scale(v2024);
    midH = scale(v2025);
    bgH = scale(vBg);
  } else if (darkPercent !== undefined || midPercent !== undefined || lightPercent !== undefined) {
    const dp = darkPercent ?? 40;
    const mp = midPercent ?? 20;
    const lp = lightPercent ?? 35;
    const tot = dp + mp + lp;
    darkH = (dp / tot) * height;
    midH = ((dp + mp) / tot) * height;
    bgH = height;
  } else {
    darkH = ((81 - 75) / 20) * height;
    midH = ((90.8 - 75) / 20) * height;
    bgH = ((96.5 - 75) / 20) * height;
  }

  const rx = 20;
  const uniqueId = React.useId().replace(/:/g, '-');
  const clipId = `et-clip-${uniqueId}`;

  return (
    <div
      className={`et-bar-wrap ${isHover ? 'et-bar-wrap--hover' : ''} ${className}`}
      style={{ width, height, ...style }}
      data-figma-node="180:4460"
      data-figma-layer="Efficiency trends"
      data-property1={Property_1}
      aria-label={`Efficiency bar: dark ${darkH}px, mid ${midH}px, bg ${bgH}px`}
    >
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        overflow="visible"
      >
        <defs>
          <clipPath id={clipId}>
            <rect x={0} y={0} width={width} height={height} rx={rx} ry={rx} />
          </clipPath>
        </defs>

        <g clipPath={`url(#${clipId})`}>
          {/* Layer 1: Background light mint */}
          <rect
            x={0}
            y={height - bgH}
            width={width}
            height={bgH}
            rx={rx}
            ry={rx}
            fill="#e5f2f5"
            className="et-seg et-seg--light"
          />

          {/* Layer 2: 2025 Medium teal */}
          <rect
            x={0}
            y={height - midH}
            width={width}
            height={midH}
            rx={rx}
            ry={rx}
            fill="#7bc1c9"
            className="et-seg et-seg--mid"
          />

          {/* Layer 3: 2024 Dark teal */}
          <rect
            x={0}
            y={height - darkH}
            width={width}
            height={darkH}
            rx={rx}
            ry={rx}
            fill="#0d9488"
            className="et-seg et-seg--dark"
          />
        </g>
      </svg>
    </div>
  );
};

export default EfficiencyTrends;
