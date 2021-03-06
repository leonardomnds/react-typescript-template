import { Switch } from 'react-router-dom';

import { CustomRoute as Route } from './CustomRoute';

import { PageOne } from '../pages/PageOne';
import { PageTwo } from '../pages/PageTwo';

export const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={PageOne} />
      <Route path="/another-page" component={PageTwo} />
    </Switch>
  );
};
