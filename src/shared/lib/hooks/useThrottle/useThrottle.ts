import { useCallback, useEffect, useRef } from 'react';

type AnyFunction = (...args: any[]) => any;

export function useThrottle<Fn extends AnyFunction>(callback: ReturnType<Fn>, delay: number) {
  const throttleRef = useRef(false);
  const timeoutRef = useRef<any>(null);

  const throttledCallback = useCallback(
    (...args: any[]) => {
      if (!throttleRef.current) {
        callback(...args);
        throttleRef.current = true;

        timeoutRef.current = setTimeout(() => {
          throttleRef.current = false;
        }, delay);
      }
    },
    [callback, delay],
  );

  useEffect(
    () => () => {
      clearTimeout(timeoutRef.current);
    },
    [],
  );

  return throttledCallback;
}
