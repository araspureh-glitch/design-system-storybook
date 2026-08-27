import type { Meta, StoryObj } from '@storybook/react';
import { Component329 } from './Component329';

const meta: Meta<typeof Component329> = {
  title: "components/Component 329",
  component: Component329,
  parameters: {
    docs: {
      description: {
        component: "Figma Layer: Component 329 | Page: components | Node ID: 4:505 | Type: COMPONENT_SET",
      },
    },
  },
  argTypes: {
  "Property_1": {
    "control": {
      "type": "select"
    },
    "options": [
      "Frame 601",
      "Frame 602"
    ],
    "description": "Figma property: Property 1"
  }
},
};

export default meta;
type Story = StoryObj<typeof Component329>;

export const Primary: Story = {
  args: {
  "Property_1": "Frame 602"
},
};
