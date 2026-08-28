import type { Meta, StoryObj } from '@storybook/react';
import { Notification } from './Notification';

const meta: Meta<typeof Notification> = {
  title: "components/Notification",
  component: Notification,
  parameters: {
    docs: {
      description: {
        component: "Figma Layer: Notification | Page: components | Node ID: 25:1215 | Type: COMPONENT_SET",
      },
    },
  },
  argTypes: {
    "Property_1": {
      "control": {
        "type": "select"
      },
      "options": [
        "NORMAL",
        "selected",
        "hover",
        "disable",
        "input"
      ],
      "description": "Figma variant state property"
    }
  },
};

export default meta;
type Story = StoryObj<typeof Notification>;

export const Normal: Story = {
  args: {
    "Property_1": "NORMAL"
  },
};

export const Selected: Story = {
  args: {
    "Property_1": "selected"
  },
};

export const Hover: Story = {
  args: {
    "Property_1": "hover"
  },
};

export const Disabled: Story = {
  args: {
    "Property_1": "disable"
  },
};

export const WithBadge: Story = {
  name: "With Badge (Input)",
  args: {
    "Property_1": "input"
  },
};
