import { Story, StoryContext } from '@storybook/react';
import ThemeProvider from 'shared/contexts/theme-context/ThemeProvider';

export const ThemeDecorator = (StoryComponent: Story, context: StoryContext) => {
  const {
    globals: { theme },
  } = context;

  return (
    <ThemeProvider changeTheme={theme}>
      <StoryComponent />
    </ThemeProvider>
  );
};
