import { Button } from '@material-ui/core';
import { FC } from 'react';
import { useTranslation } from '../../../contexts/LocaleContext';
import styles from './Button.module.scss';

const SearchBarButton: FC = () => {
  const text = useTranslation('searchButtonText');

  return <Button className={ styles.button } color="primary" type="submit" variant="outlined">{ text }</Button>;
};

export default SearchBarButton;
