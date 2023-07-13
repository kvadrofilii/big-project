import { memo, useMemo } from 'react';

import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { SortOrder } from 'shared/types';
import { Select, SelectOption } from 'shared/ui';

import css from './ArticleSortSelector.m.css';
import { ArticleSortSelectorProps } from './ArticleSortSelector.types';
import { ArticleSortField } from '../../model/types/article.types';

export const ArticleSortSelector = memo(function ArticleSortSelector(
  props: ArticleSortSelectorProps,
) {
  const { className, sort, order, onChangeOrder, onChangeSort } = props;
  const { t } = useTranslation();

  const orderOptions = useMemo<SelectOption<SortOrder>[]>(
    () => [
      {
        value: 'asc',
        content: t('ascending order'),
      },
      {
        value: 'desc',
        content: t('descending order'),
      },
    ],
    [t],
  );

  const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(
    () => [
      {
        value: 'createdAt',
        content: t('date of creation'),
      },
      {
        value: 'title',
        content: t('by name'),
      },
      {
        value: 'views',
        content: t('by views'),
      },
    ],
    [t],
  );

  return (
    <div className={clsx(css.root, className)}>
      <Select<ArticleSortField>
        label={t('Sort by')}
        options={sortFieldOptions}
        value={sort}
        onChange={onChangeSort}
      />
      <Select<SortOrder>
        label={t('by')}
        options={orderOptions}
        value={order}
        onChange={onChangeOrder}
      />
    </div>
  );
});
