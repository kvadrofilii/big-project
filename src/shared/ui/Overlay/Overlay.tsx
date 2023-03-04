import { FC, useCallback, useEffect } from 'react';

import cn from 'classnames';

import css from './Overlay.m.css';
import { OverlayProps } from './Overlay.types';

export const Overlay: FC<OverlayProps> = (props) => {
  const { className, children, isOpen, onClose } = props;

  const closeHandler = useCallback(() => {
    if (onClose) {
      onClose();
    }
  }, [onClose]);

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeHandler();
      }
    },
    [closeHandler],
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  return (
    <div className={cn(css.root, className)} onClick={closeHandler}>
      {children}
    </div>
  );
};
