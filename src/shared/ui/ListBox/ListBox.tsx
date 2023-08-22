import { Fragment, memo } from 'react';
import { Listbox as HListbox } from '@headlessui/react';

import clsx from 'clsx';

import css from './ListBox.m.css';
import { ListBoxProps } from './ListBox.types';
import { Flex } from 'shared/ui';

export const ListBox = memo(function ListBox(props: ListBoxProps) {
  const { className, options, value, defaultValue, onChange, disabled, direction, label } = props;

  return (
    <Flex gap={1} align="center">
      {label && <span className={css.label}>{label}</span>}
      <HListbox as={'div'} className={clsx(css.root, className)} value={value} onChange={onChange} disabled={disabled}>
        <HListbox.Button className={clsx(css.btn, disabled && css.disabled)}>{value ?? defaultValue}</HListbox.Button>
        <HListbox.Options
          className={clsx(css.options, {
            [css.top]: direction === 'top',
          })}
        >
          {options?.map((item) => (
            <HListbox.Option as={Fragment} key={item.value} value={item.value} disabled={item.disabled}>
              {({ active, selected }) => (
                <li className={clsx(css.item, active && css.active, item.disabled && css.disabled)}>
                  {selected && <span className={css.ok}>⎷</span>}
                  {item.content}
                </li>
              )}
            </HListbox.Option>
          ))}
        </HListbox.Options>
      </HListbox>
    </Flex>
  );
});
