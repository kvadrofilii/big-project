import { MutableRefObject, useRef, UIEvent } from 'react';

import clsx from 'clsx';
import { useLocation } from 'react-router-dom';

import { StateSchema } from '@/app/providers/StoreProvider';
import { useAppDispatch, useAppSelector, useInfiniteScroll, useInitialEffect, useThrottle } from '@/shared/lib';

import css from './Page.m.css';
import { getScrollByPath } from '../model/selectors/scrollSelectors';
import { scrollActions } from '../model/slices/scroll.slice';

import type { PageProps } from './Page.types';

export const Page = (props: PageProps) => {
  const { className, children, onScrollEnd, ...rest } = props;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  // eslint-disable-next-line react-redux/useSelector-prefer-selectors
  const scrollPosition = useAppSelector((state: StateSchema) => getScrollByPath(state, pathname));

  useInfiniteScroll({ triggerRef, wrapperRef, callback: onScrollEnd });

  const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
    dispatch(
      scrollActions.setScrollPosition({
        position: e.currentTarget.scrollTop,
        path: pathname,
      }),
    );
  }, 500);

  useInitialEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition;
  });

  return (
    <section
      ref={wrapperRef}
      className={clsx(css.root, className)}
      onScroll={onScroll}
      {...rest}
    >
      {children}
      {onScrollEnd ? (
        <div
          className={css.trigger}
          ref={triggerRef}
        />
      ) : null}
    </section>
  );
};
