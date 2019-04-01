import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import { Link } from 'react-router-dom';

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

		'@media (max-height: 480px)': {
			alignContent: 'space-between',
			paddingBottom: '1rem'
		},

		[theme.breakpoints.down('sm')]: {
			height: `calc( 100vh - ${theme.spacing.unitScaleToRem(7)} )`
		},

		[theme.breakpoints.up('md')]: {
			height: `calc( 100vh - ${theme.spacing.unitScaleToRem(8)} )`
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

			'@media (min-width: 840px) and (orientation: portrait)': { // 12-col and up portrait
				gridColumn: '1 / span 9'
			},

			'@media (max-height: 480px) and (max-width: 600px)': {
				gridColumn: '1 / -1'
			}
		},

		'& h1': {
			fontSize: theme.typography.h3.fontSize,
			lineHeight: theme.typography.h3.lineHeight,
			letterSpacing: theme.typography.h3.letterSpacing,

			color: 'inherit',
			fontWeight: theme.typography.fontWeightMedium,

			marginBottom: theme.spacing.unitScaleToRem(5),

			'@media (max-height: 480px)': {
				marginBottom: theme.spacing.unitScaleToRem(2),
				marginTop: 0,

				fontSize: theme.typography.h4.fontSize,
				lineHeight: theme.typography.h4.lineHeight,
				letterSpacing: theme.typography.h4.letterSpacing,
			},
		},

		'& h2': {
			fontSize: theme.typography.h5.fontSize,
			lineHeight: theme.typography.h5.lineHeight,
			letterSpacing: theme.typography.h5.letterSpacing,

			marginTop: 0,
			marginBottom: theme.spacing.unitScaleToRem(5),

			color: 'inherit',
			fontWeight: theme.typography.fontWeightLight,

			'@media (max-height: 480px)': {
				marginBottom: theme.spacing.unitScaleToRem(2),

				fontSize: theme.typography.h6.fontSize,
				lineHeight: theme.typography.h6.lineHeight,
				letterSpacing: theme.typography.h6.letterSpacing,
			}
		},

		'& .calls-to-action': {
			gridColumn: '1 / -1',

			'@media (max-height: 720px)': {

			}
		}
	}
}))(Section);

const CallToAction = withStyles(theme => ({
	root: {
		padding: `${theme.spacing.unitScaleToRem(1.5)} ${theme.spacing.unitScaleToRem(4)}`,

		'@media (max-width: 480px)': { // around sm and down
			width: '100%'
		},
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
			marginRight: theme.spacing.unitScaleToRem(2)
		},

		'@media (max-width: 480px)': { // around sm and down
			marginBottom: theme.spacing.unitScaleToRem(2)
		},

		'&:hover': {
			backgroundColor: theme.palette.secondary.light
		}
	},

	label: {
		color: 'inherit',
		fontSize: theme.typography.body1Next.fontSize,
		lineHeight: theme.typography.body1Next.lineHeight
	}
}))(Button);

const ArrowDownIcon = withStyles(theme => ({
	root: {
		position: 'absolute',

		bottom: theme.spacing.unitScaleToRem(2),
		left: '50%',
		transform: 'translateX(-50%)',

		height: '3rem',
		width: '3rem',

		color: 'inherit',

		padding: 0,

		'@media (max-height: 480px)': {
			left: 'auto',
			right: '1rem',
			transform: 'none'
		},

		animation: `hero_button_bounce 2000ms ${theme.transitions.easing.easeInOut} 0s infinite`
	},

	label: {

		fontSize: '3rem'
	}
}))(IconButton);

const HeroSection = ({ scrollDownFunction }) => (
	<StyledSection>
		<div className="hero-text">
			<h1>A compelling headline for this org</h1>
			<h2>A subtitle which gives more info and sells the org. 
			This text should span up to 1 to 3 lines and give a slightly more specific selling point.</h2>
		</div>
		<div className="calls-to-action">
			<CallToAction component={Link} to="/membership-application" variant="contained">Apply Now</CallToAction>
			<CallToAction component={Link} to="/membership" variant="outlined">Learn More</CallToAction>
		</div>
		<ArrowDownIcon onClick={scrollDownFunction}>
			<KeyboardArrowDownIcon fontSize="inherit" />
		</ArrowDownIcon>
	</StyledSection>
);

export default HeroSection;

