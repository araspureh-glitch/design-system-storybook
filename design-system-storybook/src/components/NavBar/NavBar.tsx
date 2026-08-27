import React from 'react';
import './NavBar.css';
import { NavComponent } from '../NavComponent/NavComponent';

export interface NavBarProps {
  /** Figma active variant selection */
  Property_1?: 'Dashboard' | 'Sustainability' | 'Energy Grid' | 'reports' | 'settings' | 'log out';
  className?: string;
  style?: React.CSSProperties;
  onSelect?: (active: 'Dashboard' | 'Sustainability' | 'Energy Grid' | 'reports' | 'settings' | 'log out') => void;
}

/**
 * **Sidebar Navigation Bar** component (Figma Node ID: 181:4864)
 * 
 * Organizes the vertical menu navigation layout using our individual NavComponent.
 */
export const NavBar: React.FC<NavBarProps> = ({
  Property_1 = 'Dashboard',
  className = '',
  style = {},
  onSelect,
}) => {
  // Normalize casing of variants to match input values
  const activeKey = Property_1;

  // Custom icon SVG render helpers to ensure sharp design system presentation
  const dashboardIcon = (isFilled: boolean) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={isFilled ? '#0d9488' : '#275259'} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'stroke 0.2s ease' }}>
      <path d="M 4 4 L 4 20 L 20 20" />
      <path d="M 6 15 L 10 10 L 14 13 L 19 6" />
    </svg>
  );

  const sustainabilityIcon = (isFilled: boolean) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={isFilled ? '#0d9488' : '#275259'} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'stroke 0.2s ease' }}>
      <circle cx="12" cy="12" r="9" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  );

  const energyGridIcon = (isFilled: boolean) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={isFilled ? '#0d9488' : '#275259'} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'stroke 0.2s ease' }}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M9 3v18" />
      <path d="M15 3v18" />
      <path d="M3 9h18" />
      <path d="M3 15h18" />
    </svg>
  );

  const reportsIcon = (isFilled: boolean) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={isFilled ? '#0d9488' : '#275259'} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'stroke 0.2s ease' }}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  );

  const settingsIcon = (isFilled: boolean) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={isFilled ? '#0d9488' : '#275259'} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'stroke 0.2s ease' }}>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );

  const logoutIcon = (isFilled: boolean) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={isFilled ? '#0d9488' : '#275259'} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'stroke 0.2s ease' }}>
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" y1="12" x2="9" y2="12" />
    </svg>
  );

  const menuItems: { key: 'Dashboard' | 'Sustainability' | 'Energy Grid' | 'reports' | 'settings' | 'log out'; label: string; icon: (isFilled: boolean) => React.ReactNode }[] = [
    { key: 'Dashboard', label: 'Dashboard', icon: dashboardIcon },
    { key: 'Sustainability', label: 'Sustainability', icon: sustainabilityIcon },
    { key: 'Energy Grid', label: 'Energy Grid', icon: energyGridIcon },
    { key: 'reports', label: 'Reports', icon: reportsIcon },
    { key: 'settings', label: 'Settings', icon: settingsIcon },
    { key: 'log out', label: 'Log Out', icon: logoutIcon },
  ];

  return (
    <div
      className={`sidebar-navbar-container ${className}`}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        padding: '24px 16px',
        backgroundColor: '#13171f', // dark sidebar canvas theme
        width: '352px',
        boxSizing: 'border-box',
        borderRadius: '24px',
        ...style
      }}
      data-figma-node="181:4864"
      data-property1={Property_1}
    >
      {menuItems.map((item) => {
        const isActive = activeKey === item.key;
        return (
          <NavComponent
            key={item.key}
            Property_1={isActive ? 'filled' : 'blank'}
            label={item.label}
            icon={item.icon}
            onClick={() => onSelect?.(item.key)}
          />
        );
      })}
    </div>
  );
};

export default NavBar;
