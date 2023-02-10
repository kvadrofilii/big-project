import { FC } from 'react';
import { useTheme } from 'shared/contexts';
import { cn } from 'shared/lib';
import LightIcon from './sun.svg';
import DarkIcon from './moon.svg';
import { Button } from 'shared/ui';
import css from './ThemeSwitcher.m.css';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className, ...otherProps }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="clear"
      className={cn([css.root, className])}
      type="button"
      onClick={toggleTheme}
      {...otherProps}
    >
      {theme === 'dark' ? <LightIcon /> : <DarkIcon />}
    </Button>
  );
};
