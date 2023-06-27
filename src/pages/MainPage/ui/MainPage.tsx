import { useTranslation } from 'react-i18next';
import { Page } from 'shared/ui';

const MainPage = () => {
  const { t } = useTranslation('main-page');

  return <Page>{t('MainPage')}</Page>;
};

export default MainPage;
