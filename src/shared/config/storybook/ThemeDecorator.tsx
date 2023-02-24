import { Story, StoryContext } from '@storybook/react';
import cn from 'classnames';
import ThemeProvider from 'shared/contexts/theme-context/ThemeProvider';

export const ThemeDecorator = (StoryComponent: Story, context: StoryContext) => {
  const {
    globals: { theme },
  } = context;

  return (
    <ThemeProvider>
      <div className={cn('app', theme)}>
        <StoryComponent />
      </div>
    </ThemeProvider>
  );
};
