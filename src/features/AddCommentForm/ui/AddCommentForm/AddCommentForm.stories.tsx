import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';

import AddCommentForm from './AddCommentForm';

const meta = {
  title: 'features/AddCommentForm',
  component: AddCommentForm,
  tags: ['autodocs'],
} satisfies Meta<typeof AddCommentForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onSendComment: action('onSendComment'),
  },
  decorators: [StoreDecorator({})],
};
