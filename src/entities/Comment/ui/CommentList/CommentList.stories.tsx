import { CommentList } from './CommentList';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'entities/Comment/CommentList',
  component: CommentList,
  tags: ['autodocs'],
} satisfies Meta<typeof CommentList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    comments: [
      {
        id: '1',
        text: 'hello world',
        user: { id: '1', username: 'Vasya' },
      },
      {
        id: '2',
        text: 'Comment 2',
        user: { id: '1', username: 'Petya' },
      },
    ],
  },
};

export const Loading: Story = {
  args: {
    comments: [],
    isLoading: true,
  },
};
