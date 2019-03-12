import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Logo from '../Logo';
import { Spacer, LoginForm } from '../../../../components';
import Login from '../Login';
import ApplyButton from '../ApplyButton';
import NavigationLinks from '../NavigationLinks';

import DrawerButton from './DrawerButton';
import MobileDrawer from './MobileDrawer';

import Divider from '@material-ui/core/Divider';

const MobileNav = ({ isAuthenticated, routes }) => {

	const [ drawerIsOpen, setDrawerIsOpen ] = useState(false);

	return (
		<>
			<MobileDrawer 
				isOpen={ drawerIsOpen }
				onClose={ () => setDrawerIsOpen(false) }
			>
				{ isAuthenticated ? '' : <LoginForm /> }
				<Divider />
				<NavigationLinks handleClick={() => setDrawerIsOpen(false)} routes={[ { name: 'Home', path: '/' }, ...routes]} />
			</MobileDrawer>

			<DrawerButton onClick={ () => setDrawerIsOpen(true) } />

			<Spacer />
			<Logo />
			<Spacer />
			{ isAuthenticated ? '' : <ApplyButton /> }
		</>
	);
};

MobileNav.propTypes = {
	isAuthenticated: PropTypes.bool.isRequired,
	routes: PropTypes.arrayOf(
		PropTypes.shape({ path: PropTypes.string.isRequired, name: PropTypes.string.isRequired })
	).isRequired
};

export default MobileNav;