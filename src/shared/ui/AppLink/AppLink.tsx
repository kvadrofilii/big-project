import { memo, useCallback } from 'react';

import clsx from 'clsx';
import { Link } from 'react-router-dom';

import css from './AppLink.m.css';
import { AppLinkProps } from './AppLink.types';

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

  const style = useCallback(() => css[`${variant}-${color}`], [color, variant]);

  return (
    <Link
      className={clsx(
        css.root,
        css[size],
        {
          [css['full-width']]: fullWidth,
        },
        style(),
        className,
      )}
      to={to}
      {...rest}
    >
      {children}
    </Link>
  );
});
