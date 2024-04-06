import { MutableRefObject } from 'react';

export type UseInfiniteScrollOptions = {
  callback?: () => void;
  triggerRef: MutableRefObject<HTMLElement>;
  wrapperRef: MutableRefObject<HTMLElement>;
};
