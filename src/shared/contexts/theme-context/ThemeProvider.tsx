import { FC, useMemo, useState, ReactNode, useEffect } from 'react';

import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || 'light';

export type ThemeProviderProps = {
  children: ReactNode;
  initialTheme?: Theme;
};

const ThemeProvider: FC<ThemeProviderProps> = ({ children, initialTheme }) => {
  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme],
  );

  useEffect(() => {
    switch (defaultTheme) {
      case 'dark': {
        document.body.classList.add('dark');
        break;
      }
      case 'light':
      default: {
        document.body.classList.remove('dark');
        break;
      }
    }
  }, []);

  return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
