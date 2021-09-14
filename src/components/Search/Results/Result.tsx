import { Avatar, Card, CardContent, CardHeader, Typography } from '@material-ui/core';
import { FC } from 'react';
import { useTranslation } from '../../../contexts/LocaleContext';
import User from '../../../models/user';
import styles from './Result.module.scss';

interface Props {
  user: User;
}

const SearchResultsResult: FC<Props> = ({ user }) => {
  const emailLabel = useTranslation('emailLabel');
  const genderLabel = useTranslation('genderLabel');

  return (
    <Card className={ styles.container } elevation={ 3 }>
      <CardHeader
        avatar={
          <Avatar/>
        }
        title={ user.name }
      >
      </CardHeader>
      <CardContent className={ styles.content }>
        <Typography variant="caption">{ emailLabel }: { user.email }</Typography>
        <Typography variant="caption">{ genderLabel }: { user.gender }</Typography>

        <div className={ styles.status }>
          <Typography className={ user.status === 'active' ? styles.statusActive : styles.statusInactive } variant="h6">
            { user.status }
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default SearchResultsResult;
