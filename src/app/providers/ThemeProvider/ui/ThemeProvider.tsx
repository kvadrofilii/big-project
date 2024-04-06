import { FC, useMemo, useState, useEffect } from 'react';
import { LOCAL_STORAGE_THEME_KEY } from '~/shared/consts/localstorage';
import { Theme, ThemeContext } from '~/shared/lib/context/ThemeContext';
import type { ThemeProviderProps } from './ThemeProvider.types';

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || 'light';

export const ThemeProvider: FC<ThemeProviderProps> = ({ children, changeTheme = 'light' }) => {
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
