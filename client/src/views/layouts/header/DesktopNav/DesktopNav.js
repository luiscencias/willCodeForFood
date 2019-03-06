import React from 'react';
import PropTypes from 'prop-types';

import Logo from '../Logo';
import { Spacer } from '../../../../components';
import NavigationLinks from '../NavigationLinks';
import Login from '../Login';
import ApplyButton from '../ApplyButton';

const DesktopNav = ({ isAuthenticated, routes }) => (
	<>
		<Logo />
		<Spacer />
		<NavigationLinks routes={routes} />
		{ isAuthenticated ? '' : <><Login /><ApplyButton /></> }
	</>
);

DesktopNav.propTypes = {
	isAuthenticated: PropTypes.bool.isRequired,
	routes: PropTypes.arrayOf(
		PropTypes.shape({ path: PropTypes.string.isRequired, name: PropTypes.string.isRequired })
	).isRequired
};

export default DesktopNav;