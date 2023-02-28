import { FC } from 'react';

import cn from 'classnames';
import { useTheme } from 'shared/contexts';
import { IconButton } from 'shared/ui';

import css from './ThemeSwitcher.m.css';
import DarkIcon from './moon.svg';
import LightIcon from './sun.svg';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className, ...otherProps }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <IconButton
      variant="clear"
      className={cn(css.root, className)}
      type="button"
      onClick={toggleTheme}
      {...otherProps}
    >
      {theme === 'dark' ? <LightIcon /> : <DarkIcon />}
    </IconButton>
  );
};
