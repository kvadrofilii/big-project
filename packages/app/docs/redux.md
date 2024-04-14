# Документация по работе с данными

По возможности переиспользуемые сущности необходимо нормализовать с помощью EntityAdapter

Запросы на сервер отправляются с помощью [RTK query](/src/shared/api/rtkApi.ts)

Ссылка на документацию - [RTK query](https://redux-toolkit.js.org/rtk-query/api/createApi)

## Асинхронная подгрузка редюсеров

В каждом слайсе создаются свои эндпоинты, которые подключаются асинхронно через injectEndpoints (чтобы не тянуть их в общий бандл).

Ссылка на документацию - [injectEndpoints](https://redux-toolkit.js.org/rtk-query/usage/code-splitting)

## Подключение асинхронного редюсера

Для асинхронного подключения редюсеров используется
[DynamicModuleLoader](/src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx)

```typescript
const reducers: ReducersList = {
  profile: profileReducer,
};

<DynamicReducerLoader reducers={reducers}>
  // Ваш код...
</DynamicReducerLoader>
```

## Менеджер редюсеров

`/src/app/providers/StoreProvider/config/reducerManager.ts`
Ссылка на документацию - [reducerManager](https://redux.js.org/api/combinereducers)

## Объявление редюсеров

`/src/app/providers/StoreProvider/config/store.ts`

```typescript
const rootReducers: ReducersMapObject<StateSchema> = {
  ...asyncReducers, // Подключение асинхронных редюсеров
  user: userReducer, // Подключение не асинхронных редюсеров
  [rtkApi.reducerPath]: rtkApi.reducer, // Подключение RTK Query
};
```

## Объявление схем для редюсеров

`/src/app/providers/StoreProvider/config/StateSchema.ts`

```typescript
export type StateSchema = {
  // Не асинхронные редюсеры
  user: UserSchema;
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;

  // Асинхронные редюсеры
  loginForm?: LoginSchema;
};
```
