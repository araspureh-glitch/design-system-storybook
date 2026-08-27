import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { CircleChart } from './CircleChart';

const meta: Meta<typeof CircleChart> = {
  title: 'charts/CircleChart',
  component: CircleChart,
  parameters: {
    docs: {
      description: {
        component:
          'Circle Chart Component Set supporting Add A-F variants and exploded detail views with tooltips. Figma Node ID: 180:4469 | Page: charts.',
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
      options: [
        'Add A',
        'Add B',
        'Add C',
        'Add D',
        'Add E',
        'Add F',
        'View A detail',
        'View B detail',
        'View C detail',
        'View D detail',
        'View E detail',
        'View F detail',
      ],
      description: 'Figma variant options',
    },
  },
};

export default meta;
type Story = StoryObj<typeof CircleChart>;

export const Default: Story = {
  args: {
    Property_1: 'Add F',
  },
};

export const ExplodedView: Story = {
  args: {
    Property_1: 'View A detail',
  },
};

export const AllVariants: Story = {
  name: 'All Variants (Like Figma Canvas)',
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '20px', padding: '40px', background: '#13171f', borderRadius: '12px' }}>
      <CircleChart Property_1="Add A" />
      <CircleChart Property_1="Add B" />
      <CircleChart Property_1="Add C" />
      <CircleChart Property_1="Add D" />
      <CircleChart Property_1="Add E" />
      <CircleChart Property_1="Add F" />
      
      <CircleChart Property_1="View A detail" />
      <CircleChart Property_1="View B detail" />
      <CircleChart Property_1="View C detail" />
      <CircleChart Property_1="View D detail" />
      <CircleChart Property_1="View E detail" />
      <CircleChart Property_1="View F detail" />
    </div>
  ),
};
