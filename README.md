# Архитектура

## Feature-Sliced Design

Архитектура приложения строится на принципах Feature-Sliced Design.
Подробнее по ссылке https://feature-sliced.design/ru/

## Code style guide

### Объявление типов

- Типы и интерфейсы объявляются в отдельном файле с расширением types.ts
- К названию интерфейсов относящихся к стору Redux добавляется окончание Schema

### Реэкспорт типов в public api (в корневом index.ts)

```typescript
export type { Article } from './model/types/Article.types';
```

### Импорт типов

```typescript
import type { Article } from './Article.types';
```

### Настройка в tsconfig.json

```json
{
  "compilerOptions": {
    "isolatedModules": true
  }
}
```

### Spacing

Почему нужно использовать расстояния кратные 8:
https://m2.material.io/design/layout/understanding-layout.html

## Styles

Для стилизации приложения используем css-modules.
Желательно использовать нативный css и css-variables.
Все css-стили проходят обработку через PostCSS (https://postcss.org/).

Стили пишем в файле с расширение `m.css`.

## В проекте используется RTK Query для запросов к бэку

Инициализация API `shared/api/rtkApi.ts`
https://redux-toolkit.js.org/rtk-query/api/createApi

В каждом слайсе создаются свои эндпоинты, которые подключаются асинхронно через injectEndpoints
https://redux-toolkit.js.org/rtk-query/usage/code-splitting

## Асинхронная подгрузка редюсеров

### Менеджер редюсеров

`app/providers/StoreProvider/config/reducerManager.ts`
https://redux.js.org/api/combinereducers

### Объявление редюсеров

`app/providers/StoreProvider/config/store.ts`

```typescript
const rootReducers: ReducersMapObject<StateSchema> = {
  ...asyncReducers, // Подключение асинхронных редюсеров
  user: userReducer, // Подключение не асинхронных редюсеров
  [rtkApi.reducerPath]: rtkApi.reducer, // Подключение RTK Query
};
```

### Объявление схем для редюсеров

`app/providers/StoreProvider/config/StateSchema.ts`

```typescript
export interface StateSchema {
  // Не асинхронные редюсеры
  user: UserSchema;
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;

  // Асинхронные редюсеры
  loginForm?: LoginSchema;
}
```

### Подключение асинхронного редюсера

```typescript
const reducers: ReducersList = {
  profile: profileReducer,
};

<DynamicReducerLoader reducers={reducers}>
	// Ваш код...
</DynamicReducerLoader>
```
