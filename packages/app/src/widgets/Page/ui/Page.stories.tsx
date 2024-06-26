import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from '~/shared/config/testing';
import { Page } from './Page';

const meta = {
  title: 'widgets/Page',
  component: Page,
  tags: ['autodocs'],
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: `Story Page`,
  },
  decorators: [StoreDecorator({})],
};
