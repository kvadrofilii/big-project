import { ReactNode } from 'react';
import { Theme } from '~/shared/lib/context/ThemeContext';

export type ThemeProviderProps = {
  children: ReactNode;
  changeTheme?: Theme;
};
