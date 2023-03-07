import React from 'react';

import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { StoreProvider } from 'app/providers/StoreProvider';
import { createRoot } from 'react-dom/client';
import { PageError } from 'widgets/PageError';

import App from './app/App';
import ThemeProvider from './shared/contexts/theme-context/ThemeProvider';

import 'shared/config/i18n/i18n';
import 'app/styles/index.css';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <StoreProvider>
      <ErrorBoundary FallbackComponent={<PageError />}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </StoreProvider>
  </React.StrictMode>,
);
