import clsx from 'clsx';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Flex } from '@/shared/ui';
import type { PageErrorProps } from './PageError.types';
import css from './PageError.m.css';

export const PageError: FC<PageErrorProps> = ({ className }) => {
  const { t } = useTranslation();

  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <Flex
      className={clsx(css.root, className)}
      direction="column"
      gap={2}
      justify="center"
    >
      <p>{t('PageError')}</p>
      <button
        type="button"
        onClick={reloadPage}
      >
        {t('PageErrorBtn')}
      </button>
    </Flex>
  );
};
