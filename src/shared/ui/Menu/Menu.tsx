import { Fragment, memo } from 'react';

import { Menu as HMenu } from '@headlessui/react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

import css from './Menu.m.css';
import { MenuProps } from './Menu.types';

export const Menu = memo(function Menu(props: MenuProps) {
  const { className, items, children, disabled, direction = 'bottom right' } = props;

  return (
    <HMenu as="div" className={clsx(css.root, className, disabled && css.disabled)}>
      <HMenu.Button className={clsx(css.btn, disabled && css.disabled)}>{children}</HMenu.Button>
      <HMenu.Items
        className={clsx(css.items, {
          [css['top-right']]: direction === 'top right',
          [css['top-left']]: direction === 'top left',
          [css['bottom-right']]: direction === 'bottom right',
          [css['bottom-left']]: direction === 'bottom left',
        })}
      >
        {items.map((item) => {
          const content = ({ active }: { active: boolean }) => (
            <button
              className={clsx(css.item, active && css.active)}
              type="button"
              onClick={item.onClick}
              disabled={item.disabled}
            >
              {item.content}
            </button>
          );

          if (item.href) {
            return (
              <HMenu.Item as={Link} to={item.href} key={item.id} disabled={item.disabled}>
                {content}
              </HMenu.Item>
            );
          }

          return (
            <HMenu.Item as={Fragment} key={item.id} disabled={item.disabled}>
              {content}
            </HMenu.Item>
          );
        })}
      </HMenu.Items>
    </HMenu>
  );
});
