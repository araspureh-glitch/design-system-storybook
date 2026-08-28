import React from 'react';
import { PillBar } from '../PillBar/PillBar';
import './Component343.css';

export interface Component343Props {
  Property_1?: 'Frame 1171275926' | 'Frame 1171275933';
  className?: string;
  style?: React.CSSProperties;
}

/**
 * **Preserved Figma Layer Name**: `Component 343`
 * Page: `charts`
 * ID: `4:762`
 */
export const Component343: React.FC<Component343Props> = ({
  Property_1 = "Frame 1171275926",
  className = '',
  style = {},
  ...props
}) => {
  return (
    <div 
      className={`pill-component-wrapper ${className}`}
      style={style}
      data-figma-layer="Component 343"
      data-figma-page="charts"
      {...props}
    >
      <PillBar
        height={81}
        mwText="22MW"
        isActive={Property_1 === 'Frame 1171275933'}
      />
    </div>
  );
};

export default Component343;
