/* eslint-disable @typescript-eslint/no-explicit-any */
import { MutableRefObject, useCallback, useRef } from 'react';

type AnyFunction = (...args: any[]) => any;

/**
 * Хук, который позволяет отменять предыдущий вызов функции пока не истечет delay
 * @param callback
 * @param delay - задержка в мс
 */

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
