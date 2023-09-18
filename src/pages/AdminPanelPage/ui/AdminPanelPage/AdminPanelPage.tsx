import { FC, memo } from 'react';

import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page';

import css from './AdminPanelPage.m.css';

import type { AdminPanelPageProps } from './AdminPanelPage.types';

const AdminPanelPage: FC<AdminPanelPageProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation('article');

  return (
    <Page className={clsx(css.root, className)}>
      {/*<ArticleDetailsPageHeader />
      <ArticleDetails id={id} />
      <ArticlesRecommendationsList />
      <ArticleComments id={id} />*/}
    </Page>
  );
};

export default memo(AdminPanelPage);
