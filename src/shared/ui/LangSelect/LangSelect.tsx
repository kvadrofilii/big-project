import { FC } from 'react';
import { cn } from 'shared/lib';
import css from './LangSelect.m.css';
import TranslateIcon from './translate.svg';
import { Button } from 'shared/ui';
import { useTranslation } from 'react-i18next';

interface LangSelectProps {
  className?: string;
}

export const LangSelect: FC<LangSelectProps> = ({ className, ...otherProps }) => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      variant="clear"
      className={cn([css.root, className])}
      type="button"
      onClick={toggleLanguage}
      {...otherProps}
    >
      <TranslateIcon />
    </Button>
  );
};
