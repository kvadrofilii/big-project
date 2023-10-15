import { memo, useCallback, useState } from 'react';

import clsx from 'clsx';
import { NotificationList } from 'entities/Notification';
import Bell from 'shared/assets/icons/bell-fill.svg';
import { useDeviceDetect } from 'shared/lib';
import { IconButton, Popover, Drawer } from 'shared/ui';

import css from './NotificationButton.m.css';

import type { NotificationButtonProps } from './NotificationButton.types';

export const NotificationButton = memo(function NotificationButton(props: NotificationButtonProps) {
  const { className } = props;
  const isMobile = useDeviceDetect();
  const [isOpened, setIsOpened] = useState(false);

  const onOpenDrawer = useCallback(() => {
    setIsOpened(true);
  }, []);

  const onCloseDrawer = useCallback(() => {
    setIsOpened(false);
  }, []);

  return isMobile ? (
    <>
      <IconButton variant="clear" className={css.btn} onClick={onOpenDrawer}>
        <Bell />
      </IconButton>
      <Drawer isOpened={isOpened} onClose={onCloseDrawer}>
        <NotificationList />
      </Drawer>
    </>
  ) : (
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
