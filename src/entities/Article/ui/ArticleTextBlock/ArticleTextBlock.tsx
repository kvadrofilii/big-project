import { FC } from 'react';

import clsx from 'clsx';
import { useTranslation } from 'react-i18next';

import css from './ArticleTextBlock.m.css';

interface ArticleTextBlockProps {
  className?: string;
}

export const ArticleTextBlock: FC<ArticleTextBlockProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();

  return <div className={clsx(css.root, className)}></div>;
};
