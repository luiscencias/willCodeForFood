import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Logo from '../Logo';
import { Spacer, LoginForm } from '../../../../components';
import NavigationLinks from '../NavigationLinks';
import Login from '../Login';
import LoginButton from '../LoginButton';
import ApplyButton from '../ApplyButton';

import Dialog from '@material-ui/core/Dialog';

const DesktopNav = ({ isAuthenticated, routes }) => {
	const [ loginModalIsVisible, setloginModalIsVisible ] = useState( false );

	return (
		<>
			<Logo />
			<Spacer />
			<NavigationLinks routes={routes} />
			{ isAuthenticated ? '' : <><LoginButton onClick={ () => setloginModalIsVisible(true) } /><ApplyButton /></> }
			<Dialog open={ loginModalIsVisible } onClose={ () => setloginModalIsVisible(false) }>
				<LoginForm />
			</Dialog>
		</>
	);
};

DesktopNav.propTypes = {
	isAuthenticated: PropTypes.bool.isRequired,
	routes: PropTypes.arrayOf(
		PropTypes.shape({ path: PropTypes.string.isRequired, name: PropTypes.string.isRequired })
	).isRequired
};

export default DesktopNav;