import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App/App';
import Login from './components/Login/Login';
import Test from './components/Test';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={Test} />
		<Route path="/login" component={Login} />
	</Route>
);
