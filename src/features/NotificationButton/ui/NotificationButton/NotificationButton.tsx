import { memo } from 'react';

import clsx from 'clsx';
import { NotificationList } from 'entities/Notification';
import Bell from 'shared/assets/icons/bell-fill.svg';
import { IconButton, Popover } from 'shared/ui';

import css from './NotificationButton.m.css';

import type { NotificationButtonProps } from './NotificationButton.types';

export const NotificationButton = memo(function NotificationButton(props: NotificationButtonProps) {
  const { className } = props;

  return (
    <Popover
      className={clsx(className)}
      direction="bottom left"
      trigger={
        <IconButton variant="clear" className={css.btn}>
          <Bell />
        </IconButton>
      }
    >
      <NotificationList className={css.notifications} />
    </Popover>
  );
});
