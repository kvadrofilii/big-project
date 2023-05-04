import { memo, InputHTMLAttributes, ChangeEvent } from 'react';

import clsx from 'clsx';

import css from './Input.m.css';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
}

export const Input = memo(function Input(props: InputProps) {
  const { className, value, onChange, ...rest } = props;

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <input
      data-testid="input"
      className={clsx(css.root, className)}
      value={value}
      onChange={onChangeHandler}
      {...rest}
    />
  );
});
