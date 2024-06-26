import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from '~/shared/config/testing';
import { EditableProfileCard } from './EditableProfileCard';

const meta = {
  title: 'features/EditableProfileCard/EditableProfileCard',
  component: EditableProfileCard,
  tags: ['autodocs'],
} satisfies Meta<typeof EditableProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { id: '1' },
  decorators: [StoreDecorator({})],
};
