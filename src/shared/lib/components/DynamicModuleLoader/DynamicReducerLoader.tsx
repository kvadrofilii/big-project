import { ReactNode, useEffect } from 'react';

import { Reducer } from '@reduxjs/toolkit';
import { ReduxStoreWithManager, StateSchemaKey } from 'app/providers/StoreProvider';
import { useStore } from 'react-redux';
import { useAppDispatch } from 'shared/lib';

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer;
};

interface DynamicReducerLoaderProps {
  reducers: ReducersList;
  removeAfterUnmount?: boolean;
  children: ReactNode;
}

export const DynamicReducerLoader = (props: DynamicReducerLoaderProps) => {
  const { children, reducers, removeAfterUnmount = true } = props;

  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useAppDispatch();

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]) => {
      if (!store.getState()[name as StateSchemaKey]) {
        store.reducerManager.add(name as StateSchemaKey, reducer);
        dispatch({ type: `@INIT ${name} reducer` });
      }
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name]) => {
          store.reducerManager.remove(name as StateSchemaKey);
          dispatch({ type: `@DESTROY ${name} reducer` });
        });
      }
    };
    // eslint-disable-next-line
  }, []);

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
};
