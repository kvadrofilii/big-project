import { FC } from 'react';

import css from './Modal.m.css';
import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';

import type { ModalProps } from './Modal.types';

export const Modal: FC<ModalProps> = (props) => {
  const { children, isOpened, onClose } = props;

  if (!isOpened) {
    return null;
  }

  return (
    <Portal>
      <div className={css.root}>
        <Overlay onClose={onClose} isOpened={isOpened} />
        <div className={css.content}>{children}</div>
      </div>
    </Portal>
  );
};
