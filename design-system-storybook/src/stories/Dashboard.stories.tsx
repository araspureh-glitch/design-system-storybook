import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Icons } from '../components/Icons/Icons';
import { Lable } from '../components/Lable/Lable';
import { Notification } from '../components/Notification/Notification';
import { Filters } from '../components/Filters/Filters';
import { Component315 } from '../components/Component315/Component315';
import { Component316 } from '../components/Component316/Component316';
import { Component317 } from '../components/Component317/Component317';
import { Component318 } from '../components/Component318/Component318';
import { Component319 } from '../components/Component319/Component319';
import { Component326 } from '../components/Component326/Component326';
import { Component327 } from '../components/Component327/Component327';
import { Component328 } from '../components/Component328/Component328';
import { Component329 } from '../components/Component329/Component329';
import { Component330 } from '../components/Component330/Component330';
import { Component331 } from '../components/Component331/Component331';
import { Component332 } from '../components/Component332/Component332';
import { Component337 } from '../components/Component337/Component337';
import { Component338 } from '../components/Component338/Component338';
import { Component339 } from '../components/Component339/Component339';
import { Component340 } from '../components/Component340/Component340';
import { Component341 } from '../components/Component341/Component341';
import { Component342 } from '../components/Component342/Component342';
import { Component343 } from '../components/Component343/Component343';

const DashboardComponent: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<'Dashboard' | 'Sustainability' | 'Energy Grid' | 'Smart Systems' | 'Reports' | 'Settings'>('Dashboard');

  const menuItems = [
    { name: 'Dashboard', icon: 'Dashboard' as const },
    { name: 'Sustainability', icon: 'Sustainability' as const },
    { name: 'Energy Grid', icon: 'Energy Grid' as const },
    { name: 'Smart Systems', icon: 'Smart Systems' as const },
    { name: 'Reports', icon: 'Reports' as const },
    { name: 'Settings', icon: 'Settings' as const },
  ];

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: '#090d16',
      minHeight: '100vh',
      width: '100%',
      fontFamily: "'Inter', sans-serif",
      color: '#f8fafc',
      overflow: 'hidden'
    }}>
      {/* Sidebar Navigation */}
      <aside style={{
        width: '260px',
        backgroundColor: '#0d131f',
        borderRight: '1px solid rgba(255, 255, 255, 0.05)',
        display: 'flex',
        flexDirection: 'column',
        padding: '24px 16px',
        boxSizing: 'border-box',
        justifyContent: 'space-between',
        flexShrink: 0
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {/* Logo Header */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingLeft: '8px' }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="32" height="32">
              <defs>
                <linearGradient id="sidebar-logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#67b7be" />
                  <stop offset="100%" stop-color="#30848d" />
                </linearGradient>
              </defs>
              <rect x="2" y="2" width="10" height="36" rx="3" fill="url(#sidebar-logo-grad)" />
              <rect x="28" y="2" width="10" height="36" rx="3" fill="url(#sidebar-logo-grad)" />
              <rect x="10" y="15" width="20" height="10" rx="2" fill="url(#sidebar-logo-grad)" />
            </svg>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '16px', fontWeight: 800, letterSpacing: '0.5px' }}>himu</span>
              <span style={{ fontSize: '12px', color: '#67b7be', fontWeight: 500, marginTop: '-2px' }}>Design System</span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {menuItems.map((item) => {
              const isActive = activeMenu === item.name;
              return (
                <button
                  key={item.name}
                  onClick={() => setActiveMenu(item.name as any)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '12px 16px',
                    borderRadius: '12px',
                    backgroundColor: isActive ? 'rgba(48, 132, 141, 0.15)' : 'transparent',
                    border: 'none',
                    color: isActive ? '#67b7be' : '#94a3b8',
                    fontSize: '14.5px',
                    fontWeight: isActive ? 600 : 500,
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'all 0.2s ease',
                    outline: 'none',
                  }}
                  className="sidebar-link-btn"
                >
                  <Icons Property_1={item.icon} style={{ width: '20px', height: '20px', fill: 'currentColor' }} />
                  <span>{item.name}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* User profile using Lable component */}
        <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)', paddingTop: '16px' }}>
          <Lable />
        </div>
      </aside>

      {/* Main Workspace Area */}
      <main style={{
        flexGrow: 1,
        padding: '32px 40px',
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
        boxSizing: 'border-box',
        overflowY: 'auto',
        height: '100vh'
      }}>
        {/* Top Header Row */}
        <header style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexShrink: 0
        }}>
          <div>
            <h1 style={{ fontSize: '24px', fontWeight: 800, margin: 0 }}>GreenGrid Workspace</h1>
            <p style={{ fontSize: '14px', color: '#94a3b8', margin: '4px 0 0 0' }}>Real-time sustainable energy infrastructure analytics</p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            {/* Search Input */}
            <div style={{ position: 'relative' }}>
              <input
                type="text"
                placeholder="Search metrics..."
                style={{
                  width: '220px',
                  height: '42px',
                  backgroundColor: '#0d131f',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '21px',
                  padding: '0 16px 0 38px',
                  fontSize: '13.5px',
                  color: '#ffffff',
                  outline: 'none',
                  transition: 'all 0.2s ease',
                  boxSizing: 'border-box'
                }}
              />
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#64748b"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ position: 'absolute', left: '16px', top: '14px' }}
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </div>

            {/* Filters component */}
            <Filters Property_1="Frame 1171275911" />

            {/* Notification component */}
            <Notification Property_1="NORMAL" />
          </div>
        </header>

        {/* KPI Cards Grid */}
        <section style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
          flexShrink: 0
        }}>
          {/* Card 1 */}
          <div style={{
            backgroundColor: '#0d131f',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            borderRadius: '24px',
            padding: '24px',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '14px', color: '#94a3b8', fontWeight: 500 }}>Energy Load Peak</span>
              <span style={{ fontSize: '12px', padding: '4px 8px', borderRadius: '8px', backgroundColor: 'rgba(239, 68, 68, 0.1)', color: '#f87171', fontWeight: 600 }}>High Demand</span>
            </div>
            <div style={{ fontSize: '32px', fontWeight: 800 }}>452.8 MW</div>
            <div style={{ fontSize: '13px', color: '#94a3b8' }}>
              <span style={{ color: '#f87171', fontWeight: 600 }}>+4.2%</span> compared to yesterday
            </div>
          </div>

          {/* Card 2 */}
          <div style={{
            backgroundColor: '#0d131f',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            borderRadius: '24px',
            padding: '24px',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '14px', color: '#94a3b8', fontWeight: 500 }}>Renewable Generation</span>
              <span style={{ fontSize: '12px', padding: '4px 8px', borderRadius: '8px', backgroundColor: 'rgba(34, 197, 94, 0.1)', color: '#4ade80', fontWeight: 600 }}>Active</span>
            </div>
            <div style={{ fontSize: '32px', fontWeight: 800 }}>86.5%</div>
            <div style={{ fontSize: '13px', color: '#94a3b8' }}>
              <span style={{ color: '#4ade80', fontWeight: 600 }}>+12.8%</span> wind/solar capacity surge
            </div>
          </div>

          {/* Card 3 */}
          <div style={{
            backgroundColor: '#0d131f',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            borderRadius: '24px',
            padding: '24px',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '14px', color: '#94a3b8', fontWeight: 500 }}>Carbon Savings Offset</span>
              <span style={{ fontSize: '12px', padding: '4px 8px', borderRadius: '8px', backgroundColor: 'rgba(56, 189, 248, 0.1)', color: '#38bdf8', fontWeight: 600 }}>Target Met</span>
            </div>
            <div style={{ fontSize: '32px', fontWeight: 800 }}>24.6 Tons</div>
            <div style={{ fontSize: '13px', color: '#94a3b8' }}>
              <span style={{ color: '#38bdf8', fontWeight: 600 }}>-1.8%</span> grid intensity index reduction
            </div>
          </div>
        </section>

        {/* Charts Row */}
        <section style={{
          display: 'grid',
          gridTemplateColumns: '1.8fr 1.2fr',
          gap: '24px',
          flexGrow: 1,
          minHeight: '380px'
        }}>
          {/* 12-Month Performance Chart Card */}
          <div style={{
            backgroundColor: '#0d131f',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            borderRadius: '30px',
            padding: '28px 24px',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <span style={{ fontSize: '17px', fontWeight: 700 }}>Energy Load History</span>
                <p style={{ fontSize: '12.5px', color: '#94a3b8', margin: '4px 0 0 0' }}>Hover columns to reveal specific metrics details</p>
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <span style={{ fontSize: '12px', background: 'rgba(255,255,255,0.05)', padding: '6px 12px', borderRadius: '8px' }}>12 Month View</span>
              </div>
            </div>

            {/* Row of 12 month component bars */}
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              height: '280px',
              padding: '0 12px 16px 12px',
              borderBottom: '1px solid rgba(255,255,255,0.05)'
            }}>
              <Component315 Property_1="Frame 601" />
              <Component316 Property_1="Frame 601" />
              <Component317 Property_1="Frame 601" />
              <Component318 Property_1="Frame 601" />
              <Component319 Property_1="Frame 601" />
              <Component326 Property_1="Frame 601" />
              <Component327 Property_1="Frame 601" />
              <Component328 Property_1="Frame 601" />
              <Component329 Property_1="Frame 601" />
              <Component330 Property_1="Frame 601" />
              <Component331 Property_1="Frame 601" />
              <Component332 Property_1="Frame 601" />
            </div>
          </div>

          {/* Active Generation Capacity Card */}
          <div style={{
            backgroundColor: '#0d131f',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            borderRadius: '30px',
            padding: '28px 24px',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px'
          }}>
            <div>
              <span style={{ fontSize: '17px', fontWeight: 700 }}>Real-time Grid Share</span>
              <p style={{ fontSize: '12.5px', color: '#94a3b8', margin: '4px 0 0 0' }}>Hover bars to activate status badges</p>
            </div>

            {/* Row of 7 pill bar components */}
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'flex-end',
              height: '240px',
              paddingBottom: '16px',
              borderBottom: '1px solid rgba(255,255,255,0.05)'
            }}>
              <Component337 Property_1="Frame 1171275920" />
              <Component338 Property_1="Frame 1171275921" />
              <Component339 Property_1="Frame 1171275922" />
              <Component340 Property_1="Frame 1171275923" />
              <Component341 Property_1="Frame 1171275924" />
              <Component342 Property_1="Frame 1171275925" />
              <Component343 Property_1="Frame 1171275926" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

const meta: Meta<typeof DashboardComponent> = {
  title: 'Pages/Dashboard Workspace',
  component: DashboardComponent,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Complete premium aesthetic and minimal sustainability dashboard combining all system tokens and components.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof DashboardComponent>;

export const PrimaryWorkspace: Story = {};
