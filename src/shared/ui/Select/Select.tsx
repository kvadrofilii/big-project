import { ChangeEvent, memo, useMemo } from 'react';

import clsx from 'clsx';

import css from './Select.m.css';

import type { SelectProps } from './Select.types';

export const SelectComponent = <T extends string>(props: SelectProps<T>) => {
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
