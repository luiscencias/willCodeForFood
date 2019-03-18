import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import { styledTag } from '../../helpers';

const MainSection = withStyles(theme => ({
	root: {
		flexGrow: 1,
		backgroundColor: theme.palette.grey[200],

		...theme.grids.main,
		alignContent: 'center',
		justifyContent: 'center',

		'& .form-container': {
			fontFamily: theme.typography.fontFamily,

			padding: theme.spacing.unitScaleToRem(2),
			marginTop: theme.spacing.unitScaleToRem(2),

			backgroundColor: theme.palette.background.paper,
			borderRadius: theme.shape.borderRadius,
			boxShadow: theme.shadows[2],
			display: 'flex',
			flexDirection: 'column',

			[theme.breakpoints.up('4-col')]: {
				gridColumn: '1 / -1'
			},

			[theme.breakpoints.up('8-col')]: {
				gridColumn: '3 / span 4'
			},

			[theme.breakpoints.up('12-col')]: {
				gridColumn: '5 / span 4'
			},

			'& form': {
				display: 'flex',
				flexDirection: 'column'
			},

			'& .redirect-error': {
				...theme.typography.body1Next,
				color: theme.palette.error.main,
				marginTop: 0,
				textAlign: 'center'
			},

			'& .redirect-from': {

			}
		},

		'& .forgot-password': {
			gridRow: '2 / span 1',

			textAlign: 'center',

			marginBottom: theme.spacing.unitScaleToRem(2),

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
	}
}))(styledTag('main'));

export default MainSection;