import clsx from 'clsx';

import css from './Card.m.css';
import { CardProps } from './Card.types';

export const Card = (props: CardProps) => {
  const { className, children, ...rest } = props;

  return (
    <div className={clsx(css.root, className)} {...rest}>
      {children}
    </div>
  );
};
