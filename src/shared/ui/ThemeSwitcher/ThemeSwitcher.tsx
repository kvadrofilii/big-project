import { memo } from 'react';

import clsx from 'clsx';
import { useTheme } from 'shared/contexts';
import { IconButton } from 'shared/ui';

import css from './ThemeSwitcher.m.css';
import { ThemeSwitcherProps } from './ThemeSwitcher.types';
import DarkIcon from './moon.svg';
import LightIcon from './sun.svg';

export const ThemeSwitcher = memo(function ThemeSwitcher(props: ThemeSwitcherProps) {
  const { className, ...rest } = props;
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
