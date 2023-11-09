import { StoreDecorator } from '@/shared/config/testing';

import ArticlesPage from './ArticlesPage';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'pages/ArticlesPage/ArticlesPage',
  component: ArticlesPage,
  tags: ['autodocs'],
} satisfies Meta<typeof ArticlesPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  decorators: [StoreDecorator({})],
};
