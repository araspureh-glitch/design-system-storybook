import type { Meta, StoryObj } from '@storybook/react';
import { RadioT } from './RadioT';

const meta: Meta<typeof RadioT> = {
  title: "components/radio  t",
  component: RadioT,
  parameters: {
    docs: {
      description: {
        component: "Figma Layer: radio  t | Page: components | Node ID: 23:2285 | Type: COMPONENT_SET",
      },
    },
  },
  argTypes: {
  "State": {
    "control": {
      "type": "select"
    },
    "options": [
      "Default",
      "Hover",
      "Selected",
      "Disabled"
    ],
    "description": "Figma property: State"
  }
},
};

export default meta;
type Story = StoryObj<typeof RadioT>;

export const Primary: Story = {
  args: {
  "State": "Default"
},
};
