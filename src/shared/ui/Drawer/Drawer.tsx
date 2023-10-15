import clsx from 'clsx';

import css from './Drawer.m.css';
import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';

import type { DrawerProps } from './Drawer.types';

export const Drawer = (props: DrawerProps) => {
  const { className, children, isOpened, onClose } = props;

  if (!isOpened) {
    return null;
  }

  return (
    <Portal>
      <div
        className={clsx(css.root, className, {
          [css.opened]: isOpened,
        })}
      >
        <Overlay onClose={onClose} isOpened={isOpened} />
        <div className={css.content}>{children}</div>
      </div>
    </Portal>
  );
};
