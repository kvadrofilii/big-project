import { ReactNode } from 'react';

import { Theme } from '@/shared/contexts/theme-context/ThemeContext';

export type ThemeProviderProps = {
  children: ReactNode;
  changeTheme?: Theme;
};
