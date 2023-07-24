import { StoryFn, StoryContext } from '@storybook/react';
import ThemeProvider from 'shared/contexts/theme-context/ThemeProvider';

export const ThemeDecorator = (StoryComponent: StoryFn, context: StoryContext) => {
  const {
    globals: { theme },
  } = context;

  return (
    <ThemeProvider changeTheme={theme}>
      <StoryComponent />
    </ThemeProvider>
  );
};
