import type { Meta, StoryObj } from '@storybook/react';
import { Component326 } from './Component326';

const meta: Meta<typeof Component326> = {
  title: "components/Component 326",
  component: Component326,
  parameters: {
    docs: {
      description: {
        component: "Figma Layer: Component 326 | Page: components | Node ID: 4:469 | Type: COMPONENT_SET",
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
type Story = StoryObj<typeof Component326>;

export const Primary: Story = {
  args: {
  "Property_1": "Frame 602"
},
};
