import { Popover as HPopover } from '@headlessui/react';
import clsx from 'clsx';
import { type ReactNode } from 'react';
import type { DropdownDirection } from '@/shared/types';
import popover from '../../styles/popover.m.css';
import css from './Popover.m.css';

type Props = {
  className?: string;
  trigger: ReactNode;
  children: ReactNode;
  disabled?: boolean;
  direction?: DropdownDirection;
};

export const Popover = (props: Props) => {
  const { className, trigger, children, disabled, direction = 'bottom right' } = props;

  return (
    <HPopover className={clsx(popover.root, className, disabled && popover.disabled)}>
      <HPopover.Button className={clsx(css.btn, disabled && popover.disabled)}>
        {trigger}
      </HPopover.Button>

      <HPopover.Panel
        className={clsx(css.items, {
          [popover['top-right']]: direction === 'top right',
          [popover['top-left']]: direction === 'top left',
          [popover['bottom-right']]: direction === 'bottom right',
          [popover['bottom-left']]: direction === 'bottom left',
        })}
      >
        {children}
      </HPopover.Panel>
    </HPopover>
  );
};
