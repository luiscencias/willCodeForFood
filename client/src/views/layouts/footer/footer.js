import React from 'react';

import Typography from '@material-ui/core/Typography';

import MainFooter from './MainFooter';

import NavigationLinks from './NavigationLinks';

import { SocialIcon } from 'react-social-icons';

import Logo from './Logo';

const routes = [
	{name: "Home", path: '/', exact: true},
	{name: 'Dashboard', path: '/dashboard', authRequired: true},
	{name: "About Us", path: '/about'},
	{name: 'Membership', path: '/membership'},
	{name: "Events", path: '/events'},
	{name: "Shop", path: '/shop'}
];

const Footer = () => (
	<MainFooter>
		<section className="attrib">
			<Logo />
			<p>Designed and built by:</p>
			<ul>
				<li><a href="#">Ian Berns</a></li>
				<li><a href="#">Luis Davila Labastida</a></li>
				<li><a href="#">Stephanie Keck</a></li>
				<li><a href="#">Jonathan Mejia</a></li>
				<li><a href="#">Kylan Snyder</a></li>
				<li><a href="http://www.linkedin.com/in/blake-stolle-b5a071129">Blake Stolle</a></li>
			</ul>
		</section>
		<section className="nav">
			<h2>Navigation</h2>
			<NavigationLinks routes={routes} />
		</section>
		<section className="contact-info">
			<div className="social-icons" >
				<SocialIcon network="twitter" bgColor="#fff" style={{ height: '2rem', width: '2rem', marginRight: '0.5rem' }} />
				<SocialIcon network="facebook" bgColor="#fff" style={{ height: '2rem', width: '2rem', marginRight: '0.5rem' }} />
				<SocialIcon network="instagram" url="https://www.instagram.com/pbe_tamu/?hl=en" bgColor="#fff" style={{ height: '2rem', width: '2rem' }} />
			</div>
			<h2>Contact Us</h2>
			<address>
				Questions? Get in touch with us at <a href="mailto:ex@pbe.tamu">ex@pbe.tamu</a>.
			</address>
		</section>
	</MainFooter>
);

export default Footer;