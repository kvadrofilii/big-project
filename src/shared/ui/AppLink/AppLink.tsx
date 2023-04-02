import { FC } from 'react';

import clsx from 'clsx';
import { Link, LinkProps } from 'react-router-dom';

import css from './AppLink.m.css';

type Variant = 'primary' | 'secondary' | 'base' | 'inverted';

export interface AppLinkProps extends LinkProps {
  className?: string;
  variant?: Variant;
}

export const AppLink: FC<AppLinkProps> = ({
  to,
  className,
  children,
  variant = 'base',
  ...restProps
}) => {
  return (
    <Link className={clsx(css.root, css[variant], className)} to={to} {...restProps}>
      {children}
    </Link>
  );
};
