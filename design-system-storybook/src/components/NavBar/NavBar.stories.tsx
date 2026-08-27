import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { NavBar } from './NavBar';

const meta: Meta<typeof NavBar> = {
  title: 'nav bar/NavBar',
  component: NavBar,
  parameters: {
    docs: {
      description: {
        component:
          'Sidebar Navigation Bar container wrapping NavComponent menu options. Figma Node ID: 181:4864 | Page: nav bar.',
      },
    },
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#1a1d24' },
        { name: 'light', value: '#f8fafc' },
      ],
    },
    layout: 'centered',
  },
  argTypes: {
    Property_1: {
      control: { type: 'select' },
      options: ['Dashboard', 'Sustainability', 'Energy Grid', 'reports', 'settings', 'log out'],
      description: 'Figma active variant option',
    },
  },
};

export default meta;
type Story = StoryObj<typeof NavBar>;

export const Default: Story = {
  args: {
    Property_1: 'Dashboard',
  },
};

export const Interactive: Story = {
  render: () => {
    const [active, setActive] = useState<'Dashboard' | 'Sustainability' | 'Energy Grid' | 'reports' | 'settings' | 'log out'>('Dashboard');
    return (
      <NavBar
        Property_1={active}
        onSelect={(key) => setActive(key)}
      />
    );
  },
};

export const AllVariants: Story = {
  name: 'All Variants (Like Figma Canvas)',
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px', padding: '40px', background: '#1c1c1e', borderRadius: '16px' }}>
      <div>
        <div style={{ color: '#94a3b8', fontSize: '11px', marginBottom: '8px' }}>Active: Dashboard</div>
        <NavBar Property_1="Dashboard" />
      </div>
      <div>
        <div style={{ color: '#94a3b8', fontSize: '11px', marginBottom: '8px' }}>Active: Sustainability</div>
        <NavBar Property_1="Sustainability" />
      </div>
      <div>
        <div style={{ color: '#94a3b8', fontSize: '11px', marginBottom: '8px' }}>Active: Energy Grid</div>
        <NavBar Property_1="Energy Grid" />
      </div>
      <div>
        <div style={{ color: '#94a3b8', fontSize: '11px', marginBottom: '8px' }}>Active: Reports</div>
        <NavBar Property_1="reports" />
      </div>
      <div>
        <div style={{ color: '#94a3b8', fontSize: '11px', marginBottom: '8px' }}>Active: Settings</div>
        <NavBar Property_1="settings" />
      </div>
      <div>
        <div style={{ color: '#94a3b8', fontSize: '11px', marginBottom: '8px' }}>Active: Log Out</div>
        <NavBar Property_1="log out" />
      </div>
    </div>
  ),
};
