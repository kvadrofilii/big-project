import { FC } from 'react';

import clsx from 'clsx';
import { useTranslation } from 'react-i18next';

import css from './PageError.m.css';

interface PageErrorProps {
  className?: string;
}

export const PageError: FC<PageErrorProps> = ({ className }) => {
  const { t } = useTranslation();

  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <div className={clsx(css.root, className)}>
      <p>{t('PageError')}</p>
      <button type="button" onClick={reloadPage}>
        {t('PageErrorBtn')}
      </button>
    </div>
  );
};
