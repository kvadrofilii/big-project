/* eslint-disable import/no-named-as-default-member */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const ns = ['translation', 'main-page', 'about-page', 'profile', 'article'];
const supportedLngs = ['ru', 'en'];
const resources = ns.reduce((acc, n) => {
  supportedLngs.forEach((lng) => {
    // @ts-ignore
    if (!acc[lng]) acc[lng] = {};
    // @ts-ignore
    acc[lng] = {
      // @ts-ignore
      ...acc[lng],
      [n]: require(`../../../../public/locales/${lng}/${n}.json`),
    };
  });

  return acc;
}, {});

i18n.use(initReactI18next).init({
  lng: 'ru',
  fallbackLng: 'ru',
  debug: false,
  defaultNS: 'translation',
  ns,
  interpolation: {
    escapeValue: false,
  },
  supportedLngs,
  resources,
  returnNull: false,
});

export default i18n;
