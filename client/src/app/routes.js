import React from 'react';

import {
    Route,
    Switch
} from 'react-router-dom';

import { ProtectedRoute } from '../components';

import { Home } from '../views/home';
import { NotFound } from '../views/notfound';
import { About } from '../views/about';
import { Gallery } from '../views/gallery';
import { Login } from '../views/login';
import {Apply} from "../views/application";
import { Membership } from '../views/membership';
import { Shop } from '../views/shop';

export default () => (
	<Switch>
		<Route exact path="/" component={Home} />
		<Route path="/About" component={About} />
		<Route path="/gallery" component={Gallery} />
		<ProtectedRoute path="/dashboard" component={() => (<div />)} />
		<Route path="/login" component={Login} />
		<Route path="/membership" component={Membership} />
		<Route path="/shop" component={Shop} />


        /* 	keep not found route below everything else	*/
        <Route path="*" component={NotFound} />
    </Switch>
);