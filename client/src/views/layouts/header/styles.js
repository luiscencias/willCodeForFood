import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';

export const spacerStyles = {
	flexGrow: 1
};

export const appBarStyles = {
	boxShadow: 'none'
};

export const MainToolBar = withStyles(theme => ({
	root: {
		height: theme.spacing.mainHeader.height
	}
}))(Toolbar);

export const LogoLink = withStyles(theme => ({
	label: {
		fontWeight: 900
	}
}))(Button);

export const MainNav = withStyles(theme => ({
	'nav': {
		marginRight: theme.spacing.unit * 2
	}
}))( ({ children, classes }) => (<nav className={classes.nav}>{children}</nav>) );

export const MainNavigationLink = withStyles(theme => ({
	root: {
		'&:hover': {
			backgroundColor: 'inherit'
		}
	},

	label: {
		fontWeight: 400,
		textTransform: 'none',

		'&:hover': {
			fontWeight: 500
		}

		/* TODO: media queries */
	}
}))(Button);

export const AuthLink = withStyles(theme => ({
	root: {

		'&$containedSecondary': {
			boxShadow: 'none',
			color: theme.palette.common.white,
			marginLeft: theme.spacing.unit / 2,

			'&:hover': {
				backgroundColor: '#00bcd4'
			}
		}
	},
	label: {
		'&$outlinedSecondary': {

		}
	},
	outlinedSecondary: {

	},
	containedSecondary: {

	}
}))(Button);