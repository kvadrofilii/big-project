import clsx from 'clsx';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '~/widgets/Page';
import type { AdminPanelPageProps } from './AdminPanelPage.types';
import css from './AdminPanelPage.m.css';

const AdminPanelPage: FC<AdminPanelPageProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <Page
      className={clsx(css.root, className)}
      data-testid="AdminPanelPage"
    >
      {t('Admin panel')}
    </Page>
  );
};

export default memo(AdminPanelPage);
