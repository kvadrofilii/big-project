import { memo } from 'react';

import clsx from 'clsx';
import { Link } from 'react-router-dom';

import css from './AppLink.m.css';
import { AppLinkProps } from './AppLink.types';

export const AppLink = memo(function AppLink(props: AppLinkProps) {
  const { to, className, children, variant = 'base', ...rest } = props;

  return (
    <Link className={clsx(css.root, css[variant], className)} to={to} {...rest}>
      {children}
    </Link>
  );
});
