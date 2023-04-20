import { memo } from 'react';

import clsx from 'clsx';
import { Link, LinkProps } from 'react-router-dom';

import css from './AppLink.m.css';

type Variant = 'primary' | 'secondary' | 'base' | 'inverted';

export interface AppLinkProps extends LinkProps {
  className?: string;
  variant?: Variant;
}

export const AppLink = memo(function AppLink({
  to,
  className,
  children,
  variant = 'base',
  ...rest
}: AppLinkProps) {
  return (
    <Link className={clsx(css.root, css[variant], className)} to={to} {...rest}>
      {children}
    </Link>
  );
});
