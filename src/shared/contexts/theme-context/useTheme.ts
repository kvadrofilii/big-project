import { useContext } from 'react';

import { Theme, ThemeContext } from './ThemeContext';
import { LOCAL_STORAGE_THEME_KEY } from '../../consts/localstorage';

interface UseThemeResult {
  toggleTheme: () => void;
  theme: Theme;
}

export function useTheme(): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';

    setTheme?.(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return { theme: theme || 'light', toggleTheme };
}
