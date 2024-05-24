import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import en_US from './locales/en_US.json';
import zh_CN from './locales/zh_CN.json';

i18n
	.use(initReactI18next)
	.use(LanguageDetector)
	.init({
		resources: {
			en: { translation: en_US },
			zh: { translation: zh_CN }
		},
		fallbackLng: 'zh',
		preload: ['en', 'zh'],
		interpolation: {
			escapeValue: false
		}
	});

export default i18n;
