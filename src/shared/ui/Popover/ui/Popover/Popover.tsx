import { Popover as HPopover } from '@headlessui/react';
import clsx from 'clsx';
import css from './Popover.m.css';
import popover from '../../styles/popover.m.css';
import type { PopoverProps } from './Popover.types';

export const Popover = (props: PopoverProps) => {
  const { className, trigger, children, disabled, direction = 'bottom right' } = props;

  return (
    <HPopover className={clsx(popover.root, className, disabled && popover.disabled)}>
      <HPopover.Button className={clsx(css.btn, disabled && popover.disabled)}>{trigger}</HPopover.Button>

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
