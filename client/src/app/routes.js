import React from 'react';

import {
	Route,
	Switch
} from 'react-router-dom';

import { Home } from '../views/home';
import { NotFound } from '../views/notfound';
import { Gallery } from '../views/gallery';

export default () => (
	<Switch>
		<Route exact path="/" component={Home} />
		<Route exact path="/Gallery" component={Gallery} />
		<Route path="*" component={NotFound} />
	</Switch>
);