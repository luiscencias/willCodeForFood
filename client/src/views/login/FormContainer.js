import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import { styledTag } from '../../helpers';

const FormContainer = withStyles(theme => ({
	root: {
		padding: theme.spacing.unit * 2,
		backgroundColor: theme.palette.background.paper,
		borderRadius: theme.shape.borderRadius,
		boxShadow: theme.shadows[2],
		display: 'flex',
		flexDirection: 'column',

		'& form': {
			display: 'flex',
			flexDirection: 'column'
		}
	}
}))(styledTag('div'));

export default FormContainer;