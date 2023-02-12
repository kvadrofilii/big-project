import { ButtonHTMLAttributes, FC } from 'react';

import { cn } from 'shared/lib';

import css from './Button.m.css';

type Variant = 'clear';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: Variant;
}

export const Button: FC<ButtonProps> = ({ children, className, variant, ...otherProps }) => {
  return (
    <button className={cn([css.root, css[variant], className])} {...otherProps}>
      {children}
    </button>
  );
};
