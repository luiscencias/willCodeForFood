import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import { NavLink } from 'react-router-dom';

const styles = theme => ({
	root: {
		...theme.typography.body1Next,
		color: 'inherit',
		textDecoration: 'none',

		display: 'inline-flex',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',

		height: theme.spacing.unitScaleToRem(4),

		borderRadius: theme.shape.borderRadius,

		'&:hover': {
			textDecoration: 'underline'
		}
	},

	active: {
		fontWeight: 900
	}
});

const MainLink = ({ exact, path, children, handleClick, classes }) => (
	<NavLink 
		to={path} 
		exact={exact}
		onClick={handleClick} 
		className={classes.root}
		activeClassName={classes.active}
	>
		{ children }
	</NavLink>
);

export default withStyles(styles)(MainLink);