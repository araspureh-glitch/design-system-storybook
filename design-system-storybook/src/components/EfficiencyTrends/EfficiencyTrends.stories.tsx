import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { EfficiencyTrends } from './EfficiencyTrends';

const meta: Meta<typeof EfficiencyTrends> = {
  title: 'charts/Efficiency trends',
  component: EfficiencyTrends,
  parameters: {
    docs: {
      description: {
        component:
          'Efficiency Trends grouped bar chart. Figma Node ID: 180:4420 | Page: charts | Type: COMPONENT_SET. Shows 2025 (light teal) vs 2024 (dark teal) efficiency data by month.',
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#f8fafc' },
        { name: 'dark', value: '#13171f' },
      ],
    },
    layout: 'centered',
  },
  argTypes: {
    Property_1: {
      control: { type: 'select' },
      options: ['Default', 'hover'],
      description: 'Figma variant: Default or hover state',
    },
    yMin: { control: { type: 'number', min: 0, max: 100, step: 5 } },
    yMax: { control: { type: 'number', min: 0, max: 100, step: 5 } },
    yStep: { control: { type: 'number', min: 1, max: 20, step: 1 } },
    title: { control: 'text' },
    label2025: { control: 'text' },
    label2024: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof EfficiencyTrends>;

export const Default: Story = {
  name: 'Default',
  args: {
    Property_1: 'Default',
    title: 'Efficiency trends',
    yMin: 75,
    yMax: 95,
    yStep: 5,
    label2025: '2025',
    label2024: '2024',
  },
};

export const HoverState: Story = {
  name: 'Hover State',
  args: {
    ...Default.args,
    Property_1: 'hover',
  },
};

export const CustomData: Story = {
  name: 'Custom Data',
  args: {
    ...Default.args,
    data: [
      { month: 'Jan', value2025: 92, value2024: 80 },
      { month: 'Feb', value2025: 88, value2024: 76 },
      { month: 'Mar', value2025: 94, value2024: 83 },
      { month: 'Apr', value2025: 90, value2024: 79 },
      { month: 'May', value2025: 95, value2024: 85 },
      { month: 'Jun', value2025: 91, value2024: 82 },
      { month: 'Jul', value2025: 89, value2024: 78 },
    ],
  },
};

export const AllVariants: Story = {
  name: 'All Variants',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '24px', background: '#f8fafc', borderRadius: '16px', width: '680px' }}>
      <div>
        <div style={{ fontSize: '12px', fontWeight: 600, color: '#94a3b8', marginBottom: '8px' }}>Default</div>
        <EfficiencyTrends Property_1="Default" />
      </div>
      <div>
        <div style={{ fontSize: '12px', fontWeight: 600, color: '#94a3b8', marginBottom: '8px' }}>Hover</div>
        <EfficiencyTrends Property_1="hover" />
      </div>
    </div>
  ),
};
