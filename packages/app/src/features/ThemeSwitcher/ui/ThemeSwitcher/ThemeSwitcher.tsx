import clsx from 'clsx';
import { memo } from 'react';
import DarkIcon from '~/shared/assets/icons/moon.svg';
import LightIcon from '~/shared/assets/icons/sun.svg';
import { useTheme } from '~/shared/lib';
import { IconButton } from '~/shared/ui';
import type { ThemeSwitcherProps } from './ThemeSwitcher.types';
import css from './ThemeSwitcher.m.css';

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
