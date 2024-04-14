import clsx from 'clsx';
import type { HTMLAttributes } from 'react';
import css from './Card.m.css';

export type CardVariant = 'normal' | 'outlined';

export type CardProps = HTMLAttributes<HTMLDivElement> & {
  variant?: CardVariant;
};
export const Card = (props: CardProps) => {
  const { className, children, variant = 'normal', ...rest } = props;

  return (
    <div
      className={clsx(css.root, css[variant], className)}
      {...rest}
    >
      {children}
    </div>
  );
};
