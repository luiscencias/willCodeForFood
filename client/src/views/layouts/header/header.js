import React from 'react';

import { NavLink, Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Hidden from '@material-ui/core/Hidden';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import styles from './header.module.css';

const navLinks = [
	{name: "About", path: '/about'},
	{name: "Events", path: '/events'},
	{name: "Members", path: '/members'},
	{name: "Gallery", path: '/gallery'},
	{name: "Shop", path: '/shop'}
];

const renderAuth = props => (
	<>
		{console.log(styles)}
		{props.isAuthenticated ?
			''
		:
			<>
				<Button variant="outlined" color="secondary" size="small">Log In</Button>
				<Button variant="contained" color="secondary" size="small">Apply</Button>
			</>
		}
	</>
);

const renderNavLinks = (props) => (
	<>
	{navLinks.map( route => 
		(<Button component={NavLink} to={route.path} variant="text" size="small" key={route.name} classes={{ sizeSmall: styles.navLink }}>{route.name}</Button>) 
	)}
	</>
);

const renderLogo = props => (
	<Button size="small" component={Link} to="/" inline>PBE</Button>
);

const renderDesktopNav = (props) => (
	<Hidden xsDown>
		{renderLogo(props)}
		{renderNavLinks(props)}
		{renderAuth(props)}
	</Hidden>
);

const renderMobileNav = (props) => (
	<Hidden smUp>
		<IconButton>
			<MenuIcon />
		</IconButton>
		{renderLogo(props)}
		{renderAuth(props)}
	</Hidden>
);

const Header = (props) => (
	<AppBar position="static" color="default">
		<Toolbar>
			<nav>
				{renderDesktopNav(props)}
				{renderMobileNav(props)}
			</nav>
		</Toolbar>
	</AppBar>
);

export default Header;