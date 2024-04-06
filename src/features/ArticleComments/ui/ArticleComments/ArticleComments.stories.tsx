import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from '~/shared/config/testing';
import ArticleComments from './ArticleComments';

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
