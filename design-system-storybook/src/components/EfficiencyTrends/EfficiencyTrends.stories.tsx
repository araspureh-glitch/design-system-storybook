import type { Meta, StoryObj } from '@storybook/react';
import { EfficiencyTrends } from './EfficiencyTrends';

const meta: Meta<typeof EfficiencyTrends> = {
  title: "charts/Efficiency trends",
  component: EfficiencyTrends,
  parameters: {
    docs: {
      description: {
        component: "Figma Layer: Efficiency trends | Page: charts | Node ID: 180:4460 | Type: COMPONENT_SET",
      },
    },
  },
  argTypes: {
  "Property_1": {
    "control": {
      "type": "select"
    },
    "options": [
      "Default",
      "hover"
    ],
    "description": "Figma property: Property 1"
  }
},
};

export default meta;
type Story = StoryObj<typeof EfficiencyTrends>;

export const Primary: Story = {
  args: {
  "Property_1": "Default"
},
};
