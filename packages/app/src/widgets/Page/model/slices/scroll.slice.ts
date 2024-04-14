import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { ScrollSchema } from '../types/scrollSchema.types';

const initialState: ScrollSchema = {
  scroll: {},
};

export const scrollSlice = createSlice({
  name: 'scroll',
  initialState,
  reducers: {
    setScrollPosition: (state, { payload }: PayloadAction<{ path: string; position: number }>) => {
      state.scroll[payload.path] = payload.position;
    },
  },
});

export const { actions: scrollActions } = scrollSlice;
export const { reducer: scrollReducer } = scrollSlice;
