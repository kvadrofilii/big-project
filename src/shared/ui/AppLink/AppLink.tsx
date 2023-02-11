import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { cn } from 'shared/lib';
import css from './AppLink.m.css';

export type AppLinkTheme = 'primary' | 'secondary' | 'base' | 'inverted';

export interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = ({
  to,
  className,
  children,
  theme = 'base',
  ...otherProps
}) => {
  return (
    <Link className={cn([css.root, className, css[theme]])} to={to} {...otherProps}>
      {children}
    </Link>
  );
};
