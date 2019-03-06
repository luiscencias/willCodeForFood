import React from 'react';

import {
	Route,
	Switch
} from 'react-router-dom';

import { Home } from '../views/home';
import { NotFound } from '../views/notfound';
import { About } from '../views/about';

export default () => (
	<Switch>
		<Route exact path="/" component={Home} />
		<Route exact path="/About" component={About} />
		<Route path="*" component={NotFound} />
	</Switch>
);