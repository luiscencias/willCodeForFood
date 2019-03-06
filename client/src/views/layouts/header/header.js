import React from 'react';

import { NavLink, Link } from 'react-router-dom';

import NavigationLinks from './NavigationLinks';
import AuthLinks from './AuthLinks';

import AppBar from '@material-ui/core/AppBar';
import Hidden from '@material-ui/core/Hidden';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { LogoLink, MainToolBar, spacerStyles, appBarStyles } from './styles.js';

const routes = [
	{name: "About", path: '/about'},
	{name: "Events", path: '/events'},
	{name: "Members", path: '/members'},
	{name: "Gallery", path: '/about'},
	{name: "Shop", path: '/shop'}
];

const renderDesktopNav = (props) => (
	<Hidden xsDown>
		<LogoLink size="small" component={Link} to="/" inline>PBE</LogoLink>
		<span style={spacerStyles}/>
		<NavigationLinks routes={routes} />
		<AuthLinks />
	</Hidden>
);

const renderMobileNav = (props) => (
	<Hidden smUp>
		<IconButton>
			<MenuIcon />
		</IconButton>
		<span style={spacerStyles}/>
		<LogoLink size="small" component={Link} to="/" inline>PBE</LogoLink>
		<span style={spacerStyles}/>
		<AuthLinks />
	</Hidden>
);

const Header = (props) => (
	<AppBar style={appBarStyles} position="static" color="default">
		<MainToolBar>
			{renderDesktopNav(props)}
			{renderMobileNav(props)}
		</MainToolBar>
	</AppBar>
);

export default Header;