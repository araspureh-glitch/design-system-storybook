import type { Meta, StoryObj } from '@storybook/react';
import { Component319 } from './Component319';

const meta: Meta<typeof Component319> = {
  title: "components/Component 319",
  component: Component319,
  parameters: {
    docs: {
      description: {
        component: "Figma Layer: Component 319 | ID: 4:577",
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
      "description": "Figma variant state property"
    }
  },
};

export default meta;
type Story = StoryObj<typeof Component319>;

export const Active: Story = {
  args: {
    "Property_1": "Frame 601"
  },
};

export const Inactive: Story = {
  args: {
    "Property_1": "Frame 602"
  },
};
