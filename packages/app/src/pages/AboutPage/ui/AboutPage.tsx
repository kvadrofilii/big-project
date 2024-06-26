import { useTranslation } from 'react-i18next';
import { Page } from '~/widgets/Page';

const AboutPage = () => {
  const { t } = useTranslation('about-page');

  return <Page data-testid="AboutPage">{t('AboutPage')}</Page>;
};

export default AboutPage;
