import clsx from 'clsx';
import { Link } from 'react-router-dom';
import css from './CardAction.m.css';
import type { CardActionProps } from './CardAction.types';

export const CardAction = (props: CardActionProps) => {
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
