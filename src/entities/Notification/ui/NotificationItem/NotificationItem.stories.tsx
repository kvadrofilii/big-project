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
  args: {
    item: {
      id: '1',
      title: 'Notification 1',
      description: 'Add to event',
      href: 'http://localhost:3000/admin',
    },
  },
  decorators: [],
};
