import clsx from 'clsx';
import { Link, type LinkProps } from 'react-router-dom';
import css from './CardAction.m.css';

export const CardAction = (props: LinkProps) => {
  const { to, className, children, ...rest } = props;

  return (
    <Link
      className={clsx(css.root, className)}
      to={to}
      role="button"
      {...rest}
    >
      {children}
    </Link>
  );
};
