import { FC, InputHTMLAttributes } from 'react';

import cn from 'classnames';

import css from './Input.m.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const Input: FC<InputProps> = ({ className, ...restProps }) => {
  return <input data-testid="input" className={cn(css.root, className)} {...restProps} />;
};
