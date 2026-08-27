import type { Meta, StoryObj } from '@storybook/react';
import { Component330 } from './Component330';

const meta: Meta<typeof Component330> = {
  title: "components/Component 330",
  component: Component330,
  parameters: {
    docs: {
      description: {
        component: "Figma Layer: Component 330 | Page: components | Node ID: 4:517 | Type: COMPONENT_SET",
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
type Story = StoryObj<typeof Component330>;

export const Primary: Story = {
  args: {
  "Property_1": "Frame 602"
},
};
