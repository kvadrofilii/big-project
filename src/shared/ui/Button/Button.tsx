import { ButtonProps } from './Button.type';
import css from './Button.m.css';

export const Button = ({ children }: ButtonProps) => {
  return <button className={css.btn}>{children}</button>;
};


