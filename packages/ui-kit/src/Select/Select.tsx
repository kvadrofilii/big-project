import clsx from 'clsx';
import { type ChangeEvent, memo, useMemo } from 'react';
import css from './Select.m.css';

export type SelectOption<T extends string> = {
  value: T;
  content: string;
};

type Props<T extends string> = {
  className?: string;
  label?: string;
  options?: SelectOption<T>[];
  value?: T;
  onChange?: (value: T) => void;
  disabled?: boolean;
};

export const SelectComponent = <T extends string>(props: Props<T>) => {
  const { className, label, options, onChange, value, disabled } = props;

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(e.target.value as T);
    }
  };

  const optionsList = useMemo(
    () =>
      options?.map((opt) => (
        <option
          className={css.option}
          value={opt.value}
          key={opt.value}
        >
          {opt.content}
        </option>
      )),
    [options],
  );

  return (
    <div className={clsx(css.root, className)}>
      {label && <span className={css.label}>{label}</span>}
      <select
        disabled={disabled}
        className={css.select}
        value={value}
        onChange={onChangeHandler}
      >
        {optionsList}
      </select>
    </div>
  );
};

export const Select = memo(SelectComponent) as typeof SelectComponent;
