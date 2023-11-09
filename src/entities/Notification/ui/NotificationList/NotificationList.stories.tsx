import { NotificationList } from './NotificationList';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'entities/Notification/NotificationList',
  component: NotificationList,
  tags: ['autodocs'],
} satisfies Meta<typeof NotificationList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  decorators: [],
};
