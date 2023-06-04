import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Code } from './Code';

export default {
  title: 'shared/Code',
  component: Code,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: `
  export default {
    title: 'shared/Code',
    component: Code,
    argTypes: {
      backgroundColor: { control: 'color' },
    },
  } as ComponentMeta<typeof Code>;
  `,
};
