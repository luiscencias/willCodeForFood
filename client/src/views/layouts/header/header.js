import React from 'react';

import Hidden from '@material-ui/core/Hidden';

import MainAppBar from './MainAppBar';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

const publicRoutes = [
	{name: "Home", path: '/'},
	{name: 'Dashboard', path: '/dashboard'},
	{name: "About Us", path: '/about'},
	{name: 'Membership', path: './membership'},
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
	<MainAppBar>
		<Hidden xsDown>
			<DesktopNav 
				routes={ isAuthenticated ? authenticatedRoutes : publicRoutes } 
				isAuthenticated={isAuthenticated} 
			/>
		</Hidden>
		<Hidden smUp>
			<MobileNav 
				routes={ isAuthenticated ? authenticatedRoutes : publicRoutes } 
				isAuthenticated={isAuthenticated} 
			/>
		</Hidden>
	</MainAppBar>
);

export default Header;