import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import { styledTag } from '../../helpers';

const Section = withStyles(theme => ({
	root: {
		...theme.grids.main,

		paddingTop: theme.spacing.unit * 15,
		paddingBottom: theme.spacing.unit * 15,

		'& h2': {
			gridColumn: '1 / -1',

			...theme.typography.h5,
			fontWeight: theme.typography.fontWeightMedium,

			marginTop: 0,

			'@media (min-width: 1280px) and (orientation: landscape)': {
				...theme.typography.h4
			}
		},

		'& p, li': {
			gridColumn: '1 / -1',

			...theme.typography.h6,
			fontWeight: theme.typography.fontWeightRegular,

			'@media (max-height: 720px)': {
				...theme.typography.body1Next
			},

			'@media (min-width: 1280px) and (orientation: landscape)': {
				...theme.typography.h5,
				fontWeight: theme.typography.fontWeightRegular
			},
		},

		'& a.text-link': {
			gridColumn: '1 / -1',

			...theme.typography.h6,
			fontWeight: theme.typography.fontWeightRegular,
			color: theme.palette.secondary.main,

			'@media (max-height: 720px)': {
				...theme.typography.body1Next,
				color: theme.palette.secondary.main
			},

			'@media (min-width: 1280px) and (orientation: landscape)': {
				...theme.typography.h5,
				fontWeight: theme.typography.fontWeightRegular,
				color: theme.palette.secondary.main
			},
		},

		'& ul': {
			paddingLeft: theme.spacing.unit * 3,

			'& li': {
				marginBottom: theme.spacing.unit * 2,

				'& em': {
					fontWeight: theme.typography.fontWeightMedium,
					fontStyle: 'normal'
				}
			}
		},

		'& ol': {
			paddingLeft: theme.spacing.unit * 3,

			'& li': {
				marginBottom: theme.spacing.unit * 2,
			}
		}
	}
}))(styledTag('section'));

export default Section;