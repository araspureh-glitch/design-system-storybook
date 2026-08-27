import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { CurrentEfficiencyMetricsCard } from './CurrentEfficiencyMetricsCard';

const meta: Meta<typeof CurrentEfficiencyMetricsCard> = {
  title: 'cards/CurrentEfficiencyMetricsCard',
  component: CurrentEfficiencyMetricsCard,
  parameters: {
    docs: {
      description: {
        component:
          'Dashboard card displaying Current Efficiency Metrics (HVAC, Street Lighting, etc.) using custom progress bars. Figma Node ID: 181:4697 | Page: cards.',
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
};

export default meta;
type Story = StoryObj<typeof CurrentEfficiencyMetricsCard>;

export const Default: Story = {};
