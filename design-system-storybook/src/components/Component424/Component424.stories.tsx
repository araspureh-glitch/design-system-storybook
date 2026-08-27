import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Component424 } from './Component424';

const meta: Meta<typeof Component424> = {
  title: 'charts/Component424',
  component: Component424,
  parameters: {
    docs: {
      description: {
        component:
          'Component 424 vertical bar chart elements supporting simple values (5-35) and active MW value variants with tooltips. Figma Node ID: 125:2420.',
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
        '5', '10', '15', '20', '25', '30', '35',
        '5MW', '10MW', '15MW', '20MW', '25MW', '30MW', '35MW'
      ],
      description: 'Figma variant option',
    },
    height: { control: { type: 'number', min: 100, max: 400, step: 10 } },
    width: { control: { type: 'number', min: 20, max: 100, step: 5 } },
  },
};

export default meta;
type Story = StoryObj<typeof Component424>;

export const Simple: Story = {
  args: {
    Property_1: '15',
    height: 280,
    width: 60,
  },
};

export const ActiveMW: Story = {
  args: {
    Property_1: '25MW',
    height: 280,
    width: 60,
  },
};

export const AllVariants: Story = {
  name: 'All Variants (Like Figma Canvas)',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', padding: '40px', background: '#1c1c1e', borderRadius: '16px' }}>
      {/* Simple Row */}
      <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-end' }}>
        <Component424 Property_1="5" />
        <Component424 Property_1="10" />
        <Component424 Property_1="15" />
        <Component424 Property_1="20" />
        <Component424 Property_1="25" />
        <Component424 Property_1="30" />
        <Component424 Property_1="35" />
      </div>

      {/* MW Value Row */}
      <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-end' }}>
        <Component424 Property_1="5MW" />
        <Component424 Property_1="10MW" />
        <Component424 Property_1="15MW" />
        <Component424 Property_1="20MW" />
        <Component424 Property_1="25MW" />
        <Component424 Property_1="30MW" />
        <Component424 Property_1="35MW" />
      </div>
    </div>
  ),
};
