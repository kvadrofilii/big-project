import { StoreDecorator } from '@/shared/config/testing';

import { ArticlesRecommendationsList } from './ArticlesRecommendationsList';

import type { Meta, StoryObj } from '@storybook/react';

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
};
