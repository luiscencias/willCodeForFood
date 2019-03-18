import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import { styledTag } from '../../../helpers';

const StyledFooter = withStyles(theme => ({
	root: {
		...theme.grids.main,

		paddingTop: theme.spacing.unitScaleToRem(15),
		paddingBottom: theme.spacing.unitScaleToRem(15),

		backgroundColor: theme.palette.primary.dark,
		color: theme.palette.common.white,

		'& h2': {
			marginTop: 0,

			...theme.typography.subtitle1,
			fontWeight: theme.typography.fontWeightMedium,

			textTransform: 'uppercase',

			color: 'inherit'
		},

		'& p': {
			...theme.typography.body1Next,
			color: theme.palette.common.white
		},

		'& .attrib': {
			[theme.breakpoints.up('4-col')]: {
				gridColumn: '1 / -1',
				marginBottom: '4rem'
			},

			'@media (min-width: 480px)': {
				gridColumn: '1 / span 2',
				marginBottom: 0
			},

			[theme.breakpoints.up('8-col')]: {
				gridColumn: '1 / span 2',
			},

			[theme.breakpoints.up('12-col')]: {
				gridColumn: '1 / span 4'
			},

			'& p': {
				color: theme.palette.grey[400]
			},

			'& li a': {
				...theme.typography.body2Next,
				fontWeight: theme.typography.fontWeightMedium,
				color: theme.palette.grey[400]
			},

			'& ul': {
				paddingLeft: 0
			},

			'& li': {
				listStyleType: 'none'
			}
		},

		'& .nav': {
			[theme.breakpoints.up('4-col')]: {
				gridRow: '2 / span 1',
				gridColumn: '1 / -1',
				marginBottom: '4rem'
			},

			'@media (min-width: 480px)': {
				gridColumn: '3 / span 2',
				gridRow: '1 / span 1',
				marginBottom: 0
			},

			[theme.breakpoints.up('8-col')]: {
				gridRow: '1 / span 1',
				gridColumn: '4 / span 2'
			},

			[theme.breakpoints.up('12-col')]: {
				gridColumn: '6 / span 3'
			}
		},

		'& .contact-info': {
			[theme.breakpoints.up('4-col')]: {
				gridRow: '3 / span 1',
				gridColumn: '1 / -1'
			},

			'@media (min-width: 480px)': {
				gridRow: '2 / span 1',
				gridColumn: '1 / -1',
				marginTop: '2rem'
			},

			[theme.breakpoints.up('8-col')]: {
				gridRow: '1 / span 1',
				gridColumn: '6 / span 3',
				marginTop: 0
			},

			[theme.breakpoints.up('12-col')]: {
				gridColumn: '9 / span 4'
			},

			'& a': {
				...theme.typography.body1Next,
				fontWeight: theme.typography.fontWeightMedium,
				color: theme.palette.common.white
			},

			'& .social-icons': {
				marginBottom: theme.spacing.unitScaleToRem(4)
			}
		}
	}
}))(styledTag('footer'));

const MainFooter = ({ children }) => (
	<StyledFooter>
		{children}
	</StyledFooter>
);

export default MainFooter;