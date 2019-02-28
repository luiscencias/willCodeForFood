import React from 'react';

import { MainNav, MainNavigationLink } from './styles';

import { Link } from 'react-router-dom';

const renderLink = ( route, index ) => (
	<MainNavigationLink
		component={Link}
		to={route.path}
		variant="text"
		size="small"
		key={index}
	>
		{ route.name }
	</MainNavigationLink>
);

const NavigationLinks = ({ routes }) => (
	<MainNav>
		{ routes.map(renderLink) }
	</MainNav>
);

export default NavigationLinks;