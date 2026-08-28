import React from 'react';
import './PillBar.css';

export interface PillBarProps {
  height: number;
  mwText: string;
  isActive?: boolean;
  /** Stagger delay for entrance animation, e.g. "0.1s" */
  animationDelay?: string;
}

export const PillBar: React.FC<PillBarProps> = ({
  height,
  mwText,
  isActive = true,
  animationDelay = '0s'
}) => {
  const barDelayStyle = animationDelay !== '0s' ? { '--bar-delay': animationDelay } as React.CSSProperties : {};

  return (
    <div className="pill-bar-container" style={{ height: `${height + 46}px`, ...barDelayStyle } as React.CSSProperties}>
      {/* The Badge (60x34px) - displayed above the bar */}
      <div className={`pill-bar-badge ${isActive ? 'is-active' : ''}`}>
        {mwText}
      </div>

      {/* The Merged Column (60xHeight) */}
      <div className={`pill-bar-col ${isActive ? 'is-active' : ''}`} style={{ height: `${height}px` }}>
        {/* Inactive background is light blue. Active overlay is gradient. */}
        <div className="pill-bar-active-fill" />
      </div>
    </div>
  );
};

export default PillBar;
