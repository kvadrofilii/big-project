import { CommentCard } from './CommentCard';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'entities/Comment/CommentCard',
  component: CommentCard,
  tags: ['autodocs'],
} satisfies Meta<typeof CommentCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    comment: {
      id: '1',
      text: 'some comment',
      user: {
        id: '1',
        username: 'admin',
        avatar: 'https://forum.kaboom2.ru/data/avatars/o/70/70758.jpg',
      },
    },
  },
};

export const Loading: Story = {
  args: {
    comment: {
      id: '1',
      text: 'hello world',
      user: { id: '1', username: 'Vasya' },
    },
    isLoading: true,
  },
};
