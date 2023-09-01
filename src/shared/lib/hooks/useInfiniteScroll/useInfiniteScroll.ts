import { useEffect } from 'react';

import type { UseInfiniteScrollOptions } from './useInfiniteScroll.types';

export function useInfiniteScroll(props: UseInfiniteScrollOptions) {
  const { callback, triggerRef, wrapperRef } = props;

  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    const triggerElement = triggerRef.current;
    const wrapperElement = wrapperRef.current;

    if (callback) {
      const options = {
        root: wrapperElement,
        rootMargin: '8px',
        threshold: 1.0,
      };

      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          callback();
        }
      }, options);

      observer.observe(triggerElement);
    }

    return () => {
      if (observer && triggerElement) {
        observer.disconnect();
      }
    };
  }, [callback, triggerRef, wrapperRef]);
}
