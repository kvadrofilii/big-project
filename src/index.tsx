import React from 'react';

import { createRoot } from 'react-dom/client';

import App from './app/App';
import ThemeProvider from './shared/contexts/theme-context/ThemeProvider';

import 'shared/config/i18n/i18n';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
