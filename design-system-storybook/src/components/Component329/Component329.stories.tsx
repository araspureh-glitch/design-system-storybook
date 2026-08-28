import type { Meta, StoryObj } from '@storybook/react';
import { Component329 } from './Component329';

const meta: Meta<typeof Component329> = {
  title: "components/Component 329",
  component: Component329,
  parameters: {
    docs: {
      description: {
        component: "Figma Layer: Component 329 | ID: 4:505",
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
type Story = StoryObj<typeof Component329>;

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
