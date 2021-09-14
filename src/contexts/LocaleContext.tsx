import { createContext, FC, useContext, useState } from 'react';
import Locale from '../models/locale';

export const availableLocales: Locale[] = [{
  code: 'gb',
  name: 'ENG'
}, {
  code: 'dk',
  name: 'DK'
}];

interface LocaleData {
  activeLocale: Locale;
  setActiveLocale: (locale: Locale) => void;
}

export const LocaleContext = createContext<LocaleData>({
  activeLocale: availableLocales[0],
  setActiveLocale: () => { }
});

export const LocaleProvider: FC = ({ children }) => {
  const [activeLocale, setActiveLocale] = useState(availableLocales[0]);

  return (
    <LocaleContext.Provider
      value={ {
        activeLocale,
        setActiveLocale
      } }
    >
      { children }
    </LocaleContext.Provider>
  );
};

interface LocalisedStrings {
  usernameInputLabel: string;
  searchButtonText: string;
  emailLabel: string;
  genderLabel: string;
}

const localisedStrings: Record<string, LocalisedStrings> = {
  gb: {
    usernameInputLabel: 'Username',
    searchButtonText: 'Search',
    emailLabel: 'Email',
    genderLabel: 'Gender'
  },
  dk: {
    usernameInputLabel: 'Brugernavn',
    searchButtonText: 'Søg',
    emailLabel: 'Email',
    genderLabel: 'Køn'
  }
};

export const useTranslation = (key: keyof LocalisedStrings) => {
  const { activeLocale } = useContext(LocaleContext);
  const stringSet = localisedStrings[activeLocale.code];

  return stringSet[key];
};
