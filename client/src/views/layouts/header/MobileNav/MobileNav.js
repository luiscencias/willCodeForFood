import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Logo from '../Logo';
import { Spacer, LoginForm } from '../../../../components';
import LoginButton from '../LoginButton';
import NavigationLinks from '../NavigationLinks';
import NavHeader from './NavHeader';

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
				{ isAuthenticated ? '' : <NavHeader handleClick={() => setDrawerIsOpen(false)} /> }
				<Divider />
				<NavigationLinks handleClick={() => setDrawerIsOpen(false)} routes={routes} />
			</MobileDrawer>

			<DrawerButton onClick={ () => setDrawerIsOpen(true) } />

			<Spacer />
			<Logo />
			<Spacer />
			{ isAuthenticated ? '' : <LoginButton /> }
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