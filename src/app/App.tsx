import { useEffect } from 'react';

import { useTranslation } from 'react-i18next';
import { useTheme } from 'shared/contexts/theme-context/useTheme';
import { cn } from 'shared/lib';

import { AppRouter } from './providers/AppRouter';

import 'app/styles/index.css';

const App = () => {
  const { theme } = useTheme();
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.setAttribute('lang', i18n.language);
  }, [i18n.language]);

  return (
    <div className={cn(['app', theme])}>
      <AppRouter />
    </div>
  );
};

export default App;
