import { FC, useMemo, useState, ReactNode, useEffect } from 'react';

import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || 'light';

export type ThemeProviderProps = {
  children: ReactNode;
  changeTheme?: Theme;
};

const ThemeProvider: FC<ThemeProviderProps> = ({ children, changeTheme = 'light' }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme],
  );

  useEffect(() => {
    setTheme(changeTheme);
  }, [changeTheme]);

  useEffect(() => {
    switch (theme) {
      case 'dark': {
        document.body.classList.add('dark');
        document.body.classList.remove('contrast');
        break;
      }
      case 'contrast': {
        document.body.classList.add('contrast');
        document.body.classList.remove('dark');
        break;
      }
      case 'light':
      default: {
        document.body.classList.remove('dark');
        document.body.classList.remove('contrast');
        break;
      }
    }
  }, [theme]);

  return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
