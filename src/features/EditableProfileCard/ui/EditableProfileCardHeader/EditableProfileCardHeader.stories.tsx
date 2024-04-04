import { StoreDecorator } from '@/shared/config/testing';
import { EditableProfileCardHeader } from './EditableProfileCardHeader';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'features/EditableProfileCard/EditableProfileCardHeader',
  component: EditableProfileCardHeader,
  tags: ['autodocs'],
} satisfies Meta<typeof EditableProfileCardHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  decorators: [StoreDecorator({})],
};
