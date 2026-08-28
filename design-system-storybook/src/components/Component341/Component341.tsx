import React from 'react';
import { PillBar } from '../PillBar/PillBar';
import './Component341.css';

export interface Component341Props {
  Property_1?: 'Frame 1171275924' | 'Frame 1171275931';
  className?: string;
  style?: React.CSSProperties;
}

/**
 * **Preserved Figma Layer Name**: `Component 341`
 * Page: `charts`
 * ID: `4:748`
 */
export const Component341: React.FC<Component341Props> = ({
  Property_1 = "Frame 1171275924",
  className = '',
  style = {},
  ...props
}) => {
  return (
    <div 
      className={`pill-component-wrapper ${className}`}
      style={style}
      data-figma-layer="Component 341"
      data-figma-page="charts"
      {...props}
    >
      <PillBar
        height={65}
        mwText="18MW"
        isActive={Property_1 === 'Frame 1171275931'}
      />
    </div>
  );
};

export default Component341;
