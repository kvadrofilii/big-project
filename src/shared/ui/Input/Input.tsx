import { FC, InputHTMLAttributes } from 'react';

import clsx from 'clsx';

import css from './Input.m.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const Input: FC<InputProps> = ({ className, ...rest }) => (
  <input data-testid="input" className={clsx(css.root, className)} {...rest} />
);
