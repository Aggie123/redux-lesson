import React from 'react';
import ReactDOM,{render} from 'react-dom';
import { Router, browserHistory } from 'react-router'
import { createStore } from 'redux'
import { Provider } from 'react-redux';

import routes from './routes'
import Todos from './reducers/index'

let store = createStore(Todos);

render(
	<Provider store={store}>
		<Router history={browserHistory} routes={routes} />
	</Provider>,
	document.getElementById('app')
	);