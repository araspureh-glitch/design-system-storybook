import type { Meta, StoryObj } from '@storybook/react';
import { AlertsState } from './AlertsState';

const meta: Meta<typeof AlertsState> = {
  title: "cards/alerts state ",
  component: AlertsState,
  parameters: {
    docs: {
      description: {
        component: "Figma Layer: alerts state  | Page: cards | Node ID: 180:4677 | Type: COMPONENT_SET",
      },
    },
  },
  argTypes: {
  "Boolean_53_0": {
    "control": "boolean",
    "description": "Figma property: Boolean#53:0"
  },
  "Property_1": {
    "control": {
      "type": "select"
    },
    "options": [
      "safe",
      "alert",
      "warning",
      "b warning",
      "b alert",
      "b safe"
    ],
    "description": "Figma property: Property 1"
  }
},
};

export default meta;
type Story = StoryObj<typeof AlertsState>;

export const Primary: Story = {
  args: {
  "Boolean_53_0": true,
  "Property_1": "safe"
},
};
