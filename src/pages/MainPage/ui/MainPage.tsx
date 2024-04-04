import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

const MainPage = () => {
  const { t } = useTranslation('main-page');

  return <Page data-testid="MainPage">{t('MainPage')}</Page>;
};

export default MainPage;
