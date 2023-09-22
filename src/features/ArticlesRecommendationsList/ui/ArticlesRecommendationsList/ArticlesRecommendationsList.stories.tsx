import { Meta, StoryObj } from '@storybook/react';

import { ArticlesRecommendationsList } from './ArticlesRecommendationsList';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';

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
