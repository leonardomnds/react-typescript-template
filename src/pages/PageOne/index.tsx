import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import classes from './styles';

export const PageOne: React.FC = () => {
  const navigation = useHistory();

  const handleButtonClick = useCallback(() => {
    navigation.push('/another-page');
  }, [navigation]);

  return (
    <>
      <Header>
        <h1>Page One</h1>
      </Header>
      <main className={classes.container()}>
        <Button onClick={handleButtonClick}>Go to PageTwo</Button>
      </main>
    </>
  );
};
