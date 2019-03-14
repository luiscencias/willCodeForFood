import React, { useEffect, useRef, useState } from 'react';

import Hidden from '@material-ui/core/Hidden';

import MainHeader from './MainHeader';

import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

const routes = [
	{name: "Home", path: '/', exact: true},
	{name: 'Dashboard', path: '/dashboard', authRequired: true},
	{name: "About Us", path: '/about'},
	{name: 'Membership', path: '/membership'},
	{name: "Events", path: '/events'},
	{name: "Shop", path: '/shop'}
];

const createHandleScroll = setScrolled => () => {
	setScrolled( window.scrollY > 0 );
}

const Header = ({ isAuthenticated = false }) => {
	const [ scrolled, setScrolled ] = useState(false);

	useEffect(() => {
		const handleScroll = createHandleScroll(setScrolled);

		window.addEventListener("scroll", handleScroll);

		// Will be run when header unmounts.
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);


	return (
		<MainHeader scrolled={scrolled}>
			<Hidden smDown>
				<DesktopNav 
					routes={ routes } 
					isAuthenticated={isAuthenticated}
					scrolled={scrolled}
				/>
			</Hidden>
			<Hidden mdUp>
				<MobileNav 
					routes={ routes } 
					isAuthenticated={isAuthenticated} 
					scrolled={scrolled}
				/>
			</Hidden>
		</MainHeader>
	);
};

export default Header;