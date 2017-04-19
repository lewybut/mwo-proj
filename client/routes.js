import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import About from './components/About';
import Test from './components/Test';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={Test} />
		<Route path="/about" component={About} />
	</Route>
);
