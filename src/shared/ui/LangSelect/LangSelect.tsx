import { FC } from 'react';

import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import { IconButton } from 'shared/ui';

import css from './LangSelect.m.css';
import TranslateIcon from './translate.svg';

interface LangSelectProps {
  className?: string;
}

export const LangSelect: FC<LangSelectProps> = ({ className, ...restProps }) => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'ru' ? 'en' : 'ru';

    i18n.changeLanguage(newLanguage);
    document.documentElement.setAttribute('lang', newLanguage);
  };

  return (
    <IconButton
      variant="clear"
      className={cn(css.root, className)}
      type="button"
      onClick={toggleLanguage}
      {...restProps}
    >
      <TranslateIcon />
    </IconButton>
  );
};
