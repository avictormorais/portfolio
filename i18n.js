import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './src/locales/en.json';
import ptTranslation from './src/locales/pt.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      pt: {
        translation: ptTranslation,
      },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;