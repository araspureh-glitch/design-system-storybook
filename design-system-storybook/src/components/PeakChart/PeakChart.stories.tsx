import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { PeakChart } from './PeakChart';

const meta: Meta<typeof PeakChart> = {
  title: 'charts/PeakChart',
  component: PeakChart,
  parameters: {
    docs: {
      description: {
        component:
          'Peak Chart single vertical pill-shaped bar. Figma Node ID: 180:4421 | Page: charts.',
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
      options: ['1800d', '1600d', '1400d', '1200d', '1000d', '800d', '600d', '400d'],
      description: 'Figma variant options',
    },
    height: { control: { type: 'number', min: 100, max: 400, step: 10 } },
    width: { control: { type: 'number', min: 20, max: 100, step: 5 } },
  },
};

export default meta;
type Story = StoryObj<typeof PeakChart>;

export const Default: Story = {
  args: {
    Property_1: '1800d',
    height: 220,
    width: 52,
  },
};

export const Short: Story = {
  args: {
    Property_1: '400d',
    height: 220,
    width: 52,
  },
};

export const AllVariants: Story = {
  name: 'All Variants (Like Figma Canvas)',
  render: () => (
    <div style={{ display: 'flex', gap: '16px', padding: '40px', background: '#1c1c1e', borderRadius: '16px', alignItems: 'flex-end' }}>
      <PeakChart Property_1="1800d" />
      <PeakChart Property_1="1600d" />
      <PeakChart Property_1="1400d" />
      <PeakChart Property_1="1200d" />
      <PeakChart Property_1="1000d" />
      <PeakChart Property_1="800d" />
      <PeakChart Property_1="600d" />
      <PeakChart Property_1="400d" />
    </div>
  ),
};
