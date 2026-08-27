import type { Meta, StoryObj } from '@storybook/react';
import { EfficiencyTrendsLight } from './EfficiencyTrendsLight';

const meta: Meta<typeof EfficiencyTrendsLight> = {
  title: "charts/Efficiency trends light",
  component: EfficiencyTrendsLight,
  parameters: {
    docs: {
      description: {
        component: "Figma Layer: Efficiency trends light | Page: charts | Node ID: 180:4449 | Type: COMPONENT_SET",
      },
    },
  },
  argTypes: {
  "Property_1": {
    "control": {
      "type": "select"
    },
    "options": [
      "75",
      "80",
      "85",
      "90",
      "95"
    ],
    "description": "Figma property: Property 1"
  }
},
};

export default meta;
type Story = StoryObj<typeof EfficiencyTrendsLight>;

export const Primary: Story = {
  args: {
  "Property_1": "75"
},
};
