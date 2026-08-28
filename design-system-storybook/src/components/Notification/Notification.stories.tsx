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
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Notification>;

export const Default: Story = {
  args: {},
};
