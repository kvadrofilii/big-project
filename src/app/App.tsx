import { useEffect } from 'react';

import { AppRouter } from 'app/providers/AppRouter';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'shared/contexts/theme-context/useTheme';

const App = () => {
  const { theme } = useTheme();
  const { i18n } = useTranslation();

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

  useEffect(() => {
    document.documentElement.setAttribute('lang', i18n.language);
  }, [i18n.language]);

  return <AppRouter />;
};

export default App;
