import { ReactNode } from 'react';

import { Reducer } from '@reduxjs/toolkit';

import { StateSchema, StateSchemaKey } from '@/app/providers/StoreProvider';

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer<NonNullable<StateSchema[name]>>;
};

export interface DynamicReducerLoaderProps {
  reducers: ReducersList;
  removeAfterUnmount?: boolean;
  children: ReactNode;
}
