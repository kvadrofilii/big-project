import { memo } from 'react';

import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { Page } from 'widgets/Page';

import { ArticleEditPageProps } from './ArticleEditPage.types';

const ArticleEditPage = memo(function ArticleEditPage(props: ArticleEditPageProps) {
  const { className } = props;
  const { t } = useTranslation('article');
  const { id } = useParams<{ id: string }>();
  const isEdit = Boolean(id);

  return (
    <Page className={clsx(className)}>
      {isEdit ? t('Editing an article with an id') + id : t('Creating a new article')}
    </Page>
  );
});

export default ArticleEditPage;
