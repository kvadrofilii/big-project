import clsx from 'clsx';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '~/widgets/Page';
import type { NotFoundPageProps } from './NotFoundPage.types';
import css from './NotFoundPage.m.css';

export const NotFoundPage: FC<NotFoundPageProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <Page
      className={clsx(css.root, className)}
      data-testid="NotFoundPage"
    >
      {t('404')}
    </Page>
  );
};
