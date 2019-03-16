import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Logo from '../Logo';
import { Spacer } from '../../../../components';
import NavigationLinks from '../NavigationLinks';
import LoginButton from '../LoginButton';
import ApplyButton from '../ApplyButton';

import Dialog from '@material-ui/core/Dialog';

const DesktopNav = ({ isAuthenticated, routes }) => (
	<>
		<Logo />
		<Spacer />
		<NavigationLinks routes={routes} />
		{ isAuthenticated ? '' : <LoginButton /> }
	</>
);

DesktopNav.propTypes = {
	isAuthenticated: PropTypes.bool.isRequired,
	routes: PropTypes.arrayOf(
		PropTypes.shape({ path: PropTypes.string.isRequired, name: PropTypes.string.isRequired })
	).isRequired
};

export default DesktopNav;