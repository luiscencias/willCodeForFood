import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import { styledTag } from '../../helpers';

const Section = withStyles(theme => ({
	root: {
		...theme.grids.main,

		paddingTop: theme.spacing.unit * 10,
		paddingBottom: theme.spacing.unit * 10,

		'& h2': {
			gridColumn: '1 / -1',

			...theme.typography.h5,
			fontWeight: theme.typography.fontWeightMedium,

			marginTop: 0,

			'@media (min-width: 1280px) and (orientation: landscape)': {
				...theme.typography.h4
			}
		},

		'& p': {
			gridColumn: '1 / -1',

			...theme.typography.h6,
			fontWeight: theme.typography.fontWeightRegular,

			'@media (max-height: 720px)': {
				...theme.typography.body1Next
			},

			'@media (min-width: 1280px) and (orientation: landscape)': {
				...theme.typography.h5,
				fontWeight: theme.typography.fontWeightRegular
			}
		}
	}
}))(styledTag('section'));

export default Section;