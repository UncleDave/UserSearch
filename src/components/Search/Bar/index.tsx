import { FC, FormEvent, useCallback, useState } from 'react';
import SearchBarButton from './Button';
import styles from './index.module.scss';
import SearchBarInput from './Input';

interface Props {
  onSearch: (searchTerm: string) => void;
}

const SearchBar: FC<Props> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const onSubmit = useCallback((event: FormEvent, searchTerm: string) => {
    event.preventDefault();

    if (searchTerm.length >= 3)
      onSearch(searchTerm);
  }, [onSearch]);

  return (
    <form className={ styles.form } onSubmit={ event => onSubmit(event, searchTerm) }>
      <SearchBarInput value={ searchTerm } onChange={ setSearchTerm }/>
      <SearchBarButton/>
    </form>
  );
};

export default SearchBar;
