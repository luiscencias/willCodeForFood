import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import Section from './Section';

import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

const StyledSection = withStyles(theme => ({
	root: {
		display: 'flex',

		padding: 0,

		[theme.breakpoints.up('xs')]: {
			flexDirection: 'column'
		},

		[theme.breakpoints.up('8-col')]: {
			flexDirection: 'row'
		},

		'& > div': {
			paddingTop: theme.spacing.unitScaleToRem(15),
			paddingBottom: theme.spacing.unitScaleToRem(15),

			[theme.breakpoints.up('xs')]: {
				paddingLeft: '1rem',
				paddingRight: '1rem'
			},

			[theme.breakpoints.up('md')]: {
				paddingLeft: '1.5rem',
				paddingRight: '1.5rem',
			},

			[theme.breakpoints.up('8-col')]: {
				paddingLeft: '1.5rem',
				paddingRight: '1.5rem',

				width: '50%'
			}
		},

		'& .member-quotes': {
			backgroundColor: theme.palette.secondary.light,

			textAlign: 'center',

			'& h2': {
				marginBottom: theme.spacing.unitScaleToRem(8)
			}
		},

		'& .reviews-img-buttons': {
			position: 'relative',

			width: '100%'
		},

		'& .member-review': {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',

			'& img': {
				borderRadius: '50%',

				// Will be deleted when actual images are put in place
				backgroundColor: theme.palette.grey[200],
				height: "10rem",
				width: '10rem',

				marginBottom: theme.spacing.unitScaleToRem(2)
			},

			'& h3': {
				...theme.typography.h6,
				fontWeight: theme.typography.fontWeightRegular,

				marginBottom: 0,
				marginTop: 0,

				'& em': {
					fontWeight: theme.typography.fontWeightMedium,
					fontStyle: 'normal'
				}
			},

			'& h4': {
				...theme.typography.h6,
				fontWeight: theme.typography.fontWeightRegular,

				marginTop: 0
			},

			'& p': {
				maxWidth: theme.spacing.unitScaleToRem(40),

				marginBottom: '2rem'
			}
		},

		'& .support-us': {
			'& img': {
				backgroundColor: theme.palette.grey[200],
				height: "20rem",
				width: '100%'
			}
		}
	}
}))(Section);

const StyledButton = withStyles(theme => ({
	root: {
		padding: `${theme.spacing.unitScaleToRem(1.5)} ${theme.spacing.unitScaleToRem(4)}`,

		marginTop: theme.spacing.unitScaleToRem(2),

		'@media (max-width: 480px)': { // around sm and down
			width: '100%'
		},

		borderColor: theme.palette.secondary.main,
		borderWidth: 2,

		color: theme.palette.secondary.main,

		'&:hover': {
			borderColor: theme.palette.secondary.light,
			color: theme.palette.secondary.light
		}
	},

	label: {
		color: 'inherit',
		fontSize: theme.typography.body1Next.fontSize,
		lineHeight: theme.typography.body1Next.lineHeight
	}
}))(Button);

const StyledIconButton = withStyles(theme => ({
	root: {
		position: 'absolute',

		top: '50%',
		transform: 'translateY(-50%)',

		'&.left': {
			left: 0
		},

		'&.right': {
			right: 0
		},

		backgroundColor: theme.palette.common.white,
		color: theme.palette.secondary.light,

		'&:hover': {
			color: theme.palette.common.white
		}
	}
}))(IconButton);

const QuoteSection = () => (
	<StyledSection>
		<div className="member-quotes">
			<h2>Reviews From Our Members</h2>
			<div className="member-review">
				<div className="reviews-img-buttons">
					<StyledIconButton className="left"><KeyboardArrowLeftIcon fontSize="inherit" /></StyledIconButton>
					<StyledIconButton className="right"><KeyboardArrowRightIcon fontSize="inherit" /></StyledIconButton>
					<img />
				</div>
				<p>"Example quote from member on how much they love the org."</p>
				<h3><em>Bob Example,</em> Class of '19</h3>
				<h4>Treasurer Fall-Spring '18</h4>
			</div>
		</div>
		<div className="support-us">
			<h2>Support Us!</h2>
			<p>Already a member? Support us by buying merchandise in our shop!</p>
			<img />
			<StyledButton
				component={Link}
				to="/shop"
				variant="outlined"
			>
				Shop Now
			</StyledButton>
		</div>
	</StyledSection>
);

export default QuoteSection;