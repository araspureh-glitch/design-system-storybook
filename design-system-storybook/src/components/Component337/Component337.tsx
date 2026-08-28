import React from 'react';
import { PillBar } from '../PillBar/PillBar';
import './Component337.css';

export interface Component337Props {
  Property_1?: 'Frame 1171275920' | 'Frame 1171275927';
  className?: string;
  style?: React.CSSProperties;
}

/**
 * **Preserved Figma Layer Name**: `Component 337`
 * Page: `charts`
 * ID: `4:720`
 */
export const Component337: React.FC<Component337Props> = ({
  Property_1 = "Frame 1171275920",
  className = '',
  style = {},
  ...props
}) => {
  return (
    <div 
      className={`pill-component-wrapper ${className}`}
      style={style}
      data-figma-layer="Component 337"
      data-figma-page="charts"
      {...props}
    >
      <PillBar
        height={114}
        mwText="31MW"
        isActive={Property_1 === 'Frame 1171275927'}
      />
    </div>
  );
};

export default Component337;
