import { withRouter } from 'storybook-addon-react-router-v6';

// import { StoreDecorator } from '../../src/shared/config/storybook/StoreDecorator';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator';
import { TranslationDecorator } from '../../src/shared/config/storybook/TranslationDecorator';

import type { Preview } from '@storybook/react';
import { SuspenseDecorator } from '../../src/shared/config/storybook/SuspenseDecorator';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    // layout: 'fullscreen',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        icon: 'circlehollow',
        // Array of plain string values or MenuItem shape (see below)
        items: ['light', 'dark'],
        // Property that specifies if the name of the item will be displayed
        title: true,
        // Change title based on selected value
        dynamicTitle: true,
      },
    },
    locale: {
      name: 'Locale',
      description: 'Internationalization locale',
      toolbar: {
        icon: 'globe',
        items: [
          { value: 'ru', right: '🇷🇺', title: 'Русский' },
          { value: 'en', right: '🇺🇸', title: 'English' },
        ],
      },
    },
  },
  decorators: [TranslationDecorator, withRouter, StyleDecorator, ThemeDecorator, SuspenseDecorator],
};

export default preview;
