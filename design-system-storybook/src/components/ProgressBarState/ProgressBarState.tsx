import React from 'react';
import './ProgressBarState.css';
import { ProgressBar } from '../ProgressBar/ProgressBar';

export interface ProgressBarStateProps {
  /** Figma variant property: 'normal' | 'hover' */
  Property_1?: 'normal' | 'hover';
  /** Text label displayed above the bar (e.g. 'HVAC') */
  label?: string;
  /** Progress percentage: '0%' | '20%' | '40%' | '60%' | '80%' | '100%' */
  progress?: '0%' | '20%' | '40%' | '60%' | '80%' | '100%';
  className?: string;
  style?: React.CSSProperties;
}

/**
 * **Progress Bar state** component (Figma Node: 181:6746)
 * 
 * Displays a group containing a text label (e.g. "HVAC") and a progress bar.
 * In the 'hover' state, the label text color transitions to a bright teal.
 */
export const ProgressBarState: React.FC<ProgressBarStateProps> = ({
  Property_1 = 'normal',
  label = 'HVAC',
  progress = '0%',
  className = '',
  style = {},
}) => {
  const isHover = Property_1 === 'hover';

  return (
    <div
      className={`pb-state-wrap ${isHover ? 'pb-state-wrap--hover' : ''} ${className}`}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        width: '100%',
        maxWidth: '520px',
        fontFamily: 'Inter, sans-serif',
        ...style
      }}
      data-figma-node="181:6746"
      data-property1={Property_1}
    >
      {/* Label */}
      <span
        className="pb-state-label"
        style={{
          fontSize: '20px',
          fontWeight: '500',
          color: isHover ? '#0d9488' : '#000000',
          transition: 'color 0.2s ease',
        }}
      >
        {label}
      </span>

      {/* Progress Bar Component */}
      <ProgressBar
        Procent={progress}
        State="Active"
        Procent_104_26={true}
      />
    </div>
  );
};

export default ProgressBarState;
