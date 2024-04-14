import clsx from 'clsx';
import { memo } from 'react';
import { Link } from 'react-router-dom';
import type { LinkProps } from 'react-router-dom';
import type { Size, Variant } from '~/shared/types';
import css from './AppLink.m.css';

type AppLinkColor = 'primary' | 'secondary';

type Props = LinkProps & {
  color?: AppLinkColor;
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
};

export const AppLink = memo(function AppLink(props: Props) {
  const {
    to,
    className,
    children,
    color = 'primary',
    variant = 'text',
    size = 'medium',
    fullWidth,
    ...rest
  } = props;

  return (
    <Link
      className={clsx(
        css.root,
        css[size],
        fullWidth && css['full-width'],
        css[`${variant}-${color}`],
        className,
      )}
      to={to}
      {...rest}
    >
      {children}
    </Link>
  );
});
