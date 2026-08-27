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
 * A horizontal progress bar displaying status fill (0% to 100%) in dark teal,
 * with optional right-aligned percentage text labels.
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
      {/* Progress Track */}
      <div
        className="pb-track"
        style={{
          flex: 1,
          height: '8px',
          backgroundColor: '#ffffff',
          borderRadius: '9999px',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        {/* Progress Fill */}
        <div
          className="pb-fill"
          style={{
            height: '100%',
            width: `${percentValue}%`,
            backgroundColor: isDisabled ? '#cbd5e1' : '#0d9488',
            borderRadius: '9999px',
            transition: 'width 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
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
            color: isDisabled ? '#94a3b8' : '#334155',
            minWidth: '38px',
            textAlign: 'right',
          }}
        >
          {Procent}
        </span>
      )}
    </div>
  );
};

export default ProgressBar;
