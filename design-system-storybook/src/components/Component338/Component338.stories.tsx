import type { Meta, StoryObj } from '@storybook/react';
import { Component338 } from './Component338';

const meta: Meta<typeof Component338> = {
  title: "components/Component 338",
  component: Component338,
  parameters: {
    docs: {
      description: {
        component: "Figma Layer: Component 338 | ID: 4:727",
      },
    },
  },
  argTypes: {
    "Property_1": {
      "control": {
        "type": "select"
      },
      "options": [
        "Frame 1171275921",
        "Frame 1171275928"
      ],
      "description": "Figma variant state property"
    }
  },
};

export default meta;
type Story = StoryObj<typeof Component338>;

export const Active: Story = {
  args: {
    "Property_1": "Frame 1171275928"
  },
};

export const Inactive: Story = {
  args: {
    "Property_1": "Frame 1171275921"
  },
};
