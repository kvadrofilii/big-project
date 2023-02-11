import { useTranslation } from 'react-i18next';

const AboutPage = () => {
  const { t } = useTranslation('about-page');

  return <div>{t('AboutPage')}</div>;
};

export default AboutPage;
