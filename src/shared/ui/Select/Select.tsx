import { ChangeEvent, memo, useMemo } from 'react';

import clsx from 'clsx';

import css from './Select.m.css';

export interface SelectOption {
  value: string;
  content: string;
}

interface SelectProps {
  className?: string;
  label?: string;
  options?: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
}

export const Select = memo(function Select(props: SelectProps) {
  const { className, label, options, onChange, value, disabled } = props;

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  const optionsList = useMemo(
    () =>
      options?.map((opt) => (
        <option className={css.option} value={opt.value} key={opt.value}>
          {opt.content}
        </option>
      )),
    [options],
  );

  return (
    <div className={clsx(css.root, className)}>
      {label && <span className={css.label}>{label}</span>}
      <select disabled={disabled} className={css.select} value={value} onChange={onChangeHandler}>
        {optionsList}
      </select>
    </div>
  );
});