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

			...theme.typography.h4
		},

		'& p': {
			gridColumn: '1 / -1',

			...theme.typography.body1Next
		}
	}
}))(styledTag('section'));

export default Section;