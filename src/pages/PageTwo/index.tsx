import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import classes from './styles';

export const PageTwo: React.FC = () => {
  const navigation = useHistory();

  const handleButtonClick = useCallback(() => {
    navigation.push('/');
  }, [navigation]);

  return (
    <>
      <Header>
        <h1>Page Two</h1>
      </Header>
      <main className={classes.container()}>
        <Button onClick={handleButtonClick}>Go to PageOne</Button>
      </main>
    </>
  );
};
