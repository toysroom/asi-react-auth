import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import {
	format as formatDate,
	formatRelative,
	formatDistance,
	isDate
} from "date-fns";
import { enGB, it } from "date-fns/locale";

const locales = { enGB, it };

import Backend from 'i18next-http-backend';
// import LanguageDetector from 'i18next-browser-languagedetector';
// don't want to use this?
// have a look at the Quick start guide 
// for passing in lng and translations on init

i18n
  // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
  // learn more: https://github.com/i18next/i18next-http-backend
  // want your translations to be loaded from a professional CDN? => https://github.com/locize/react-tutorial#step-2---use-the-locize-cdn
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  // .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    lng: "it",
    debug: true,
    fallbackLng: "it",
    interpolation: {
      escapeValue: false,
      format: (value, rawFormat, lng) => {
        const [format, ...additionalValues] = rawFormat.split(',').map((v) => v.trim());

				if (isDate(value)) {
					const locale = locales[lng];

					if (format === "short")
						return formatDate(value, "P", { locale });
					if (format === "long")
						return formatDate(value, "PPPP", { locale });
					if (format === "relative")
						return formatRelative(value, new Date(), { locale });
					if (format === "ago")
						return formatDistance(value, new Date(), {
							locale,
							addSuffix: true
						});

					return formatDate(value, format, { locale });
				}

        if (format === 'currency') 
        {
          return Intl.NumberFormat(lng, {
            style: 'currency',
            currency: additionalValues[0]
          }).format(value);
        }
  
				return value;
			} // not needed for react as it escapes by default
    },
    react: {
      useSuspense: false
    }
  });

export default i18n;