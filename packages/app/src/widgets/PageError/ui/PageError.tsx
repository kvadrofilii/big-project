import clsx from 'clsx';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Flex } from '~/shared/ui';
import css from './PageError.m.css';

type Props = {
  className?: string;
};

export const PageError: FC<Props> = ({ className }) => {
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
