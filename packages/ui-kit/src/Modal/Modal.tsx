import type { FC, ReactNode } from 'react';
import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';
import css from './Modal.m.css';

type Props = {
  children: ReactNode;
  isOpened?: boolean;
  onClose?: () => void;
};

export const Modal: FC<Props> = (props) => {
  const { children, isOpened, onClose } = props;

  if (!isOpened) {
    return null;
  }

  return (
    <Portal>
      <div className={css.root}>
        <Overlay
          onClose={onClose}
          isOpened={isOpened}
        />
        <div className={css.content}>{children}</div>
      </div>
    </Portal>
  );
};
