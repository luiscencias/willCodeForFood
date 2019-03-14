import React from 'react';

import Hidden from '@material-ui/core/Hidden';

import MainHeader from './MainHeader';

import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

const publicRoutes = [
	{name: "Home", path: '/', exact: true},
	{name: 'Dashboard', path: '/dashboard', authRequired: true},
	{name: "About Us", path: '/about'},
	{name: 'Membership', path: '/membership'},
	{name: "Events", path: '/events'},
	{name: "Shop", path: '/shop'}
];

const authenticatedRoutes = [
	{name: "About", path: '/about'},
	{name: "Gallery", path: '/gallery'},
	{name: "Events", path: '/events'},
	{name: "Shop", path: '/shop'}
];

const Header = ({ isAuthenticated = false }) => (
	<MainHeader>
		<Hidden smDown>
			<DesktopNav 
				routes={ isAuthenticated ? authenticatedRoutes : publicRoutes } 
				isAuthenticated={isAuthenticated} 
			/>
		</Hidden>
		<Hidden mdUp>
			<MobileNav 
				routes={ isAuthenticated ? authenticatedRoutes : publicRoutes } 
				isAuthenticated={isAuthenticated} 
			/>
		</Hidden>
	</MainHeader>
);

export default Header;