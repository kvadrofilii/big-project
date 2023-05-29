import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticleCodeBlock } from './ArticleCodeBlock';

export default {
  title: 'shared/ArticleCodeBlock',
  component: ArticleCodeBlock,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleCodeBlock>;

const Template: ComponentStory<typeof ArticleCodeBlock> = (args) => <ArticleCodeBlock {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
