import React from 'react';
import { PillBar } from '../PillBar/PillBar';
import './Component342.css';

export interface Component342Props {
  Property_1?: 'Frame 1171275925' | 'Frame 1171275932';
  className?: string;
  style?: React.CSSProperties;
}

/**
 * **Preserved Figma Layer Name**: `Component 342`
 * Page: `charts`
 * ID: `4:755`
 */
export const Component342: React.FC<Component342Props> = ({
  Property_1 = "Frame 1171275925",
  className = '',
  style = {},
  ...props
}) => {
  return (
    <div 
      className={`pill-component-wrapper ${className}`}
      style={style}
      data-figma-layer="Component 342"
      data-figma-page="charts"
      {...props}
    >
      <PillBar
        height={49}
        mwText="14MW"
        isActive={Property_1 === 'Frame 1171275932'}
      />
    </div>
  );
};

export default Component342;
