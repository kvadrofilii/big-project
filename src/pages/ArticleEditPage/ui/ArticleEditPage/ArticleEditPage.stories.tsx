import { StoreDecorator } from '@/shared/config/testing';
import ArticleEditPage from './ArticleEditPage';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'pages/ArticleEditPage',
  component: ArticleEditPage,
  tags: ['autodocs'],
} satisfies Meta<typeof ArticleEditPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  decorators: [StoreDecorator({})],
};
