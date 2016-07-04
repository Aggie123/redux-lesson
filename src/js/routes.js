import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import App from './containers/App'
import Todos from './containers/Todos'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Todos} />
    <Route path="todos" component={Todos} />
  </Route>
);
