import { FC } from 'react';

import css from './Modal.m.css';

import type { ModalProps } from './Modal.types';
import { Portal } from '../Portal/Portal';
import { Overlay } from '../Overlay/Overlay';

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
