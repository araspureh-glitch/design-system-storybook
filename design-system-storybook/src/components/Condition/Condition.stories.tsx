import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Condition } from './Condition';

const meta: Meta<typeof Condition> = {
  title: 'nav bar/Condition',
  component: Condition,
  parameters: {
    docs: {
      description: {
        component:
          'Status Condition lowercase label (good, optimal, excellent). Figma Node ID: 181:6753 | Page: nav bar.',
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
      options: ['good', 'optimal', 'excellent'],
      description: 'Figma active variant configuration',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Condition>;

export const Good: Story = {
  args: {
    Property_1: 'good',
  },
};

export const Optimal: Story = {
  args: {
    Property_1: 'optimal',
  },
};

export const Excellent: Story = {
  args: {
    Property_1: 'excellent',
  },
};

export const AllVariants: Story = {
  name: 'All Variants (Like Figma Canvas)',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '40px', background: '#1c1c1e', borderRadius: '16px', alignItems: 'flex-start' }}>
      <div>
        <div style={{ color: '#94a3b8', fontSize: '11px', marginBottom: '8px' }}>good</div>
        <Condition Property_1="good" />
      </div>
      <div>
        <div style={{ color: '#94a3b8', fontSize: '11px', marginBottom: '8px' }}>optimal</div>
        <Condition Property_1="optimal" />
      </div>
      <div>
        <div style={{ color: '#94a3b8', fontSize: '11px', marginBottom: '8px' }}>excellent</div>
        <Condition Property_1="excellent" />
      </div>
    </div>
  ),
};
