import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import { styledTag } from '../../../helpers';

import MainLink from './MainLink';

import LockIcon from '@material-ui/icons/LockOutlined';


const Nav = withStyles(theme => ({
	root: {
		display: 'flex',

		[ theme.breakpoints.down('sm')]: {
			flexDirection: 'column',
			marginTop: theme.spacing.unit
		},

		[theme.breakpoints.up('md')]: {
			marginRight: theme.spacing.unit * 2
		}
	}
}))(styledTag('nav'));

const AuthRequiredIcon = withStyles(theme => ({
	root: {
		fontSize: 'inherit',

		[theme.breakpoints.down('sm')]: {
			marginLeft: theme.spacing.unit
		},

		[theme.breakpoints.up('md')]: {
			marginLeft: theme.spacing.unit / 2
		}
	}
}))(LockIcon);


const NavigationLinks = ({ routes, handleClick }) => (
	<Nav>
		{ routes.map( ({ path, name, exact, authRequired }) => (
			<MainLink handleClick={handleClick} path={path} exact={exact} key={path}>
				{ name }
				{ authRequired && <AuthRequiredIcon /> }
			</MainLink>
		)) }
	</Nav>
);

NavigationLinks.propTypes = {
	routes: PropTypes.arrayOf(
		PropTypes.shape({ path: PropTypes.string.isRequired, name: PropTypes.string.isRequired })
	).isRequired,
	handleClick: PropTypes.func
};

export default NavigationLinks;