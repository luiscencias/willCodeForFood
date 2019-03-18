import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import { styledTag } from '../../helpers';

const Section = withStyles(theme => ({
	root: {
		...theme.grids.main,

		paddingTop: theme.spacing.unitScaleToRem(15),
		paddingBottom: theme.spacing.unitScaleToRem(15),

		'& h2': {
			gridColumn: '1 / -1',

			...theme.typography.h5,
			fontWeight: theme.typography.fontWeightMedium,

			marginTop: 0
		},

		'& p, li': {
			gridColumn: '1 / -1',

			...theme.typography.h6,
			fontWeight: theme.typography.fontWeightRegular
		},

		'& a.text-link': {
			gridColumn: '1 / -1',

			...theme.typography.h6,
			fontWeight: theme.typography.fontWeightRegular,
			color: theme.palette.secondary.main
		},

		'& ul': {
			paddingLeft: theme.spacing.unitScaleToRem(3),

			'& li': {
				marginBottom: theme.spacing.unitScaleToRem(2),

				'& em': {
					fontWeight: theme.typography.fontWeightMedium,
					fontStyle: 'normal'
				}
			}
		},

		'& ol': {
			paddingLeft: theme.spacing.unitScaleToRem(3),

			'& li': {
				marginBottom: theme.spacing.unitScaleToRem(2),
			}
		}
	}
}))(styledTag('section'));

export default Section;