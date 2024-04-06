import clsx from 'clsx';
import { memo, type ChangeEvent, type InputHTMLAttributes } from 'react';
import css from './Input.m.css';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

type Props = HTMLInputProps & {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  fullWidth?: boolean;
};

export const Input = memo(function Input(props: Props) {
  const { className, value, onChange, fullWidth, ...rest } = props;

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <input
      data-testid="input"
      className={clsx(
        css.root,
        {
          [css['full-width']]: fullWidth,
        },
        className,
      )}
      value={value}
      onChange={onChangeHandler}
      {...rest}
    />
  );
});
