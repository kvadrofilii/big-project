import type { Meta, StoryObj } from '@storybook/react';
import IconChildren from '~/shared/assets/icons/bandaid.svg';
import IconArrow from '~/shared/assets/icons/caret-left-fill.svg';
import { IconButton } from './IconButton';

const meta = {
  title: 'shared/IconButton',
  component: IconButton,
  tags: ['autodocs'],
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ContainedSmall: Story = {
  args: {
    children: <IconArrow />,
    variant: 'contained',
    size: 'small',
  },
};

export const ContainedMedium: Story = {
  args: {
    children: <IconArrow />,
    variant: 'contained',
  },
};

export const ContainedLarge: Story = {
  args: {
    children: <IconArrow />,
    variant: 'contained',
    size: 'large',
  },
};

export const ContainedPrimary: Story = {
  args: {
    children: <IconChildren />,
    variant: 'contained',
    color: 'primary',
  },
};

export const ContainedSecondary: Story = {
  args: {
    children: <IconChildren />,
    variant: 'contained',
    color: 'secondary',
  },
};

export const ClearPrimary: Story = {
  args: {
    children: <IconChildren />,
    color: 'primary',
  },
};

export const ClearSecondary: Story = {
  args: {
    children: <IconChildren />,
    color: 'secondary',
  },
};

export const OutlinedPrimary: Story = {
  args: {
    children: <IconChildren />,
    variant: 'outlined',
    color: 'primary',
  },
};

export const OutlinedSecondary: Story = {
  args: {
    children: <IconChildren />,
    variant: 'outlined',
    color: 'secondary',
  },
};

export const ContainedDisabled: Story = {
  args: {
    children: <IconChildren />,
    variant: 'contained',
    color: 'primary',
    disabled: true,
  },
};

export const ClearDisabled: Story = {
  args: {
    children: <IconChildren />,
    color: 'primary',
    disabled: true,
  },
};

export const OutlinedDisabled: Story = {
  args: {
    children: <IconChildren />,
    variant: 'outlined',
    color: 'primary',
    disabled: true,
  },
};
