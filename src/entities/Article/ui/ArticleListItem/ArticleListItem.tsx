import { memo } from 'react';

import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import Eye from 'shared/assets/icons/eye.svg';
import { RoutePath } from 'shared/config';
import { AppLink, Avatar, Card, CardAction, Heading, Text } from 'shared/ui';

import css from './ArticleListItem.m.css';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

import type { ArticleListItemProps } from './ArticleListItem.types';
import type { ArticleTextBlock } from '../../model/types/article.types';

export const ArticleListItem = memo(function ArticleListItem(props: ArticleListItemProps) {
  const { className, article, view, target } = props;
  const { t } = useTranslation('article');

  const types = <Text ellipsis>{article.type.join(', ')}</Text>;
  const views = (
    <div className={css['views-wrapper']}>
      <Text>{String(article.views)}</Text>
      <Eye className={css.eye} />
    </div>
  );

  if (view === 'list') {
    const textBlock = article.blocks.find((block) => block.type === 'text') as ArticleTextBlock;

    return (
      <div className={clsx(className, css[view])}>
        <Card className={css.card}>
          <div className={css.header}>
            <Avatar size={30} alt={article.user.username} src={article.user.avatar} />
            <Text className={css.create}>{article.user.username}</Text>
            <Text className={css.create}>{article.createdAt}</Text>
          </div>
          <Heading variant="h3" ellipsis>
            {article.title}
          </Heading>
          {types}
          <img src={article.img} className={css.img} alt={article.title} />
          {textBlock && <ArticleTextBlockComponent className={css.text} block={textBlock} />}
          <div className={css.footer}>
            <AppLink target={target} variant="outlined" color="primary" to={RoutePath.article_details + article.id}>
              {t('Read more')}
            </AppLink>
            {views}
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className={clsx(className, css[view])}>
      <Card>
        <CardAction target={target} to={RoutePath.article_details + article.id}>
          <div className={css['img-wrapper']}>
            <img src={article.img} className={css.img} alt={article.title} />
            <Text className={css.create}>{article.createdAt}</Text>
          </div>
          <div className={css['info-wrapper']}>
            {types}
            {views}
          </div>
          <Heading variant="h3" ellipsis>
            {article.title}
          </Heading>
        </CardAction>
      </Card>
    </div>
  );
});
