import { memo } from 'react';

import clsx from 'clsx';
import { useTranslation } from 'react-i18next';

import css from './LangSelect.m.css';
import TranslateIcon from './translate.svg';

import type { LangSelectProps } from './LangSelect.types';
import { IconButton } from '../IconButton/IconButton';

export const LangSelect = memo(function LangSelect(props: LangSelectProps) {
  const { className, ...rest } = props;
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'ru' ? 'en' : 'ru';

    i18n.changeLanguage(newLanguage);
    document.documentElement.setAttribute('lang', newLanguage);
  };

  return (
    <IconButton variant="clear" className={clsx(css.root, className)} type="button" onClick={toggleLanguage} {...rest}>
      <TranslateIcon />
    </IconButton>
  );
});
