import React from 'react';
import { Route, Switch } from 'react-router-dom';

import MainPage from './Pages/Main';

const Routes = () => (
  <Switch>
    <Route path="/" component={MainPage} />
  </Switch>
);

export default Routes;
