import { memo } from 'react';

import clsx from 'clsx';

import { Card, Heading, Text, CardAction } from '@/shared/ui';

import css from './NotificationItem.m.css';

import type { NotificationItemProps } from './NotificationItem.types';

export const NotificationItem = memo(function NotificationItem(props: NotificationItemProps) {
  const { className, item } = props;

  const content = (
    <>
      <Heading variant="h4" ellipsis>
        {item.title}
      </Heading>
      <Text>{item.description}</Text>
    </>
  );

  if (item.href) {
    return (
      <Card className={clsx(css.root, className)}>
        <CardAction target="_blank" to={item.href}>
          {content}
        </CardAction>
      </Card>
    );
  }

  return <Card className={clsx(css.root, className)}>{content}</Card>;
});
