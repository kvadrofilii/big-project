import { memo } from 'react';

import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { IconButton } from 'shared/ui';

import css from './LangSelect.m.css';
import { LangSelectProps } from './LangSelect.types';
import TranslateIcon from './translate.svg';

export const LangSelect = memo(function LangSelect(props: LangSelectProps) {
  const { className, ...rest } = props;
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'ru' ? 'en' : 'ru';

    i18n.changeLanguage(newLanguage);
    document.documentElement.setAttribute('lang', newLanguage);
  };

  return (
    <IconButton
      variant="clear"
      className={clsx(css.root, className)}
      type="button"
      onClick={toggleLanguage}
      {...rest}
    >
      <TranslateIcon />
    </IconButton>
  );
});
