import { Meta, StoryObj } from '@storybook/react';

import { NotificationItem } from './NotificationItem';

const meta = {
  title: '/NotificationItem',
  component: NotificationItem,
  tags: ['autodocs'],
} satisfies Meta<typeof NotificationItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  decorators: [],
};
