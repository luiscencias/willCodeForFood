import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import { styledTag } from '../../../helpers';

import NavLink from './NavLink';


const Nav = withStyles(theme => ({
	root: {
		[ theme.breakpoints.down('xs')]: {
			display: 'flex',
			flexDirection: 'column',
			margin: theme.spacing.unit * 2
		}
	}
}))(styledTag('nav'))


const NavigationLinks = ({ routes }) => (
	<Nav>
		{ routes.map( ({ path, name }) => <NavLink path={path} key={path}>{ name }</NavLink> ) }
	</Nav>
);

NavigationLinks.propTypes = {
	routes: PropTypes.arrayOf(
		PropTypes.shape({ path: PropTypes.string.isRequired, name: PropTypes.string.isRequired })
	).isRequired
};

export default NavigationLinks;