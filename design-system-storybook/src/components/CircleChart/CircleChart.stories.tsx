import type { Meta, StoryObj } from '@storybook/react';
import { CircleChart } from './CircleChart';

const meta: Meta<typeof CircleChart> = {
  title: "charts/circle chart",
  component: CircleChart,
  parameters: {
    docs: {
      description: {
        component: "Figma Layer: circle chart | Page: charts | Node ID: 180:4469 | Type: COMPONENT_SET",
      },
    },
  },
  argTypes: {
  "Property_1": {
    "control": {
      "type": "select"
    },
    "options": [
      "Add A",
      "Add B",
      "Add C",
      "Add D",
      "Add E",
      "Add F",
      "View A detail",
      "View B detail",
      "View C detail",
      "View D detail",
      "View E detail",
      "View F detail"
    ],
    "description": "Figma property: Property 1"
  }
},
};

export default meta;
type Story = StoryObj<typeof CircleChart>;

export const Primary: Story = {
  args: {
  "Property_1": "Add A"
},
};
