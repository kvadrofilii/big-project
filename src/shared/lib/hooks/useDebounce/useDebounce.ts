import { MutableRefObject, useCallback, useRef } from 'react';

type AnyFunction = (...args: any[]) => any;

export function useDebounce<Fn extends AnyFunction>(callback: ReturnType<Fn>, delay: number) {
  const timerRef = useRef() as MutableRefObject<any>;

  return useCallback(
    (...args: any[]) => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }

      timerRef.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay],
  );
}
