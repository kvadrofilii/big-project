import { Meta, StoryObj } from '@storybook/react';

import { <FTName|pascalcase> } from './<FTName|pascalcase>';

const meta = {
  title: '/<FTName|pascalcase>',
  component: <FTName|pascalcase>,
  tags: ['autodocs'],
} satisfies Meta<typeof <FTName|pascalcase>>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  decorators: [],
};
