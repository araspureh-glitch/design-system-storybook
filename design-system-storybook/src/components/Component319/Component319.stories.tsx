import type { Meta, StoryObj } from '@storybook/react';
import { Component319 } from './Component319';

const meta: Meta<typeof Component319> = {
  title: "components/Component 319",
  component: Component319,
  parameters: {
    docs: {
      description: {
        component: "Figma Layer: Component 319 | Page: components | Node ID: 4:577 | Type: COMPONENT_SET",
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
type Story = StoryObj<typeof Component319>;

export const Primary: Story = {
  args: {
  "Property_1": "Frame 602"
},
};
