import React, { useState, useEffect } from 'react';
import './NavLine.css';
import { Nav } from '../Nav/Nav';

export interface NavLineProps {
  /** Figma variant property: 'Default' | 'Variant2' | 'Variant3' */
  Property_1?: 'Default' | 'Variant2' | 'Variant3';
  className?: string;
  style?: React.CSSProperties;
  onTabChange?: (tab: 'Overview' | 'Efficiency' | 'Peak Analysis' | 'Trends') => void;
}

/**
 * **Nav Line** component (Figma Node: 181:4808)
 * 
 * Segmented horizontal tab list container wrapping the Nav component items.
 * Supports static Figma states as well as fully dynamic interactive state.
 */
export const NavLine: React.FC<NavLineProps> = ({
  Property_1 = 'Default',
  className = '',
  style = {},
  onTabChange,
}) => {
  // Map static Figma variants to active state configuration
  // 'Default' -> 'Efficiency' has hover style
  // 'Variant3' -> 'Efficiency' has selected style
  // 'Variant2' -> All blank
  const getInitialActiveTab = () => {
    if (Property_1 === 'Default') return 'Efficiency';
    if (Property_1 === 'Variant3') return 'Efficiency';
    return 'Overview';
  };

  const getInitialStateForTab = (tab: string) => {
    if (tab === 'Efficiency') {
      if (Property_1 === 'Default') return 'hover';
      if (Property_1 === 'Variant3') return 'selected';
    }
    return 'blank';
  };

  const [activeTab, setActiveTab] = useState<'Overview' | 'Efficiency' | 'Peak Analysis' | 'Trends'>(getInitialActiveTab);

  // Sync state if Figma variants change in Storybook controls
  useEffect(() => {
    setActiveTab(getInitialActiveTab());
  }, [Property_1]);

  const tabs: ('Overview' | 'Efficiency' | 'Peak Analysis' | 'Trends')[] = [
    'Overview',
    'Efficiency',
    'Peak Analysis',
    'Trends',
  ];

  const handleTabClick = (tab: 'Overview' | 'Efficiency' | 'Peak Analysis' | 'Trends') => {
    setActiveTab(tab);
    onTabChange?.(tab);
  };

  return (
    <div
      className={`nav-line-container ${className}`}
      style={{
        display: 'inline-flex',
        backgroundColor: '#e5f2f5', // light mint/cyan background track
        borderRadius: '9999px',
        padding: '4px',
        height: '48px',
        alignItems: 'center',
        boxSizing: 'border-box',
        gap: '4px',
        ...style
      }}
      data-figma-node="181:4808"
      data-property1={Property_1}
    >
      {tabs.map((tab) => {
        // Determine whether tab is active based on state or figma default variant override
        let stateVal: 'hover' | 'blank' | 'selected' = 'blank';
        if (activeTab === tab) {
          // If interactive click occurred, use selected style. Else follow initial state configuration
          stateVal = activeTab === getInitialActiveTab() ? getInitialStateForTab(tab) : 'selected';
        }

        return (
          <Nav
            key={tab}
            label={tab}
            Property_1={stateVal}
            onClick={() => handleTabClick(tab)}
          />
        );
      })}
    </div>
  );
};

export default NavLine;
