import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Nav } from './Nav';

const meta: Meta<typeof Nav> = {
  title: 'nav bar/Nav',
  component: Nav,
  parameters: {
    docs: {
      description: {
        component:
          'Individual Nav tab item supporting hover, blank (inactive), and selected states. Figma Node ID: 181:4800 | Page: nav bar.',
      },
    },
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#13171f' },
        { name: 'light', value: '#f8fafc' },
      ],
    },
    layout: 'centered',
  },
  argTypes: {
    Property_1: {
      control: { type: 'select' },
      options: ['hover', 'blank', 'selected'],
      description: 'Figma variant options',
    },
    label: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Nav>;

export const Blank: Story = {
  args: {
    Property_1: 'blank',
    label: 'Overview',
  },
};

export const HoverState: Story = {
  name: 'Hover State',
  args: {
    Property_1: 'hover',
    label: 'Overview',
  },
};

export const Selected: Story = {
  args: {
    Property_1: 'selected',
    label: 'Overview',
  },
};

export const InteractiveTabs: Story = {
  name: 'Interactive Tab List Showcase',
  render: () => {
    const [active, setActive] = useState<'Overview' | 'Efficiency' | 'Peak Analysis' | 'Trends'>('Overview');
    const tabs: ('Overview' | 'Efficiency' | 'Peak Analysis' | 'Trends')[] = [
      'Overview',
      'Efficiency',
      'Peak Analysis',
      'Trends',
    ];
    return (
      <div style={{ display: 'flex', gap: '8px', padding: '16px', background: '#e5f2f5', borderRadius: '9999px', alignItems: 'center' }}>
        {tabs.map((tab) => (
          <Nav
            key={tab}
            label={tab}
            Property_1={active === tab ? 'selected' : 'blank'}
            onClick={() => setActive(tab)}
          />
        ))}
      </div>
    );
  },
};
