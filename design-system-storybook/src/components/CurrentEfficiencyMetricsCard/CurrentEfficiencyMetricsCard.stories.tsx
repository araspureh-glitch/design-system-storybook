import type { Meta, StoryObj } from '@storybook/react';
import { CurrentEfficiencyMetricsCard } from './CurrentEfficiencyMetricsCard';

const meta: Meta<typeof CurrentEfficiencyMetricsCard> = {
  title: "cards/ Current Efficiency Metrics card",
  component: CurrentEfficiencyMetricsCard,
  parameters: {
    docs: {
      description: {
        component: "Figma Layer:  Current Efficiency Metrics card | Page: cards | Node ID: 181:4697 | Type: INSTANCE",
      },
    },
  },
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof CurrentEfficiencyMetricsCard>;

export const Primary: Story = {
  args: {},
};
