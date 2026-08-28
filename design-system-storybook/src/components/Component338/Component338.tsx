import React from 'react';
import { PillBar } from '../PillBar/PillBar';
import './Component338.css';

export interface Component338Props {
  Property_1?: 'Frame 1171275921' | 'Frame 1171275928';
  className?: string;
  style?: React.CSSProperties;
}

/**
 * **Preserved Figma Layer Name**: `Component 338`
 * Page: `charts`
 * ID: `4:727`
 */
export const Component338: React.FC<Component338Props> = ({
  Property_1 = "Frame 1171275921",
  className = '',
  style = {},
  ...props
}) => {
  return (
    <div 
      className={`pill-component-wrapper ${className}`}
      style={style}
      data-figma-layer="Component 338"
      data-figma-page="charts"
      {...props}
    >
      <PillBar
        height={81}
        mwText="22MW"
        isActive={Property_1 === 'Frame 1171275928'}
      />
    </div>
  );
};

export default Component338;
