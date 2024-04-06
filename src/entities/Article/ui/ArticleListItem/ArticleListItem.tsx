import clsx from 'clsx';
import { memo, type HTMLAttributeAnchorTarget } from 'react';
import { useTranslation } from 'react-i18next';
import Eye from '@/shared/assets/icons/eye.svg';
import { getRouteArticleDetails } from '@/shared/consts/route';
import { AppLink, Avatar, Card, CardAction, Heading, Text } from '@/shared/ui';
import type { ArticleTextBlock, Article, ArticleView } from '../../model/types/article.types';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import css from './ArticleListItem.m.css';

type Props = {
  className?: string;
  article: Article;
  view: ArticleView;
  target?: HTMLAttributeAnchorTarget;
};

export const ArticleListItem = memo(function ArticleListItem(props: Props) {
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
            <Avatar
              size={30}
              alt={article.user.username}
              src={article.user.avatar}
            />
            <Text className={css.create}>{article.user.username}</Text>
            <Text className={css.create}>{article.createdAt}</Text>
          </div>
          <Heading
            variant="h3"
            ellipsis
          >
            {article.title}
          </Heading>
          {types}
          <img
            src={article.img}
            className={css.img}
            alt={article.title}
          />
          {textBlock && (
            <ArticleTextBlockComponent
              className={css.text}
              block={textBlock}
            />
          )}
          <div className={css.footer}>
            <AppLink
              target={target}
              variant="outlined"
              color="primary"
              to={getRouteArticleDetails(article.id)}
            >
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
        <CardAction
          target={target}
          to={getRouteArticleDetails(article.id)}
        >
          <div className={css['img-wrapper']}>
            <img
              src={article.img}
              className={css.img}
              alt={article.title}
            />
            <Text className={css.create}>{article.createdAt}</Text>
          </div>
          <div className={css['info-wrapper']}>
            {types}
            {views}
          </div>
          <Heading
            variant="h3"
            ellipsis
          >
            {article.title}
          </Heading>
        </CardAction>
      </Card>
    </div>
  );
});
