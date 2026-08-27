import type { Meta, StoryObj } from '@storybook/react';
import { ProgressBar } from './ProgressBar';

const meta: Meta<typeof ProgressBar> = {
  title: "nav bar/Progress Bar",
  component: ProgressBar,
  parameters: {
    docs: {
      description: {
        component: "Figma Layer: Progress Bar | Page: nav bar | Node ID: 181:6689 | Type: COMPONENT_SET",
      },
    },
  },
  argTypes: {
  "Procent_104_26": {
    "control": "boolean",
    "description": "Figma property: Procent#104:26"
  },
  "Position": {
    "control": {
      "type": "select"
    },
    "options": [
      "Right"
    ],
    "description": "Figma property: Position"
  },
  "State": {
    "control": {
      "type": "select"
    },
    "options": [
      "Active",
      "Disabled"
    ],
    "description": "Figma property: State"
  },
  "Procent": {
    "control": {
      "type": "select"
    },
    "options": [
      "0%",
      "20%",
      "40%",
      "60%",
      "80%",
      "100%"
    ],
    "description": "Figma property: Procent"
  }
},
};

export default meta;
type Story = StoryObj<typeof ProgressBar>;

export const Primary: Story = {
  args: {
  "Procent_104_26": true,
  "Position": "Right",
  "State": "Disabled",
  "Procent": "0%"
},
};
