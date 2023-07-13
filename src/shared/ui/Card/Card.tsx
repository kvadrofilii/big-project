import clsx from 'clsx';

import css from './Card.m.css';
import { CardProps } from './Card.types';

export const Card = (props: CardProps) => {
  const { className, children, variant = 'normal', ...rest } = props;

  return (
    <div className={clsx(css.root, css[variant], className)} {...rest}>
      {children}
    </div>
  );
};
