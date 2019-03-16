import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export const HeroSection = withStyles(theme => ({
	'section': {
		backgroundColor: theme.palette.primary.dark,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',

		[theme.breakpoints.down('sm')]: {
			height: `calc( 100vh - ${theme.spacing.unit * 7}px )`
		},

		[theme.breakpoints.up('md')]: {
			height: `calc( 100vh - ${theme.spacing.unit * 8}px )`
		}
	}
}))( ({ children, classes }) => (<section className={classes.section}>{children}</section>) );

export const HeroLogo = withStyles(theme => ({
	root: {
		fontWeight: 400,
		color: theme.palette.secondary.main,
		marginBottom: theme.spacing.unit
	}
}))(Typography);

export const CallToActionButton = withStyles(theme => ({
	root: {
		borderRadius: '21px',
		width: '120px',

		'&:hover': {
			backgroundColor: theme.palette.secondary.light
		}
	},
	label: {
		color: theme.palette.common.white
	}
}))(Button);

export const SummarySection = withStyles(theme => ({
	'section': {
		display: 'flex',
		paddingTop: theme.spacing.unit * 2,
		paddingRight: theme.spacing.unit * 3,
		paddingLeft: theme.spacing.unit * 3,
		paddingBottom: theme.spacing.unit * 3,

		'& section:nth-child(2)': {
			minWidth: '280px',
			marginLeft: theme.spacing.unit * 3
		}
	}
}))( ({ children, classes }) => (<section className={classes.section}>{children}</section>) );