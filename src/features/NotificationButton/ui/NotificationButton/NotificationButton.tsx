import { memo, useCallback, useState } from 'react';

import clsx from 'clsx';

import { NotificationList } from '@/entities/Notification';
import Bell from '@/shared/assets/icons/bell-fill.svg';
import { useDeviceDetect } from '@/shared/lib';
import { AnimationProvider } from '@/shared/lib/components/AnimationProvider';
import { IconButton, Popover, Drawer } from '@/shared/ui';

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
      <IconButton tag="span" variant="clear" className={css.btn} onClick={onOpenDrawer}>
        <Bell />
      </IconButton>
      <AnimationProvider>
        <Drawer isOpened={isOpened} onClose={onCloseDrawer}>
          <NotificationList />
        </Drawer>
      </AnimationProvider>
    </>
  ) : (
    <Popover
      className={clsx(className)}
      direction="bottom left"
      trigger={
        <IconButton tag="span" variant="clear" className={css.btn}>
          <Bell />
        </IconButton>
      }
    >
      <NotificationList className={css.notifications} />
    </Popover>
  );
});
