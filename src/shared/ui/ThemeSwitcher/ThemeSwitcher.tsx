import { memo } from 'react';

import clsx from 'clsx';
import { useTheme } from 'shared/contexts';
import { IconButton } from 'shared/ui';

import css from './ThemeSwitcher.m.css';
import DarkIcon from './moon.svg';
import LightIcon from './sun.svg';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = memo(function ThemeSwitcher({
  className,
  ...rest
}: ThemeSwitcherProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <IconButton
      variant="clear"
      className={clsx(css.root, className)}
      type="button"
      onClick={toggleTheme}
      {...rest}
    >
      {theme === 'dark' ? <LightIcon /> : <DarkIcon />}
    </IconButton>
  );
});
