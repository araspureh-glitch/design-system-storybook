import type { Meta, StoryObj } from '@storybook/react';
import { Component343 } from './Component343';

const meta: Meta<typeof Component343> = {
  title: "components/Component 343",
  component: Component343,
  parameters: {
    docs: {
      description: {
        component: "Figma Layer: Component 343 | ID: 4:762",
      },
    },
  },
  argTypes: {
    "Property_1": {
      "control": {
        "type": "select"
      },
      "options": [
        "Frame 1171275926",
        "Frame 1171275933"
      ],
      "description": "Figma variant state property"
    }
  },
};

export default meta;
type Story = StoryObj<typeof Component343>;

export const Active: Story = {
  args: {
    "Property_1": "Frame 1171275933"
  },
};

export const Inactive: Story = {
  args: {
    "Property_1": "Frame 1171275926"
  },
};
