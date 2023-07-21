import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

export default {
  title: 'shared/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const ContainedSmall = Template.bind({});
ContainedSmall.args = {
  children: 'Button',
  variant: 'contained',
  size: 'small',
};

export const ContainedMedium = Template.bind({});
ContainedMedium.args = {
  children: 'Button',
  variant: 'contained',
};

export const ContainedLarge = Template.bind({});
ContainedLarge.args = {
  children: 'Button',
  variant: 'contained',
  size: 'large',
};

export const ContainedPrimary = Template.bind({});
ContainedPrimary.args = {
  children: 'Button',
  variant: 'contained',
  color: 'primary',
};

export const ContainedSecondary = Template.bind({});
ContainedSecondary.args = {
  children: 'Button',
  variant: 'contained',
  color: 'secondary',
};

export const TextPrimary = Template.bind({});
TextPrimary.args = {
  children: 'Button',
  color: 'primary',
};

export const TextSecondary = Template.bind({});
TextSecondary.args = {
  children: 'Button',
  color: 'secondary',
};

export const OutlinedPrimary = Template.bind({});
OutlinedPrimary.args = {
  children: 'Button',
  variant: 'outlined',
  color: 'primary',
};

export const OutlinedSecondary = Template.bind({});
OutlinedSecondary.args = {
  children: 'Button',
  variant: 'outlined',
  color: 'secondary',
};

export const ContainedFullWidth = Template.bind({});
ContainedFullWidth.args = {
  children: 'Button',
  variant: 'contained',
  fullWidth: true,
};

export const ContainedDisabled = Template.bind({});
ContainedDisabled.args = {
  children: 'Button',
  variant: 'contained',
  color: 'primary',
  disabled: true,
};

export const TextDisabled = Template.bind({});
TextDisabled.args = {
  children: 'Button',
  variant: 'text',
  color: 'primary',
  disabled: true,
};

export const OutlinedDisabled = Template.bind({});
OutlinedDisabled.args = {
  children: 'Button',
  variant: 'outlined',
  color: 'primary',
  disabled: true,
};
