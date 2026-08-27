import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { View } from './View';

const meta: Meta<typeof View> = {
  title: 'date and time/View',
  component: View,
  parameters: {
    docs: {
      description: {
        component:
          'Interactive view selection dropdown (Yearly/Monthly). Figma Node ID: 181:6775 | Page: date and time.',
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
      options: ['Frame 601', 'Frame 602', 'Frame 604'],
      description: 'Figma active variant configuration',
    },
  },
};

export default meta;
type Story = StoryObj<typeof View>;

export const ClosedLightPill: Story = {
  args: {
    Property_1: 'Frame 601',
  },
};

export const ClosedDarkPill: Story = {
  args: {
    Property_1: 'Frame 602',
  },
};

export const OpenDropdownCard: Story = {
  args: {
    Property_1: 'Frame 604',
  },
};

export const InteractiveShowcase: Story = {
  name: 'Interactive View Selector Showcase',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', minHeight: '200px', padding: '40px', background: '#1c1c1e', borderRadius: '16px', width: '300px', alignItems: 'center' }}>
      <div style={{ color: '#94a3b8', fontSize: '12px' }}>Click to select Yearly or Monthly:</div>
      <View Property_1="Frame 601" />
    </div>
  ),
};
