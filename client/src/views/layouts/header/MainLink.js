import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import { NavLink } from 'react-router-dom';

const styles = theme => ({
	root: {
		...theme.typography.body2Next,
		color: theme.palette.text.primary,
		textDecoration: 'none',

		borderRadius: theme.shape.borderRadius,

		display: 'inline-flex',
		justifyContent: 'center',
		alignItems: 'center',

		[theme.breakpoints.down('sm')]: {
			height: theme.spacing.unit * 6,
			justifyContent: 'flex-start',
			padding: `0 ${theme.spacing.unit * 2}px`,

			'&:hover': {
				backgroundColor: theme.palette.grey[200]
			}
		},

		[theme.breakpoints.up('md')]: {
			height: theme.spacing.unit * 4.5,
			padding: `0 ${theme.spacing.unit}px`,

			'&:hover': {
				backgroundColor: theme.palette.grey[200]
			}
		}
	},

	active: {
		fontWeight: theme.typography.fontWeightMedium,

		[theme.breakpoints.down('sm')]: {

		},

		[theme.breakpoints.up('md')]: {
			
		}
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