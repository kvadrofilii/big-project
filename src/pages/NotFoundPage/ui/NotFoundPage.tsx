import { FC } from 'react';

import clsx from 'clsx';
import { useTranslation } from 'react-i18next';

import { Page } from '@/widgets/Page';

import css from './NotFoundPage.m.css';

import type { NotFoundPageProps } from './NotFoundPage.types';

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
