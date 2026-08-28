import type { Meta, StoryObj } from '@storybook/react';
import { Component326 } from './Component326';

const meta: Meta<typeof Component326> = {
  title: "components/Component 326",
  component: Component326,
  parameters: {
    docs: {
      description: {
        component: "Figma Layer: Component 326 | ID: 4:469",
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
type Story = StoryObj<typeof Component326>;

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
