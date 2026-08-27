import type { Meta, StoryObj } from '@storybook/react';
import { EfficiencyTrendsDark } from './EfficiencyTrendsDark';

const meta: Meta<typeof EfficiencyTrendsDark> = {
  title: "charts/Efficiency trends dark",
  component: EfficiencyTrendsDark,
  parameters: {
    docs: {
      description: {
        component: "Figma Layer: Efficiency trends dark | Page: charts | Node ID: 180:4438 | Type: COMPONENT_SET",
      },
    },
  },
  argTypes: {
  "Property_1": {
    "control": {
      "type": "select"
    },
    "options": [
      "75 d",
      "80 d",
      "85 d",
      "90d",
      "95 d"
    ],
    "description": "Figma property: Property 1"
  }
},
};

export default meta;
type Story = StoryObj<typeof EfficiencyTrendsDark>;

export const Primary: Story = {
  args: {
  "Property_1": "75 d"
},
};
