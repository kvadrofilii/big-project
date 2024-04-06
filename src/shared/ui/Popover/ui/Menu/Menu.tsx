import { Menu as HMenu } from '@headlessui/react';
import clsx from 'clsx';
import { Fragment, memo, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import type { DropdownDirection } from '@/shared/types';
import popover from '../../styles/popover.m.css';
import css from './Menu.m.css';

type DropdownItem = {
  id: string | number;
  disabled?: boolean;
  content?: ReactNode;
  onClick?: () => void;
  href?: string;
};

type Props = {
  className?: string;
  items: DropdownItem[];
  children: ReactNode;
  disabled?: boolean;
  direction?: DropdownDirection;
};

export const Menu = memo(function Menu(props: Props) {
  const { className, items, children, disabled, direction = 'bottom right' } = props;

  return (
    <HMenu
      as="div"
      className={clsx(popover.root, className, disabled && popover.disabled)}
    >
      <HMenu.Button className={clsx(css.btn, disabled && popover.disabled)}>
        {children}
      </HMenu.Button>
      <HMenu.Items
        className={clsx(css.items, {
          [popover['top-right']]: direction === 'top right',
          [popover['top-left']]: direction === 'top left',
          [popover['bottom-right']]: direction === 'bottom right',
          [popover['bottom-left']]: direction === 'bottom left',
        })}
      >
        {items.map((item) => {
          const content = ({ active }: { active: boolean }) => (
            <button
              className={clsx(css.item, active && popover.active)}
              type="button"
              onClick={item.onClick}
              disabled={item.disabled}
            >
              {item.content}
            </button>
          );

          if (item.href) {
            return (
              <HMenu.Item
                as={Link}
                to={item.href}
                key={item.id}
                disabled={item.disabled}
              >
                {content}
              </HMenu.Item>
            );
          }

          return (
            <HMenu.Item
              as={Fragment}
              key={item.id}
              disabled={item.disabled}
            >
              {content}
            </HMenu.Item>
          );
        })}
      </HMenu.Items>
    </HMenu>
  );
});
