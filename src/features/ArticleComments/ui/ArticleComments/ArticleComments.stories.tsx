import { StoreDecorator } from '@/shared/config/testing';

import ArticleComments from './ArticleComments';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'features/ArticleComments',
  component: ArticleComments,
  tags: ['autodocs'],
} satisfies Meta<typeof ArticleComments>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: '1',
  },
  decorators: [StoreDecorator({})],
};
