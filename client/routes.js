import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App/App';
import Login from './components/Login/Login';
import Home from './components/Home/Home';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={Home} />
		<Route path="/login" component={Login} />
	</Route>
);
