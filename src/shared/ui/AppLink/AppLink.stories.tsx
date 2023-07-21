import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AppLink } from './AppLink';

export default {
  title: 'shared/AppLink',
  component: AppLink,
  args: {
    to: '/',
  },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const ContainedSmall = Template.bind({});
ContainedSmall.args = {
  children: 'Link',
  variant: 'contained',
  size: 'small',
};

export const ContainedMedium = Template.bind({});
ContainedMedium.args = {
  children: 'Link',
  variant: 'contained',
};

export const ContainedLarge = Template.bind({});
ContainedLarge.args = {
  children: 'Link',
  variant: 'contained',
  size: 'large',
};

export const ContainedPrimary = Template.bind({});
ContainedPrimary.args = {
  children: 'Link',
  variant: 'contained',
  color: 'primary',
};

export const ContainedSecondary = Template.bind({});
ContainedSecondary.args = {
  children: 'Link',
  variant: 'contained',
  color: 'secondary',
};

export const TextPrimary = Template.bind({});
TextPrimary.args = {
  children: 'Link',
  color: 'primary',
};

export const TextSecondary = Template.bind({});
TextSecondary.args = {
  children: 'Link',
  color: 'secondary',
};

export const OutlinedPrimary = Template.bind({});
OutlinedPrimary.args = {
  children: 'Link',
  variant: 'outlined',
  color: 'primary',
};

export const OutlinedSecondary = Template.bind({});
OutlinedSecondary.args = {
  children: 'Link',
  variant: 'outlined',
  color: 'secondary',
};

export const ContainedFullWidth = Template.bind({});
ContainedFullWidth.args = {
  children: 'Link',
  variant: 'contained',
  fullWidth: true,
};
