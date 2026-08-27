import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Component336 } from './Component336';

const meta: Meta<typeof Component336> = {
  title: 'cards/Component 336',
  component: Component336,
  parameters: {
    docs: {
      description: {
        component: 'Figma Layer: Component 336 | Page: cards | Node ID: 4:639 | Type: COMPONENT_SET. Displays Renewable vs Non-Renewable Energy usage statistics with interactive donut chart and elevated item states.',
      },
    },
  },
  argTypes: {
    Property_1: {
      control: {
        type: 'select',
      },
      options: ['Frame 601', 'Frame 602', 'Frame 603'],
      description: 'Figma property: Property 1 (Frame 601 = Default, Frame 603 = Renewable active, Frame 602 = Non-Renewable active)',
    },
    renewablePercent: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Renewable Energy percentage',
    },
    nonRenewablePercent: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Non-Renewable Energy percentage',
    },
    renewableValue: { control: 'text' },
    nonRenewableValue: { control: 'text' },
    centerValue: { control: 'text' },
    centerMonth: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Component336>;

/** Default card state (Frame 601) */
export const Frame601: Story = {
  name: 'Frame 601 (Default)',
  args: {
    Property_1: 'Frame 601',
    title: 'Renewable vs Non Renewable Energy',
    renewableValue: '3,120 kWh',
    renewablePercent: 25,
    nonRenewableValue: '9,330 kWh',
    nonRenewablePercent: 75,
    centerValue: '100',
    centerMonth: 'November',
  },
};

/** Renewable Energy row active (Frame 603) */
export const Frame603: Story = {
  name: 'Frame 603 (Renewable Hover/Active)',
  args: {
    ...Frame601.args,
    Property_1: 'Frame 603',
  },
};

/** Non-Renewable Energy row active (Frame 602) */
export const Frame602: Story = {
  name: 'Frame 602 (Non Renewable Hover/Active)',
  args: {
    ...Frame601.args,
    Property_1: 'Frame 602',
  },
};

/** All Figma variants showcased together as seen in the Figma canvas */
export const AllVariants: Story = {
  name: 'All Figma Variants Canvas',
  render: (args) => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px', padding: '32px', background: '#1e1e1e', borderRadius: '16px' }}>
      <div>
        <div style={{ color: '#94a3b8', fontSize: '12px', fontWeight: 600, marginBottom: '8px' }}>Frame 601 (Default)</div>
        <Component336 {...args} Property_1="Frame 601" />
      </div>
      <div>
        <div style={{ color: '#94a3b8', fontSize: '12px', fontWeight: 600, marginBottom: '8px' }}>Frame 603 (Renewable Active)</div>
        <Component336 {...args} Property_1="Frame 603" />
      </div>
      <div>
        <div style={{ color: '#94a3b8', fontSize: '12px', fontWeight: 600, marginBottom: '8px' }}>Frame 602 (Non-Renewable Active)</div>
        <Component336 {...args} Property_1="Frame 602" />
      </div>
    </div>
  ),
  args: {
    ...Frame601.args,
  },
};
