import React from 'react';

import {
	Route,
	Switch
} from 'react-router-dom';

import { Home } from '../views/home';
import { NotFound } from '../views/notfound';

export default () => (
	<Switch>
		<Route exact path="/" component={Home} />
		<Route path="*" component={NotFound} />
	</Switch>
);