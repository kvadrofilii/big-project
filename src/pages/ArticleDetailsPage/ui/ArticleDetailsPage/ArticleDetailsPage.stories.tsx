import { Meta, StoryObj } from '@storybook/react';

import { article } from '@/entities/Article/testing';
import { StoreDecorator } from '@/shared/config/testing';

import ArticleDetailsPage from './ArticleDetailsPage';

const meta = {
  title: 'pages/ArticleDetailsPage/ArticleDetailsPage',
  component: ArticleDetailsPage,
  parameters: {
    reactRouter: {
      routePath: '/articles/:id',
      routeParams: { id: '1' },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ArticleDetailsPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      articleDetails: {
        data: article,
      },
    }),
  ],
};
