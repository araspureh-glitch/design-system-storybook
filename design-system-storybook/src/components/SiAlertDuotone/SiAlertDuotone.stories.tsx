import type { Meta, StoryObj } from '@storybook/react';
import { SiAlertDuotone } from './SiAlertDuotone';

const meta: Meta<typeof SiAlertDuotone> = {
  title: "cards/si:alert-duotone",
  component: SiAlertDuotone,
  parameters: {
    docs: {
      description: {
        component: "Figma Layer: si:alert-duotone | Page: cards | Node ID: 181:6679 | Type: COMPONENT_SET",
      },
    },
  },
  argTypes: {
    "Boolean_18_10": {
      "control": "boolean",
      "description": "Figma property: Boolean#18:10"
    },
    "Property_1": {
      "control": {
        "type": "select"
      },
      "options": [
        "yellow",
        "red"
      ],
      "description": "Figma property: Property 1"
    }
  },
};

export default meta;
type Story = StoryObj<typeof SiAlertDuotone>;

export const Red: Story = {
  args: {
    "Boolean_18_10": true,
    "Property_1": "red"
  },
};

export const Yellow: Story = {
  args: {
    "Boolean_18_10": true,
    "Property_1": "yellow"
  },
};
