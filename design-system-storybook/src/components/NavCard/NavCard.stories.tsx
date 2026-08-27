import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { NavCard } from './NavCard';

const meta: Meta<typeof NavCard> = {
  title: 'nav bar/NavCard',
  component: NavCard,
  parameters: {
    docs: {
      description: {
        component:
          'Nav Card representing System Usage Analysis header combined with an interactive segmented tab control. Figma Instance ID: 181:4807 | Page: nav bar.',
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
    title: { control: 'text' },
    timeframe: { control: 'text' },
    description: { control: 'text' },
    totalLabel: { control: 'text' },
    totalValue: { control: 'text' },
    defaultActiveTab: {
      control: { type: 'select' },
      options: ['Overview', 'Efficiency', 'Peak Analysis', 'Trends'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof NavCard>;

export const Default: Story = {
  args: {
    title: 'System Usage Analysis',
    timeframe: '(Month)',
    description: 'Detailed breakdown of energy consumption across city system',
    totalLabel: 'Total Consumption',
    totalValue: '4,990 MW',
    defaultActiveTab: 'Efficiency',
  },
};

export const OverviewSelected: Story = {
  args: {
    ...Default.args,
    defaultActiveTab: 'Overview',
  },
};

export const PeakAnalysisSelected: Story = {
  args: {
    ...Default.args,
    defaultActiveTab: 'Peak Analysis',
  },
};
