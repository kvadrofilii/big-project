import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/testing';
import { article } from '../../mocks/data';
import { ArticleDetails } from './ArticleDetails';

const meta = {
  title: 'entities/Article/ArticleDetails',
  component: ArticleDetails,
  tags: ['autodocs'],
} satisfies Meta<typeof ArticleDetails>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: '1',
  },
  decorators: [
    StoreDecorator({
      articleDetails: {
        data: article,
      },
    }),
  ],
};

export const Loading: Story = {
  args: {
    id: '1',
  },
  decorators: [
    StoreDecorator({
      articleDetails: {
        isLoading: true,
      },
    }),
  ],
};

export const Error: Story = {
  args: {
    id: '1',
  },
  decorators: [
    StoreDecorator({
      articleDetails: {
        error: 'error',
      },
    }),
  ],
};
