import React from 'react';
import './ProgressBar.css';

export interface ProgressBarProps {
  /** Show or hide the percentage label on the right */
  Procent_104_26?: boolean;
  /** Alignment / position of progress value */
  Position?: 'Right';
  /** State of the progress bar: Active or Disabled */
  State?: 'Active' | 'Disabled';
  /** Percentage fill: '0%' | '20%' | '40%' | '60%' | '80%' | '100%' */
  Procent?: '0%' | '20%' | '40%' | '60%' | '80%' | '100%';
  className?: string;
  style?: React.CSSProperties;
}

/**
 * **Progress Bar** component (Figma Node: 181:6689)
 * 
 * Renders a premium horizontal 5-segmented progress bar:
 * - Divides progress into 5 equal pill segments (representing 20% chunks).
 * - Active segments are filled with dark teal.
 * - Inactive segments are filled with light mint grey.
 */
export const ProgressBar: React.FC<ProgressBarProps> = ({
  Procent_104_26 = true,
  Position = 'Right',
  State = 'Active',
  Procent = '0%',
  className = '',
  style = {},
}) => {
  const percentValue = parseInt(Procent.replace('%', ''), 10) || 0;
  const isDisabled = State === 'Disabled';

  // Define thresholds for the 5 segmented blocks (20%, 40%, 60%, 80%, 100%)
  const segmentThresholds = [20, 40, 60, 80, 100];

  return (
    <div
      className={`pb-row-container ${isDisabled ? 'pb--disabled' : ''} ${className}`}
      style={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        gap: '16px',
        fontFamily: 'Inter, sans-serif',
        ...style
      }}
      data-figma-node="181:6689"
      data-property-state={State}
      data-property-procent={Procent}
    >
      {/* Continuous Progress Track */}
      <div
        className="pb-track"
        style={{
          flex: 1,
          height: '6px',
          backgroundColor: '#edeffe', // Inactive track background color
          borderRadius: '0px',
          position: 'relative',
          overflow: 'hidden',
          boxSizing: 'border-box',
        }}
      >
        <div
          className="pb-fill"
          style={{
            width: Procent,
            height: '100%',
            backgroundColor: isDisabled ? '#cbd5e1' : '#115e59', // Active teal fill color
            borderRadius: '0px',
            transition: 'width 0.3s ease',
          }}
        />
      </div>

      {/* Percentage Label */}
      {Procent_104_26 && (
        <span
          className="pb-label"
          style={{
            fontSize: '14px',
            fontWeight: '500',
            color: isDisabled ? '#94a3b8' : '#000000',
            minWidth: '38px',
            textAlign: 'right',
            userSelect: 'none',
          }}
        >
          {Procent}
        </span>
      )}
    </div>
  );
};

export default ProgressBar;
