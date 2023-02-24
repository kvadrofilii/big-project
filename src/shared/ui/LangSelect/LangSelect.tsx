import { FC } from 'react';

import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui';

import css from './LangSelect.m.css';
import TranslateIcon from './translate.svg';

interface LangSelectProps {
  className?: string;
}

export const LangSelect: FC<LangSelectProps> = ({ className, ...otherProps }) => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      variant="clear"
      className={cn(css.root, className)}
      type="button"
      onClick={toggleLanguage}
      {...otherProps}
    >
      <TranslateIcon />
    </Button>
  );
};
