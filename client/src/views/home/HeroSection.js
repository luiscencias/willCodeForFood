import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import Section from './Section';

import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const StyledSection = withStyles(theme => ({
	root: {
		position: 'relative',

		alignContent: 'center',
		paddingTop: 0,

		backgroundColor: theme.palette.primary.dark,

		fontFamily: theme.typography.fontFamily,
		color: theme.palette.common.white,

		'@media (min-width: 600px) and (orientation: portrait)': { // sm and up portrait
			textAlign: 'center',
			justifyItems: 'center'
		},

		[theme.breakpoints.down('sm')]: {
			height: `calc( 100vh - ${theme.spacing.unit * 7}px )`
		},

		[theme.breakpoints.up('md')]: {
			height: `calc( 100vh - ${theme.spacing.unit * 8}px )`
		},

		'& .hero-text': {
			[theme.breakpoints.up('4-col')]: {
				gridColumn: '1 / -1'
			},

			[theme.breakpoints.up('8-col')]: {
				gridColumn: '1/ span 6'
			},

			[theme.breakpoints.up('12-col')]: {
				gridColumn: '1 / span 8'
			},

			'@media (min-width: 600px) and (orientation: portrait)': { // sm and up portrait
				gridColumn: '1 / -1'
			},

			'@media (max-height: 480px)': {
				gridColumn: '1 / -1'
			}
		},

		'& h1': {
			fontSize: '3rem',
			lineHeight: 1,
			letterSpacing: "-0.00833em",
			color: 'inherit',
			fontWeight: theme.typography.fontWeightMedium,

			marginBottom: '2.5rem',

			'@media (max-height: 720px)': { // around sm and down
				fontSize: '2.125rem',
				lineHeight: 1.17,
				letterSpacing: "0.00735em",
				marginBottom: '1.5rem'
			},

			'@media (max-height: 480px)': { // around sm and down
				marginBottom: '1rem'
			},

			'@media (min-width: 1280px) and (orientation: landscape)': { // lg and up landscape
				fontSize: '3.75rem',
				marginBottom: '3rem',
			}
		},

		'& h2': {
			fontSize: '1.5rem',
			lineHeight: 1.33,
			letterSpacing: "0em",

			maxWidth: '32em',

			marginTop: "0rem",
			marginBottom: '2.5rem',

			color: 'inherit',
			fontWeight: theme.typography.fontWeightLight,

			'@media (max-height: 720px)': { // sm and down
				fontSize: '1rem',
				lineHeight: 1.75,
				letterSpacing: "0.00938em",
				marginBottom: '1.5rem',
				fontWeight: theme.typography.fontWeightRegular
			},

			'@media (max-height: 480px)': { // around sm and down
				marginBottom: '1rem'
			},

			'@media (min-width: 1280px) and (orientation: landscape)': { // lg and up landscape
				fontSize: '2.125rem',
				lineHeight: 1.17,
				letterSpacing: "0em",
				marginBottom: '3rem',
			}
		},

		'& .calls-to-action': {
			gridColumn: '1 / -1'
		}
	}
}))(Section);

const CallToAction = withStyles(theme => ({
	root: {
		padding: '12px 32px',

		'@media (max-width: 480px)': { // around sm and down
			width: '100%'
		},

		'@media (min-width: 1280px) and (orientation: landscape)': { // lg and up landscape
			padding: ''
		}
	},

	outlined: {
		borderColor: theme.palette.secondary.main,
		color: theme.palette.secondary.main,

		'&:hover': {
			borderColor: theme.palette.secondary.light,
			color: theme.palette.secondary.light
		}
	},

	contained: {
		backgroundColor: theme.palette.secondary.main,
		color: theme.palette.text.primary,

		'@media (min-width: 480px)': { // around sm and up
			marginRight: theme.spacing.unit * 2,
		},

		'@media (max-width: 480px)': { // around sm and down
			marginBottom: theme.spacing.unit * 2
		},

		'&:hover': {
			backgroundColor: theme.palette.secondary.light
		}
	},

	label: {
		color: 'inherit',

		'@media (min-height: 600px)': { // around sm and up
			fontSize: '1rem'
		}
	}
}))(Button);

const ArrowDownIcon = withStyles(theme => ({
	root: {
		position: 'absolute',

		bottom: '2vh',
		left: '50%',
		transform: 'translateX(-50%)',

		height: 60,
		width: 60,

		color: 'inherit',

		padding: 0
	},

	label: {
		height: 60,
		width: 60,

		fontSize: '3.75rem'
	}
}))(IconButton);

const HeroSection = () => (
	<StyledSection>
		<div className="hero-text">
			<h1>A compelling headline for this org</h1>
			<h2>A subtitle which gives more info and sells the org. 
			This text should span up to 1 to 3 lines and give a slightly more specific selling point.</h2>
		</div>
		<div className="calls-to-action">
			<CallToAction variant="contained">Apply Now</CallToAction>
			<CallToAction variant="outlined">Learn More</CallToAction>
		</div>
		<ArrowDownIcon>
			<KeyboardArrowDownIcon />
		</ArrowDownIcon>
	</StyledSection>
);

export default HeroSection;

