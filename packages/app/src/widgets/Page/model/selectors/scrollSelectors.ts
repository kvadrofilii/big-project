import { createSelector } from '@reduxjs/toolkit';
import type { StateSchema } from '~/app/providers/StoreProvider';

export const getScroll = (state: StateSchema) => state.scroll.scroll;

export const getScrollByPath = createSelector(
  getScroll,
  (state: StateSchema, path: string) => path,
  (scroll, path) => scroll[path] || 0,
);