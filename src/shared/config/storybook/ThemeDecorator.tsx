import { StoryFn, StoryContext } from '@storybook/react';

import { ThemeProvider } from '@/app/providers/ThemeProvider';

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
