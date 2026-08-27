import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { EfficiencyTrends } from './EfficiencyTrends';

const meta: Meta<typeof EfficiencyTrends> = {
  title: 'charts/EfficiencyTrends',
  component: EfficiencyTrends,
  parameters: {
    docs: {
      description: {
        component:
          'Efficiency Trends Bar — single bar column component. Figma Node ID: 180:4460 | Page: charts | Type: COMPONENT_SET. Features a 3-layer rounded stacked bar (light, medium, dark teal).',
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
      options: ['Default', 'hover'],
      description: 'Figma variant: Default or hover',
    },
    height: { control: { type: 'number', min: 100, max: 400, step: 10 } },
    width: { control: { type: 'number', min: 20, max: 100, step: 4 } },
    darkPercent: { control: { type: 'range', min: 0, max: 100, step: 5 } },
    midPercent: { control: { type: 'range', min: 0, max: 100, step: 5 } },
    lightPercent: { control: { type: 'range', min: 0, max: 100, step: 5 } },
  },
};

export default meta;
type Story = StoryObj<typeof EfficiencyTrends>;

export const Default: Story = {
  name: 'Default',
  args: {
    Property_1: 'Default',
    height: 220,
    width: 52,
  },
};

export const Hover: Story = {
  name: 'Hover',
  args: {
    Property_1: 'hover',
    height: 220,
    width: 52,
  },
};

export const SideBySide: Story = {
  name: 'Side by Side (Like Figma Canvas)',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', padding: '40px 20px', background: '#1c1c1e', borderRadius: '12px', alignItems: 'center' }}>
      <div>
        <div style={{ color: '#94a3b8', fontSize: '11px', marginBottom: '8px', textAlign: 'center' }}>Variant: Property 1=Default</div>
        <EfficiencyTrends Property_1="Default" />
      </div>
      <div>
        <div style={{ color: '#94a3b8', fontSize: '11px', marginBottom: '8px', textAlign: 'center' }}>Variant: Property 1=hover</div>
        <EfficiencyTrends Property_1="hover" />
      </div>
    </div>
  ),
};
