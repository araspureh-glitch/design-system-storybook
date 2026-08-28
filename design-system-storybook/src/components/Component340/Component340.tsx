import React from 'react';
import { PillBar } from '../PillBar/PillBar';
import './Component340.css';

export interface Component340Props {
  Property_1?: 'Frame 1171275923' | 'Frame 1171275930';
  className?: string;
  style?: React.CSSProperties;
}

/**
 * **Preserved Figma Layer Name**: `Component 340`
 * Page: `charts`
 * ID: `4:741`
 */
export const Component340: React.FC<Component340Props> = ({
  Property_1 = "Frame 1171275923",
  className = '',
  style = {},
  ...props
}) => {
  return (
    <div 
      className={`pill-component-wrapper ${className}`}
      style={style}
      data-figma-layer="Component 340"
      data-figma-page="charts"
      {...props}
    >
      <PillBar
        height={156}
        mwText="39MW"
        isActive={Property_1 === 'Frame 1171275930'}
      />
    </div>
  );
};

export default Component340;
