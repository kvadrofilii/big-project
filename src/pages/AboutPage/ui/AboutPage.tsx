import { useTranslation } from 'react-i18next';
import { Page } from 'shared/ui';

const AboutPage = () => {
  const { t } = useTranslation('about-page');

  return <Page>{t('AboutPage')}</Page>;
};

export default AboutPage;
