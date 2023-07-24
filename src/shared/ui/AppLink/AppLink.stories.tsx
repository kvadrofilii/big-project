import { AppLink } from './AppLink';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'shared/AppLink',
  component: AppLink,
  tags: ['autodocs'],
  args: {
    to: '/',
  },
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ContainedSmall: Story = {
  args: {
    children: 'Link',
    variant: 'contained',
    size: 'small',
  },
};

export const ContainedMedium: Story = {
  args: {
    children: 'Link',
    variant: 'contained',
  },
};

export const ContainedLarge: Story = {
  args: {
    children: 'Link',
    variant: 'contained',
    size: 'large',
  },
};

export const ContainedPrimary: Story = {
  args: {
    children: 'Link',
    variant: 'contained',
    color: 'primary',
  },
};

export const ContainedSecondary: Story = {
  args: {
    children: 'Link',
    variant: 'contained',
    color: 'secondary',
  },
};

export const TextPrimary: Story = {
  args: {
    children: 'Link',
    color: 'primary',
  },
};

export const TextSecondary: Story = {
  args: {
    children: 'Link',
    color: 'secondary',
  },
};

export const OutlinedPrimary: Story = {
  args: {
    children: 'Link',
    variant: 'outlined',
    color: 'primary',
  },
};

export const OutlinedSecondary: Story = {
  args: {
    children: 'Link',
    variant: 'outlined',
    color: 'secondary',
  },
};

export const ContainedFullWidth: Story = {
  args: {
    children: 'Link',
    variant: 'contained',
    fullWidth: true,
  },
};
