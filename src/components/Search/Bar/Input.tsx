import { TextField } from '@material-ui/core';
import { FC } from 'react';
import { useTranslation } from '../../../contexts/LocaleContext';

interface Props {
  value: string;
  onChange: (value: string) => void;
}

const SearchBarInput: FC<Props> = ({ value, onChange }) => {
  const label = useTranslation('usernameInputLabel');

  return <TextField
    type="text"
    label={ label }
    variant="outlined"
    value={ value }
    onChange={ event => onChange(event.target.value) }
    fullWidth
  />;
};

export default SearchBarInput;
