import { useCallback, useState, memo } from 'react';

import clsx from 'clsx';
import { useTranslation } from 'react-i18next';

import { getUserAuthData } from '@/entities/User';
import { LoginModal } from '@/features/AuthByUsername';
import { AvatarMenu } from '@/features/AvatarMenu';
import { NotificationButton } from '@/features/NotificationButton';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { useAppSelector } from '@/shared/lib';
import { Button, Flex, LangSelect, AppLink } from '@/shared/ui';

import css from './Header.m.css';

import type { HeaderProps } from './Header.types';

export const Header = memo(function Header({ className }: HeaderProps) {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = useAppSelector(getUserAuthData);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  return (
    <header data-testid="header" className={clsx(css.root, className)}>
      <Flex gap={2} align="center" justify="between" grow={1}>
        <AppLink className={css.logo} to="/">
          {t('FSD project')}
        </AppLink>
        <Flex gap={2} align="center">
          <LangSelect />
          <ThemeSwitcher />

          {authData ? (
            <>
              <NotificationButton />
              <AvatarMenu />
            </>
          ) : (
            <>
              <Button variant="contained" onClick={onShowModal}>
                {t('Enter')}
              </Button>
              {isAuthModal && <LoginModal isOpened={isAuthModal} onClose={onCloseModal} />}
            </>
          )}
        </Flex>
      </Flex>
    </header>
  );
});
