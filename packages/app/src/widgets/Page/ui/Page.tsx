import clsx from 'clsx';
import { type MutableRefObject, useRef, type UIEvent, type ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import type { StateSchema } from '~/app/providers/StoreProvider';
import {
  useAppDispatch,
  useAppSelector,
  useInfiniteScroll,
  useInitialEffect,
  useThrottle,
} from '~/shared/lib';
import type { TestProps } from '~/shared/types';
import { getScrollByPath } from '../model/selectors/scrollSelectors';
import { scrollActions } from '../model/slices/scroll.slice';
import css from './Page.m.css';

type Props = TestProps & {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;
};

export const Page = (props: Props) => {
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
