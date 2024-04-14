import { type ReducersMapObject } from '@reduxjs/toolkit';
import { ReactNode } from 'react';
import { StateSchema } from '../config/StateSchema';

export type StoreProviderProps = {
  children?: ReactNode;
  initialState?: DeepPartial<StateSchema>;
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
};
