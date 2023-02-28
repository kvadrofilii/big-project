import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconButton } from './IconButton';
import IconArrow from '../../../widgets/assets/icons/caret-left-fill.svg';
import IconChildren from '../../assets/icons/bandaid.svg';

export default {
  title: 'shared/IconButton',
  component: IconButton,
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => <IconButton {...args} />;

export const ContainedSmall = Template.bind({});
ContainedSmall.args = {
  children: <IconArrow />,
  variant: 'contained',
  size: 'small',
};

export const ContainedMedium = Template.bind({});
ContainedMedium.args = {
  children: <IconArrow />,
  variant: 'contained',
};

export const ContainedLarge = Template.bind({});
ContainedLarge.args = {
  children: <IconArrow />,
  variant: 'contained',
  size: 'large',
};

export const ContainedPrimary = Template.bind({});
ContainedPrimary.args = {
  children: <IconChildren />,
  variant: 'contained',
  color: 'primary',
};

export const ContainedSecondary = Template.bind({});
ContainedSecondary.args = {
  children: <IconChildren />,
  variant: 'contained',
  color: 'secondary',
};

export const ClearPrimary = Template.bind({});
ClearPrimary.args = {
  children: <IconChildren />,
  color: 'primary',
};

export const ClearSecondary = Template.bind({});
ClearSecondary.args = {
  children: <IconChildren />,
  color: 'secondary',
};

export const OutlinedPrimary = Template.bind({});
OutlinedPrimary.args = {
  children: <IconChildren />,
  variant: 'outlined',
  color: 'primary',
};

export const OutlinedSecondary = Template.bind({});
OutlinedSecondary.args = {
  children: <IconChildren />,
  variant: 'outlined',
  color: 'secondary',
};

export const ContainedDisabled = Template.bind({});
ContainedDisabled.args = {
  children: <IconChildren />,
  variant: 'contained',
  color: 'primary',
  disabled: true,
};

export const ClearDisabled = Template.bind({});
ClearDisabled.args = {
  children: <IconChildren />,
  color: 'primary',
  disabled: true,
};

export const OutlinedDisabled = Template.bind({});
OutlinedDisabled.args = {
  children: <IconChildren />,
  variant: 'outlined',
  color: 'primary',
  disabled: true,
};
