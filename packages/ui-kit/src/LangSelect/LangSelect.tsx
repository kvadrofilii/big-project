import clsx from 'clsx';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { IconButton } from '../IconButton/IconButton';
import TranslateIcon from './translate.svg';
import css from './LangSelect.m.css';

type Props = {
  className?: string;
};

export const LangSelect = memo(function LangSelect(props: Props) {
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
