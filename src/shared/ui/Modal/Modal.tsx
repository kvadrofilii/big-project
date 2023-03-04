import { FC, MouseEvent } from 'react';

import cn from 'classnames';
import { Overlay, Portal } from 'shared/ui';

import css from './Modal.m.css';
import { ModalProps } from './Modal.types';

export const Modal: FC<ModalProps> = (props) => {
  const { className, children, isOpen, onClose } = props;

  const onContentClick = (e: MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <Portal>
      <div
        className={cn(
          css.root,
          {
            [css.opened]: isOpen,
            [css.closed]: !isOpen,
          },
          className,
        )}
      >
        <Overlay onClose={onClose} isOpen={isOpen}>
          <div className={css.content} onClick={onContentClick}>
            {children}
          </div>
        </Overlay>
      </div>
    </Portal>
  );
};
