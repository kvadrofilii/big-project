# Storybook

В проекте для каждого компонента описываются стори-кейсы.
Запросы на сервер мокаются с помощью storybook-addon-mock.

Файл со стори-кейсами создаём рядом с компонентом с расширением .stories.tsx

Запустить сторибук можно командой: `npm run storybook`

Пример:

```typescript
import { Meta, StoryObj } from '@storybook/react';

import { Card } from './Card';

const meta = {
  title: 'shared/Card',
  component: Card,
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Welcome to the Hell!',
  },
};
```
