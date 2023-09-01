import { memo } from 'react';

import clsx from 'clsx';
import { Link } from 'react-router-dom';

import css from './AppLink.m.css';

import type { AppLinkProps } from './AppLink.types';

export const AppLink = memo(function AppLink(props: AppLinkProps) {
  const {
    to,
    className,
    children,
    color = 'primary',
    variant = 'text',
    size = 'medium',
    fullWidth = false,
    ...rest
  } = props;

  return (
    <Link
      className={clsx(css.root, css[size], fullWidth && css['full-width'], css[`${variant}-${color}`], className)}
      to={to}
      {...rest}
    >
      {children}
    </Link>
  );
});
