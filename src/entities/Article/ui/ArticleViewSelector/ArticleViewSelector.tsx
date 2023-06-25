import { memo } from 'react';

import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import GridIcon from 'shared/assets/icons/grid-3x3-gap.svg';
import ListIcon from 'shared/assets/icons/list.svg';
import { IconButton } from 'shared/ui';

import css from './ArticleViewSelector.m.css';
import { ArticleViewSelectorProps, ViewTypes } from './ArticleViewSelector.types';
import { ArticleView } from '../../model/types/article.types';

const viewTypes: ViewTypes[] = [
  {
    view: 'grid',
    icon: <GridIcon />,
  },
  {
    view: 'list',
    icon: <ListIcon />,
  },
];

export const ArticleViewSelector = memo(function ArticleViewSelector(
  props: ArticleViewSelectorProps,
) {
  const { className, view, onViewClick } = props;
  const { t } = useTranslation();

  const onClick = (newView: ArticleView) => () => {
    onViewClick?.(newView);
  };

  return (
    <div className={clsx(css.root, className)}>
      {viewTypes.map((viewType: ViewTypes) => (
        <IconButton
          key={viewType.view}
          className={clsx(css.button, {
            [css['not-selected']]: viewType.view !== view,
          })}
          onClick={onClick(viewType.view)}
        >
          {viewType.icon}
        </IconButton>
      ))}
    </div>
  );
});
