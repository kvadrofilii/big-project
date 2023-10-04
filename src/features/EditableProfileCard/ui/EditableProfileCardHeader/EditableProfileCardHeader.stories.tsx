import { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';

import { EditableProfileCardHeader } from './EditableProfileCardHeader';

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
