import type { Meta, StoryObj } from '@storybook/react';
import type { Article } from '@/entities/Article/testing';
import { StoreDecorator } from '@/shared/config/testing';
import { ArticlesRecommendationsList } from './ArticlesRecommendationsList';

const article: Article = {
  id: '1',
  img: '',
  createdAt: '',
  views: 123,
  user: { id: '1', username: '123' },
  blocks: [],
  type: [],
  title: '123',
  subtitle: 'asfsa',
};

const meta = {
  title: 'features/ArticlesRecommendationsList',
  component: ArticlesRecommendationsList,
  tags: ['autodocs'],
} satisfies Meta<typeof ArticlesRecommendationsList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  decorators: [StoreDecorator({})],
  parameters: {
    mockData: [
      {
        url: `${__API__}/articles?_limit=3`,
        method: 'GET',
        status: 200,
        response: [
          { ...article, id: '1' },
          { ...article, id: '2' },
          { ...article, id: '3' },
        ],
      },
    ],
  },
};
