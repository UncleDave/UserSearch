import { Button, ListItemIcon, Menu, MenuItem, Typography } from '@material-ui/core';
import { FC, useRef } from 'react';
import Locale from '../../models/locale';

interface FlagProps {
  locale: Locale;
}

const Flag: FC<FlagProps> = ({ locale }) => (
  <img src={ `https://www.countryflags.io/${ locale.code }/flat/24.png` } alt={ locale.name }/>
);

interface LanguagePickerProps {
  selectedLocale: Locale;
  availableLocales: Locale[];
  isOpen: boolean;
  onClick: () => void;
  onSelect: (locale: Locale) => void;
}

const LanguagePicker: FC<LanguagePickerProps> = ({ selectedLocale, availableLocales, isOpen, onClick, onSelect }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <Button
        ref={ buttonRef }
        startIcon={ <Flag locale={ selectedLocale }/> }
        onClick={ onClick }
      >
        { selectedLocale.name }
      </Button>
      <Menu
        anchorEl={ buttonRef.current }
        open={ isOpen }
        onClose={ onClick }
      >
        {
          availableLocales.map(x => (
            <MenuItem key={ x.code } onClick={ () => onSelect(x) }>
              <ListItemIcon>
                <Flag locale={ x }/>
              </ListItemIcon>
              <Typography variant="inherit">{ x.name }</Typography>
            </MenuItem>
          ))
        }
      </Menu>
    </>
  );
};

export default LanguagePicker;
