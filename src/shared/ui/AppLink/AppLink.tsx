import { FC } from 'react';

import cn from 'classnames';
import { Link, LinkProps } from 'react-router-dom';

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
    <Link className={cn(css.root, className, css[theme])} to={to} {...otherProps}>
      {children}
    </Link>
  );
};
