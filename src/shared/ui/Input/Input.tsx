import { memo, InputHTMLAttributes } from 'react';

import clsx from 'clsx';

import css from './Input.m.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const Input = memo(function Input({ className, ...rest }: InputProps) {
  return <input data-testid="input" className={clsx(css.root, className)} {...rest} />;
});
