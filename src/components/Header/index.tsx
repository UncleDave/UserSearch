import { FC, useCallback, useContext, useState } from 'react';
import { availableLocales, LocaleContext } from '../../contexts/LocaleContext';
import Locale from '../../models/locale';
import LanguagePicker from './LanguagePicker';

const Header: FC = () => {
  const { activeLocale, setActiveLocale } = useContext(LocaleContext);
  const [languagePickerIsOpen, setLanguagePickerIsOpen] = useState(false);

  const onLanguagePickerClick = useCallback(() => {
    setLanguagePickerIsOpen(prev => !prev);
  }, []);

  const onLanguagePickerSelect = useCallback((locale: Locale) => {
    setActiveLocale(locale);
    setLanguagePickerIsOpen(false);
  }, [setActiveLocale]);

  return (
    <LanguagePicker
      selectedLocale={ activeLocale }
      availableLocales={ availableLocales }
      isOpen={ languagePickerIsOpen }
      onClick={ onLanguagePickerClick }
      onSelect={ onLanguagePickerSelect }
    />
  );
};

export default Header;
