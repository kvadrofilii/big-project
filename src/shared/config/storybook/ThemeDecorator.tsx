import { useEffect } from 'react';

import { Story, StoryContext } from '@storybook/react';
import ThemeProvider from 'shared/contexts/theme-context/ThemeProvider';

export const ThemeDecorator = (StoryComponent: Story, context: StoryContext) => {
  const {
    globals: { theme },
  } = context;

  useEffect(() => {
    switch (theme) {
      case 'dark': {
        document.body.classList.add('dark');
        document.body.classList.remove('light');
        break;
      }
      case 'light':
      default: {
        document.body.classList.add('light');
        document.body.classList.remove('dark');
        break;
      }
    }
  }, [theme]);

  return (
    <ThemeProvider>
      <StoryComponent />
    </ThemeProvider>
  );
};
