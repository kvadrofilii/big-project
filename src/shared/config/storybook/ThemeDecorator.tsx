import { StoryFn, StoryContext } from '@storybook/react';
// eslint-disable-next-line @kvadrofilii/fsd/layer-imports
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
