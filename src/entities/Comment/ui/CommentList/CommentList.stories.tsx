import { Meta, StoryObj } from '@storybook/react';

import { CommentList } from './CommentList';

const meta = {
  title: 'entities/CommentList',
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
