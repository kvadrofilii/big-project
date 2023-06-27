import { MutableRefObject, useRef } from 'react';

import clsx from 'clsx';
import { useInfiniteScroll } from 'shared/lib';

import css from './Page.m.css';
import { PageProps } from './Page.types';

export const Page = (props: PageProps) => {
  const { className, children, onScrollEnd } = props;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;

  useInfiniteScroll({ triggerRef, wrapperRef, callback: onScrollEnd });

  return (
    <section ref={wrapperRef} className={clsx(css.root, className)}>
      {children}
      <div ref={triggerRef} />
    </section>
  );
};
