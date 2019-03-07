import React from 'react';

import Hidden from '@material-ui/core/Hidden';

import MainAppBar from './MainAppBar';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

const publicRoutes = [
	{name: "About", path: '/about'},
	{name: 'How To Apply', path: './how-to-apply'},
	{name: "Gallery", path: '/gallery'},
	{name: "Events", path: '/events'},
	{name: 'Contact', path: '/contact'},
	{name: "Shop", path: '/shop'}
];

const authenticatedRoutes = [
	{name: "About", path: '/about'},
	{name: "Gallery", path: '/gallery'},
	{name: "Events", path: '/events'},
	{name: 'Contact', path: '/contact'},
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