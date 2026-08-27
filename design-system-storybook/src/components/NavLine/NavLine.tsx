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
        borderRadius: '18px',
        padding: '5px 6px',
        width: '100%',
        maxWidth: '1412px',
        height: '50px',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxSizing: 'border-box',
        gap: '69px',
        ...style
      }}
      data-figma-node="181:4808"
      data-property1={Property_1}
    >
      {tabs.map((tab) => {
        // Determine whether tab is active based on state or figma default variant override
        let stateVal: 'hover' | 'blank' | 'selected' = 'blank';
        if (activeTab === tab) {
          stateVal = activeTab === getInitialActiveTab() ? getInitialStateForTab(tab) : 'selected';
        }

        return (
          <Nav
            key={tab}
            label={tab}
            Property_1={stateVal}
            onClick={() => handleTabClick(tab)}
            style={{
              height: '39px',
              borderRadius: '13px',
              width: '308px',
            }}
          />
        );
      })}
    </div>
  );
};

export default NavLine;
