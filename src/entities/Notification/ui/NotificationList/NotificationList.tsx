import { memo } from 'react';

import clsx from 'clsx';
import { Flex, Skeleton } from 'shared/ui';

import css from './NotificationList.m.css';
import { useNotifications } from '../../api/notificationApi';
import { NotificationItem } from '../NotificationItem/NotificationItem';

import type { NotificationListProps } from './NotificationList.types';

export const NotificationList = memo(function NotificationList(props: NotificationListProps) {
  const { className } = props;
  const { data, isLoading } = useNotifications(null, {
    pollingInterval: 5000,
  });

  if (isLoading) {
    return (
      <Flex className={clsx(css.root, className)} direction="column" gap={1}>
        <Skeleton width="100%" height={40} />
        <Skeleton width="100%" height={40} />
        <Skeleton width="100%" height={40} />
      </Flex>
    );
  }

  return (
    <Flex className={clsx(css.root, className)} direction="column" gap={1}>
      {data?.map((item) => <NotificationItem key={item.id} item={item} />)}
    </Flex>
  );
});
