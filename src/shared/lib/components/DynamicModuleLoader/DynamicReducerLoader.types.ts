import { ReactNode } from 'react';

import { Reducer } from '@reduxjs/toolkit';
import { StateSchemaKey } from 'app/providers/StoreProvider';

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer;
};

export interface DynamicReducerLoaderProps {
  reducers: ReducersList;
  removeAfterUnmount?: boolean;
  children: ReactNode;
}
