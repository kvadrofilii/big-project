import { FC } from 'react';

import clsx from 'clsx';
import { useTranslation } from 'react-i18next';

import css from './ArticleCodeBlock.m.css';

interface ArticleCodeBlockProps {
  className?: string;
}

export const ArticleCodeBlock: FC<ArticleCodeBlockProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();

  return <div className={clsx(css.root, className)}></div>;
};
