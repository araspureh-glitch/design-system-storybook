import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Icons } from '../components/Icons/Icons';
import { Lable } from '../components/Lable/Lable';
import { Notification } from '../components/Notification/Notification';
import { Filters } from '../components/Filters/Filters';
import { Zones } from '../components/Zones/Zones';
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

// Add keyframe animations dynamically
const AnimationStyles = () => (
  <style>{`
    /* ---- Entrance Keyframes ---- */
    @keyframes dash-fade-in {
      0% { opacity: 0; transform: translateY(18px); }
      100% { opacity: 1; transform: translateY(0); }
    }
    @keyframes dash-slide-in-left {
      0% { opacity: 0; transform: translateX(-32px); }
      100% { opacity: 1; transform: translateX(0); }
    }
    @keyframes dash-scale-in {
      0% { opacity: 0; transform: scale(0.92); }
      100% { opacity: 1; transform: scale(1); }
    }
    @keyframes pulse-glow {
      0%, 100% { box-shadow: 0 0 15px rgba(103, 183, 190, 0.2); }
      50% { box-shadow: 0 0 25px rgba(103, 183, 190, 0.4); }
    }

    /* ---- Sidebar ---- */
    .dash-sidebar {
      animation: dash-slide-in-left 0.6s cubic-bezier(0.4, 0, 0.2, 1) both;
    }

    /* ---- Header ---- */
    .dash-header {
      animation: dash-fade-in 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.15s both;
    }

    /* ---- KPI Cards ---- */
    .kpi-card {
      animation: dash-scale-in 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) both;
    }
    .kpi-card:nth-child(1) { animation-delay: 0.2s; }
    .kpi-card:nth-child(2) { animation-delay: 0.3s; }
    .kpi-card:nth-child(3) { animation-delay: 0.4s; }
    .kpi-card:hover {
      transform: translateY(-4px);
      border-color: rgba(103, 183, 190, 0.25) !important;
      background-color: #121a2b !important;
      box-shadow: 0 10px 20px rgba(0,0,0,0.2) !important;
    }

    /* ---- Chart Section Cards ---- */
    .dash-chart-card {
      animation: dash-fade-in 0.6s cubic-bezier(0.4, 0, 0.2, 1) both;
    }
    .dash-chart-card:nth-child(1) { animation-delay: 0.45s; }
    .dash-chart-card:nth-child(2) { animation-delay: 0.55s; }

    /* ---- Staggered bar delays (12 chart bars) ---- */
    .dash-chart-row > *:nth-child(1)  { --bar-delay: 0.50s; }
    .dash-chart-row > *:nth-child(2)  { --bar-delay: 0.56s; }
    .dash-chart-row > *:nth-child(3)  { --bar-delay: 0.62s; }
    .dash-chart-row > *:nth-child(4)  { --bar-delay: 0.68s; }
    .dash-chart-row > *:nth-child(5)  { --bar-delay: 0.74s; }
    .dash-chart-row > *:nth-child(6)  { --bar-delay: 0.80s; }
    .dash-chart-row > *:nth-child(7)  { --bar-delay: 0.86s; }
    .dash-chart-row > *:nth-child(8)  { --bar-delay: 0.92s; }
    .dash-chart-row > *:nth-child(9)  { --bar-delay: 0.98s; }
    .dash-chart-row > *:nth-child(10) { --bar-delay: 1.04s; }
    .dash-chart-row > *:nth-child(11) { --bar-delay: 1.10s; }
    .dash-chart-row > *:nth-child(12) { --bar-delay: 1.16s; }

    /* ---- Staggered pill delays (7 pill bars) ---- */
    .dash-pill-row > *:nth-child(1) { --bar-delay: 0.55s; }
    .dash-pill-row > *:nth-child(2) { --bar-delay: 0.63s; }
    .dash-pill-row > *:nth-child(3) { --bar-delay: 0.71s; }
    .dash-pill-row > *:nth-child(4) { --bar-delay: 0.79s; }
    .dash-pill-row > *:nth-child(5) { --bar-delay: 0.87s; }
    .dash-pill-row > *:nth-child(6) { --bar-delay: 0.95s; }
    .dash-pill-row > *:nth-child(7) { --bar-delay: 1.03s; }

    /* ---- Sidebar nav links ---- */
    .sidebar-link-btn {
      animation: dash-fade-in 0.4s cubic-bezier(0.4, 0, 0.2, 1) both;
    }
    .sidebar-link-btn:nth-child(1) { animation-delay: 0.10s; }
    .sidebar-link-btn:nth-child(2) { animation-delay: 0.16s; }
    .sidebar-link-btn:nth-child(3) { animation-delay: 0.22s; }
    .sidebar-link-btn:nth-child(4) { animation-delay: 0.28s; }
    .sidebar-link-btn:nth-child(5) { animation-delay: 0.34s; }
    .sidebar-link-btn:nth-child(6) { animation-delay: 0.40s; }
    .sidebar-link-btn:hover {
      background-color: rgba(255, 255, 255, 0.03) !important;
      color: #ffffff !important;
    }
  `}</style>
);

interface KPIState {
  val1: string;
  sub1: string;
  isUp1: boolean;
  val2: string;
  sub2: string;
  isUp2: boolean;
  val3: string;
  sub3: string;
  isUp3: boolean;
}

const DashboardComponent: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<'Dashboard' | 'Sustainability' | 'Energy Grid' | 'Smart Systems' | 'Reports' | 'Settings'>('Dashboard');
  const [activeZone, setActiveZone] = useState<'City Center' | 'Industrial' | 'Residential'>('City Center');

  // Subtle click sound using Web Audio API (no external files)
  const playClickSound = () => {
    try {
      const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(1200, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(800, ctx.currentTime + 0.03);
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.06);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.06);
    } catch { /* silently ignore if audio not supported */ }
  };

  const handleMenuClick = (name: string) => {
    playClickSound();
    setActiveMenu(name as any);
  };

  // Interactive dummy data linked to active view state
  const dataMap: Record<string, KPIState> = {
    'Dashboard': {
      val1: '452.8 MW', sub1: '+4.2% demand', isUp1: true,
      val2: '86.5%', sub2: '+12.8% capacity', isUp2: true,
      val3: '24.6 Tons', sub3: '-1.8% emissions', isUp3: false
    },
    'Sustainability': {
      val1: '310.2 MW', sub1: '-2.1% demand', isUp1: false,
      val2: '94.2%', sub2: '+16.5% green share', isUp2: true,
      val3: '38.4 Tons', sub3: '-4.6% emissions', isUp3: false
    },
    'Energy Grid': {
      val1: '520.4 MW', sub1: '+8.6% grid load', isUp1: true,
      val2: '79.1%', sub2: '-3.2% capacity', isUp2: false,
      val3: '18.9 Tons', sub3: '+0.4% emissions', isUp3: true
    },
    'Smart Systems': {
      val1: '412.5 MW', sub1: '-1.2% automation opt', isUp1: false,
      val2: '89.0%', sub2: '+2.1% smart share', isUp2: true,
      val3: '29.3 Tons', sub3: '-3.1% emissions', isUp3: false
    },
    'Reports': {
      val1: '435.0 MW', sub1: 'Monthly average', isUp1: true,
      val2: '85.6%', sub2: 'Solar index standard', isUp2: true,
      val3: '312 Tons', sub3: 'YTD Carbon Saved', isUp3: true
    },
    'Settings': {
      val1: 'Normal', sub1: 'Grid latency threshold', isUp1: false,
      val2: 'Online', sub2: '7 secure smart nodes', isUp2: true,
      val3: 'Automatic', sub3: 'Intelligent load balancer', isUp3: true
    }
  };

  const currentKPIs = dataMap[activeMenu] || dataMap['Dashboard'];

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
      backgroundColor: '#070a12',
      minHeight: '100vh',
      width: '100%',
      fontFamily: "'Inter', sans-serif",
      color: '#f8fafc',
      overflow: 'hidden'
    }}>
      <AnimationStyles />

      {/* Sidebar Navigation */}
      <aside className="dash-sidebar" style={{
        width: '265px',
        backgroundColor: '#0a0e1a',
        borderRight: '1px solid rgba(255, 255, 255, 0.04)',
        display: 'flex',
        flexDirection: 'column',
        padding: '24px 16px',
        boxSizing: 'border-box',
        justifyContent: 'space-between',
        flexShrink: 0
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {/* Logo Header */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', paddingLeft: '8px' }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="34" height="34">
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
              <span style={{ fontSize: '16.5px', fontWeight: 800, letterSpacing: '0.5px' }}>himu</span>
              <span style={{ fontSize: '11.5px', color: '#67b7be', fontWeight: 600, marginTop: '-2px' }}>Design System</span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {menuItems.map((item) => {
              const isActive = activeMenu === item.name;
              return (
                <button
                  key={item.name}
                  onClick={() => handleMenuClick(item.name)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '12px 16px',
                    borderRadius: '12px',
                    backgroundColor: isActive ? 'rgba(48, 132, 141, 0.15)' : 'transparent',
                    border: 'none',
                    color: isActive ? '#67b7be' : '#8e9aa8',
                    fontSize: '14.5px',
                    fontWeight: isActive ? 600 : 500,
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                    outline: 'none',
                  }}
                  className={`sidebar-link-btn ${isActive ? '' : 'hoverable'}`}
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
        <header className="dash-header" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexShrink: 0
        }}>
          <div>
            <h1 style={{ fontSize: '25px', fontWeight: 800, margin: 0, letterSpacing: '-0.3px' }}>GreenGrid Workspace</h1>
            <p style={{ fontSize: '13.5px', color: '#8e9aa8', margin: '4px 0 0 0' }}>Real-time sustainable energy infrastructure analytics</p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            {/* Zones Dropdown */}
            <Zones Property_1="Frame 602" />

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
          <div 
            className="kpi-card"
            onClick={playClickSound}
            style={{
              backgroundColor: '#0a0e1a',
              border: '1px solid rgba(255, 255, 255, 0.04)',
              borderRadius: '24px',
              padding: '24px',
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              cursor: 'pointer'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '13.5px', color: '#8e9aa8', fontWeight: 500 }}>Active Peak Load</span>
              <span style={{ fontSize: '11px', padding: '4px 8px', borderRadius: '8px', backgroundColor: 'rgba(103, 183, 190, 0.1)', color: '#67b7be', fontWeight: 700 }}>Telemetry</span>
            </div>
            <div style={{ fontSize: '32px', fontWeight: 800, color: '#ffffff' }}>{currentKPIs.val1}</div>
            <div style={{ fontSize: '12.5px', color: '#8e9aa8' }}>
              <span style={{ color: currentKPIs.isUp1 ? '#f87171' : '#4ade80', fontWeight: 600 }}>{currentKPIs.sub1}</span> this hour
            </div>
          </div>

          {/* Card 2 */}
          <div 
            className="kpi-card"
            onClick={playClickSound}
            style={{
              backgroundColor: '#0a0e1a',
              border: '1px solid rgba(255, 255, 255, 0.04)',
              borderRadius: '24px',
              padding: '24px',
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              cursor: 'pointer'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '13.5px', color: '#8e9aa8', fontWeight: 500 }}>Renewable capacity ratio</span>
              <span style={{ fontSize: '11px', padding: '4px 8px', borderRadius: '8px', backgroundColor: 'rgba(34, 197, 94, 0.1)', color: '#4ade80', fontWeight: 700 }}>Active</span>
            </div>
            <div style={{ fontSize: '32px', fontWeight: 800, color: '#ffffff' }}>{currentKPIs.val2}</div>
            <div style={{ fontSize: '12.5px', color: '#8e9aa8' }}>
              <span style={{ color: currentKPIs.isUp2 ? '#4ade80' : '#f87171', fontWeight: 600 }}>{currentKPIs.sub2}</span> grid intake
            </div>
          </div>

          {/* Card 3 */}
          <div 
            className="kpi-card"
            onClick={playClickSound}
            style={{
              backgroundColor: '#0a0e1a',
              border: '1px solid rgba(255, 255, 255, 0.04)',
              borderRadius: '24px',
              padding: '24px',
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              cursor: 'pointer'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '13.5px', color: '#8e9aa8', fontWeight: 500 }}>Carbon Offset Index</span>
              <span style={{ fontSize: '11px', padding: '4px 8px', borderRadius: '8px', backgroundColor: 'rgba(56, 189, 248, 0.1)', color: '#38bdf8', fontWeight: 700 }}>Computed</span>
            </div>
            <div style={{ fontSize: '32px', fontWeight: 800, color: '#ffffff' }}>{currentKPIs.val3}</div>
            <div style={{ fontSize: '12.5px', color: '#8e9aa8' }}>
              <span style={{ color: currentKPIs.isUp3 ? '#f87171' : '#4ade80', fontWeight: 600 }}>{currentKPIs.sub3}</span> system output
            </div>
          </div>
        </section>

        {/* Charts Row */}
        <section style={{
          display: 'grid',
          gridTemplateColumns: '1.75fr 1.25fr',
          gap: '24px',
          flexGrow: 1,
          minHeight: '380px'
        }}>
          {/* 12-Month Performance Chart Card */}
          <div className="dash-chart-card" style={{
            backgroundColor: '#0a0e1a',
            border: '1px solid rgba(255, 255, 255, 0.04)',
            borderRadius: '30px',
            padding: '28px 24px',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <span style={{ fontSize: '17px', fontWeight: 700 }}>Energy Load History ({activeMenu})</span>
                <p style={{ fontSize: '12.5px', color: '#8e9aa8', margin: '4px 0 0 0' }}>Hover columns to reveal specific metrics details</p>
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <span style={{ fontSize: '11.5px', background: 'rgba(255,255,255,0.04)', padding: '6px 12px', borderRadius: '8px', color: '#67b7be', fontWeight: 600 }}>
                  Active Segment
                </span>
              </div>
            </div>

            {/* Row of 12 month component bars */}
            <div className="dash-chart-row" style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              height: '280px',
              padding: '0 12px 16px 12px',
              borderBottom: '1px solid rgba(255,255,255,0.04)'
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
          <div className="dash-chart-card" style={{
            backgroundColor: '#0a0e1a',
            border: '1px solid rgba(255, 255, 255, 0.04)',
            borderRadius: '30px',
            padding: '28px 24px',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px'
          }}>
            <div>
              <span style={{ fontSize: '17px', fontWeight: 700 }}>Real-time Grid Share</span>
              <p style={{ fontSize: '12.5px', color: '#8e9aa8', margin: '4px 0 0 0' }}>Hover bars to activate status badges</p>
            </div>

            {/* Row of 7 pill bar components */}
            <div className="dash-pill-row" style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'flex-end',
              height: '240px',
              paddingBottom: '16px',
              borderBottom: '1px solid rgba(255,255,255,0.04)'
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
