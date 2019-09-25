import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Main from './pages/Main';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
