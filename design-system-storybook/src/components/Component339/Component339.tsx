import React from 'react';
import { PillBar } from '../PillBar/PillBar';
import './Component339.css';

export interface Component339Props {
  Property_1?: 'Frame 1171275922' | 'Frame 1171275929';
  className?: string;
  style?: React.CSSProperties;
}

/**
 * **Preserved Figma Layer Name**: `Component 339`
 * Page: `charts`
 * ID: `4:734`
 */
export const Component339: React.FC<Component339Props> = ({
  Property_1 = "Frame 1171275922",
  className = '',
  style = {},
  ...props
}) => {
  return (
    <div 
      className={`pill-component-wrapper ${className}`}
      style={style}
      data-figma-layer="Component 339"
      data-figma-page="charts"
      {...props}
    >
      <PillBar
        height={130}
        mwText="36MW"
        isActive={Property_1 === 'Frame 1171275929'}
      />
    </div>
  );
};

export default Component339;
