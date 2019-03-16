import React from 'react';
import PropTypes from 'prop-types';

import { Route, Redirect } from 'react-router';


const ProtectedRoute = ({ isAuthenticated, component: Component, ...rest }) => (
	<Route
		{...rest}
		render={
			props => isAuthenticated ? 
				<Component {...props} /> : 
				<Redirect to={{
					pathname: "/login",
					state: { from: props.location }
				}} />
		}
	/>
);

ProtectedRoute.propTypes = {
	isAuthenticated: PropTypes.bool.isRequired,
	component: PropTypes.node.isRequired
};

export default ProtectedRoute;