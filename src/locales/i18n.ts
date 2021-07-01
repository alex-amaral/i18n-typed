import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import en from './en/translations.json';
import ptBR from './pt-BR/translations.json';
import { convertLanguageJsonToObject } from './translations';

const translations = {
  en: {
    translation: en,
  },
  'pt-BR': {
    translation: ptBR,
  },
};

convertLanguageJsonToObject(ptBR);

export const i18n = i18next.use(initReactI18next).use(LanguageDetector).init({
  resources: translations,
  fallbackLng: 'pt-BR',
});
