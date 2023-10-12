import { Meta, StoryObj } from '@storybook/react';

import { NotificationButton } from './NotificationButton';

const meta = {
  title: '/NotificationButton',
  component: NotificationButton,
  tags: ['autodocs'],
} satisfies Meta<typeof NotificationButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  decorators: [],
};
