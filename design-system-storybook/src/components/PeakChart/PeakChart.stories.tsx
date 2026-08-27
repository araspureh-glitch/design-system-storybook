import type { Meta, StoryObj } from '@storybook/react';
import { PeakChart } from './PeakChart';

const meta: Meta<typeof PeakChart> = {
  title: "charts/Peak chart",
  component: PeakChart,
  parameters: {
    docs: {
      description: {
        component: "Figma Layer: Peak chart | Page: charts | Node ID: 180:4421 | Type: COMPONENT_SET",
      },
    },
  },
  argTypes: {
  "Property_1": {
    "control": {
      "type": "select"
    },
    "options": [
      "1800d",
      "1600d",
      "1400d",
      "1000d",
      "1200d",
      "600d",
      "400d",
      "800d"
    ],
    "description": "Figma property: Property 1"
  }
},
};

export default meta;
type Story = StoryObj<typeof PeakChart>;

export const Primary: Story = {
  args: {
  "Property_1": "1800d"
},
};
