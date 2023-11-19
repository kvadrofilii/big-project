/* eslint-disable i18next/no-literal-string */
import { Fragment, memo } from 'react';

import { Listbox as HListbox } from '@headlessui/react';
import clsx from 'clsx';

import css from './ListBox.m.css';
import { Flex } from '../../../Flex/Flex';
import popover from '../../styles/popover.m.css';

import type { ListBoxProps } from './ListBox.types';

export const ListBox = memo(function ListBox(props: ListBoxProps) {
  const { className, options, value, defaultValue, onChange, disabled, direction = 'bottom-right', label } = props;

  return (
    <Flex
      gap={1}
      align="center"
    >
      {label && <span className={css.label}>{label}</span>}
      <HListbox
        as="div"
        className={clsx(popover.root, className)}
        value={value}
        onChange={onChange}
        disabled={disabled}
      >
        <HListbox.Button className={clsx(css.btn, disabled && css.disabled)}>{value ?? defaultValue}</HListbox.Button>
        <HListbox.Options
          className={clsx(css.options, {
            [popover['top-right']]: direction === 'top right',
            [popover['top-left']]: direction === 'top left',
            [popover['bottom-right']]: direction === 'bottom right',
            [popover['bottom-left']]: direction === 'bottom left',
          })}
        >
          {options?.map((item) => (
            <HListbox.Option
              as={Fragment}
              key={item.value}
              value={item.value}
              disabled={item.disabled}
            >
              {({ active, selected }) => (
                <li className={clsx(css.item, active && popover.active, item.disabled && popover.disabled)}>
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
