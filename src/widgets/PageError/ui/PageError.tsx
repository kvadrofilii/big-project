import { FC } from 'react';

import cn from 'classnames';
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
    <div className={cn(css.root, className)}>
      <p>{t('PageError')}</p>
      <button type="button" onClick={reloadPage}>
        {t('PageErrorBtn')}
      </button>
    </div>
  );
};
