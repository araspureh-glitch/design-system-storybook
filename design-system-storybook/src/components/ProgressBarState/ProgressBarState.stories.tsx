import type { Meta, StoryObj } from '@storybook/react';
import { ProgressBarState } from './ProgressBarState';

const meta: Meta<typeof ProgressBarState> = {
  title: "nav bar/Progress Bar state ",
  component: ProgressBarState,
  parameters: {
    docs: {
      description: {
        component: "Figma Layer: Progress Bar state  | Page: nav bar | Node ID: 181:6746 | Type: COMPONENT_SET",
      },
    },
  },
  argTypes: {
  "Property_1": {
    "control": {
      "type": "select"
    },
    "options": [
      "normal",
      "hover"
    ],
    "description": "Figma property: Property 1"
  }
},
};

export default meta;
type Story = StoryObj<typeof ProgressBarState>;

export const Primary: Story = {
  args: {
  "Property_1": "normal"
},
};
