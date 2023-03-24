import { FC } from 'react';

import { Portal, Overlay } from 'shared/ui';

import css from './Modal.m.css';
import { ModalProps } from './Modal.types';

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
