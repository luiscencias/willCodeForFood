import React from 'react';

import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

import { ProtectedRoute } from '../components';

import { Home } from '../views/home';
import { NotFound } from '../views/notfound';
import { About } from '../views/about';
import { Gallery } from '../views/gallery';
import { Login } from '../views/login';
import { Membership } from '../views/membership';
import { Apply } from '../views/application';
import { Shop } from '../views/shop';
import { Events } from '../views/events';

export default () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/About" component={About} />
        <Route path="/gallery" component={Gallery} />
        <ProtectedRoute path="/dashboard" component={() => (<div />)} />
        <Route path="/login" component={Login} />
        <Route path="/membership" component={Membership} />
        <Route path="/membership-application" component={Apply} />
        <Route path="/shop" component={Shop} />
        <Route path="/events" component={Events} />

        /* 	keep not found route below everything else	*/
        <Route component={NotFound} />
    </Switch>
);