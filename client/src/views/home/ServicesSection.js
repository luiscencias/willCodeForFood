import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import Section from './Section';

import IconButton from '@material-ui/core/IconButton';

const StyledSection = withStyles(theme => ({
	root: {

		backgroundColor: theme.palette.grey[200],

		'& .services-section-text': {
			marginBottom: theme.spacing.unit * 8,

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
			gridColumn: '1 / -1',

			display: 'flex',

			[theme.breakpoints.up('4-col')]: {
				flexDirection: 'column',
				alignItems: 'center'
			},

			[theme.breakpoints.up('8-col')]: {
				flexDirection: 'row',
				justifyContent: 'space-evenly'
			},

			'& div': {
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',

				textAlign: 'center',

				[theme.breakpoints.up('4-col')]: {
					marginBottom: theme.spacing.unit * 5,

					maxWidth: '75%',

					'&:last-child': {
						marginBottom: 0
					}
				},

				[theme.breakpoints.up('8-col')]: {
					marginBottom: 0,

					maxWidth: '25%',
				},

				'& h3': {
					...theme.typography.h6,

					marginTop: 0,
					marginBottom: theme.spacing.unit * 2,

					'@media (min-width: 1280px) and (orientation: landscape)': {
						...theme.typography.h5,
						fontWeight: theme.typography.fontWeightMedium
					}
				},

				'& p': {
					...theme.typography.h6,
					fontWeight: theme.typography.fontWeightRegular,

					marginTop: 0,

					'@media (min-width: 1280px) and (orientation: landscape)': {
						...theme.typography.h5,
						fontWeight: theme.typography.fontWeightRegular
					}
				}
			}
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

		marginBottom: theme.spacing.unit * 4
	}
}))(IconButton);

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
				<h3>Benefit One</h3>
				<p>A sentence or two explaining this benefit.</p>
			</div>
			<div>
				<ServicesIconButton>Y</ServicesIconButton>
				<h3>Benefit Two</h3>
				<p>A sentence or two explaining this benefit.</p>
			</div>
			<div>
				<ServicesIconButton>Z</ServicesIconButton>
				<h3>Benefit Three</h3>
				<p>A sentence or two explaining this benefit.</p>
			</div>
		</div>
	</StyledSection>
);

export default ServicesSection;