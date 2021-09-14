import React, { FC, useCallback, useState } from 'react';
import User from '../../models/user';
import SearchBar from './Bar';
import styles from './index.module.scss';
import SearchResults from './Results';

const Search: FC = () => {
  const [results, setResults] = useState<User[]>([]);

  const search = useCallback((searchTerm: string) => {
    fetch(`https://gorest.co.in/public/v1/users?name=${ searchTerm }`)
      .then(x => x.json())
      .then(x => setResults(x.data));
  }, []);

  return (
    <div className={ styles.container }>
      <SearchBar onSearch={ searchTerm => search(searchTerm) }/>
      <SearchResults results={ results }/>
    </div>
  );
};

export default Search;
