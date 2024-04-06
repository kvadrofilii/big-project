/* eslint-disable i18next/no-literal-string */
import { Listbox as HListbox } from '@headlessui/react';
import clsx from 'clsx';
import { Fragment, memo, type ReactNode } from 'react';
import type { DropdownDirection } from '@/shared/types';
import { Flex } from '../../../Flex/Flex';
import popover from '../../styles/popover.m.css';
import css from './ListBox.m.css';

type ListBoxItem = {
  value: string;
  content: ReactNode;
  disabled?: boolean;
};

type Props = {
  className?: string;
  options?: ListBoxItem[];
  value?: string;
  defaultValue?: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  direction?: DropdownDirection;
  label?: string;
};

export const ListBox = memo(function ListBox(props: Props) {
  const {
    className,
    options,
    value,
    defaultValue,
    onChange,
    disabled,
    direction = 'bottom-right',
    label,
  } = props;

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
        <HListbox.Button className={clsx(css.btn, disabled && css.disabled)}>
          {value ?? defaultValue}
        </HListbox.Button>
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
                <li
                  className={clsx(
                    css.item,
                    active && popover.active,
                    item.disabled && popover.disabled,
                  )}
                >
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
