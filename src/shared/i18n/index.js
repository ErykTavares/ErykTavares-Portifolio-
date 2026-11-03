import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import { resources } from './languages';

i18n.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources,
		compatibilityJSON: 'v3',
		fallbackLng: 'pt',
		defaultNS: 'translation',
		ns: ['translation'],
		interpolation: {
			escapeValue: false
		},
		detection: {
			order: ['localStorage', 'navigator', 'htmlTag'],
			caches: ['localStorage'],

			lookupLocalStorage: 'portfolio_lang'
		}
	})
	.catch(() => undefined);

export default i18n;
