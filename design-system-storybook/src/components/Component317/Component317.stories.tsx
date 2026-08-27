import type { Meta, StoryObj } from '@storybook/react';
import { Component317 } from './Component317';

const meta: Meta<typeof Component317> = {
  title: "components/Component 317",
  component: Component317,
  parameters: {
    docs: {
      description: {
        component: "Figma Layer: Component 317 | Page: components | Node ID: 4:553 | Type: COMPONENT_SET",
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
type Story = StoryObj<typeof Component317>;

export const Primary: Story = {
  args: {
  "Property_1": "Frame 602"
},
};
