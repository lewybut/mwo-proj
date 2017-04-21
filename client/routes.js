import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App/App';
import Login from './components/Login/Login';
import HomeContainer from './containers/HomeConatainer/HomeConatainer';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={HomeContainer} />
		<Route path="/login" component={Login} />
	</Route>
);
