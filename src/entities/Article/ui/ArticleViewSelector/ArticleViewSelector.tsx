import { memo } from 'react';

import clsx from 'clsx';
import GridIcon from 'shared/assets/icons/grid-3x3-gap-fill.svg';
import ListIcon from 'shared/assets/icons/menu.svg';
import { IconButton } from 'shared/ui';

import css from './ArticleViewSelector.m.css';

import type { ArticleViewSelectorProps, ViewTypes } from './ArticleViewSelector.types';
import type { ArticleView } from '../../model/types/article.types';

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

export const ArticleViewSelector = memo(function ArticleViewSelector(props: ArticleViewSelectorProps) {
  const { className, view, onViewClick } = props;

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
