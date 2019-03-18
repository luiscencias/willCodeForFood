import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import Section from './Section';

import IconButton from '@material-ui/core/IconButton';

import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const StyledSection = withStyles(theme => ({
	root: {
		backgroundColor: theme.palette.grey[200],

		'& .services-section-text': {
			marginBottom: theme.spacing.unitScaleToRem(10),

			textAlign: 'center',

			'& p': {
				marginBottom: 0
			},

			[theme.breakpoints.up('4-col')]: {
				gridColumn: '1 / -1'
			},

			[theme.breakpoints.up('8-col')]: {
				gridColumn: '2 / -2',
			}
		},

		'& .services-section-list': {
			gridRow: '2 / span 1',
			
			[theme.breakpoints.up('4-col')]: {
				gridColumn: '1 / -1'
			},

			[theme.breakpoints.up('8-col')]: {
				gridColumn: '3 / -3'
			},
		}

	}
}))(Section);

const ServicesIconButton = withStyles(theme => ({
	root: {
		backgroundColor: theme.palette.secondary.main,
		padding: 6,

		color: theme.palette.common.white,
		fontSize: '3rem',
		width: '3.75rem',
		height: '3.75rem',

		marginBottom: theme.spacing.unitScaleToRem(5)
	}
}))(IconButton);

const CallToActionButton = withStyles(theme => ({
	root: {
		gridRow: '3 / span 1',

		padding: `${theme.spacing.unitScaleToRem(1.5)} ${theme.spacing.unitScaleToRem(4)}`,
		marginTop: theme.spacing.unitScaleToRem(10),

		textTransform: 'none',

		borderColor: theme.palette.secondary.main,
		color: theme.palette.secondary.main,

		borderWidth: 2,

		fontSize: theme.typography.body1Next.fontSize,
		lineHeight: theme.typography.body1Next.lineHeight,

		'&:hover': {

		},

		[theme.breakpoints.up('4-col')]: {
			gridColumn: '1 / -1'
		},

		[theme.breakpoints.up('8-col')]: {
			gridColumn: '3 / span 4'
		},

		[theme.breakpoints.up('12-col')]: {
			gridColumn: '5 / span 4'
		}
	}
}))(Button);

const ServicesSection = () => (
	<StyledSection>
		<div className="services-section-text">
			<h2>Why Join PBE?</h2>
			<p>
				A paragraph explaining why a student should consider joining this organization. This section
				should focus more on emotional appeal than concrete benefits.
			</p>
		</div>
		<div className="services-section-list">
			<div>
				<ServicesIconButton>X</ServicesIconButton>
				<div>
					<h3>First benefit</h3>
					<p>
						A sentence or two explaining this benefit. This text should relate a concrete
						benefit to some emotional need.
					</p>
				</div>
			</div>
			<div>
				<ServicesIconButton>Y</ServicesIconButton>
				<div>
					<h3>A catchy headline for the second benefit</h3>
					<p>A sentence or two explaining this benefit. The same for this one.</p>
				</div>
			</div>
			<div>
				<ServicesIconButton>Z</ServicesIconButton>
				<div>
					<h3>Something about the third benefit</h3>
					<p>Ditto. These paragraphs should be 2 to 3 lines.</p>
				</div>
			</div>
		</div>
		<CallToActionButton variant="outlined" component={Link} to="/membership" >
			Learn More
		</CallToActionButton>
	</StyledSection>
);

export default ServicesSection;