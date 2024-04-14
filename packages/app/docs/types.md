# Объявление типов

- Типы и интерфейсы объявляются в отдельном файле с расширением types.ts
- К названию интерфейсов относящихся к стору Redux добавляется окончание Schema

## Реэкспорт типов в public api (в корневом index.ts)

```typescript
export type { Article } from './model/types/Article.types';
```

## Импорт типов

```typescript
import type { Article } from './Article.types';
```

## Настройка в tsconfig.json

```json
{
  "compilerOptions": {
    "isolatedModules": true
  }
}
```
