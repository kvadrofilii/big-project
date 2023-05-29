import { FC } from 'react';

import clsx from 'clsx';
import { useTranslation } from 'react-i18next';

import css from './ArticleImageBlock.m.css';

interface ArticleImageBlockProps {
  className?: string;
}

export const ArticleImageBlock: FC<ArticleImageBlockProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();

  return <div className={clsx(css.root, className)}></div>;
};
