import { type FC, useCallback, useEffect } from 'react';
import css from './Overlay.m.css';

type Props = {
  isOpened?: boolean;
  onClose?: () => void;
};

export const Overlay: FC<Props> = (props) => {
  const { isOpened, onClose } = props;

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
    if (isOpened) {
      window.addEventListener('keydown', onKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpened, onKeyDown]);

  return (
    <button
      type="button"
      aria-label="Overlay"
      className={css.root}
      tabIndex={0}
      onClick={closeHandler}
    />
  );
};
