import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import ThemeProvider from './theme/ThemeProvider';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
