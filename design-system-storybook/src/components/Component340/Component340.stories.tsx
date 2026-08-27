import type { Meta, StoryObj } from '@storybook/react';
import { Component340 } from './Component340';

const meta: Meta<typeof Component340> = {
  title: "charts/Component 340",
  component: Component340,
  parameters: {
    docs: {
      description: {
        component: "Figma Layer: Component 340 | Page: charts | Node ID: 4:741 | Type: COMPONENT_SET",
      },
    },
  },
  argTypes: {
  "Property_1": {
    "control": {
      "type": "select"
    },
    "options": [
      "Frame 1171275923",
      "Frame 1171275930"
    ],
    "description": "Figma property: Property 1"
  }
},
};

export default meta;
type Story = StoryObj<typeof Component340>;

export const Primary: Story = {
  args: {
  "Property_1": "Frame 1171275923"
},
};
