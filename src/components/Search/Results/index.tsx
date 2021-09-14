import { Paper } from '@material-ui/core';
import { FC } from 'react';
import User from '../../../models/user';
import styles from './index.module.scss';
import Result from './Result';

interface Props {
  results: User[];
}

const SearchResults: FC<Props> = ({ results }) => (
  <Paper className={ styles.container } elevation={ 3 } variant="outlined">
    { results.map(x => <Result key={ x.id } user={ x }/>) }
  </Paper>
);

export default SearchResults;
