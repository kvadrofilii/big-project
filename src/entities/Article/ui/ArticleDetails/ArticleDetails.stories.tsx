import { StoreDecorator } from '@/shared/config/testing';
import { ArticleDetails } from './ArticleDetails';
import { article } from '../../mocks/data';
import type { Meta, StoryObj } from '@storybook/react';

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
