import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import { styledTag } from '../../helpers';

const FormContainer = withStyles(theme => ({
	root: {
		fontFamily: theme.typography.fontFamily,

		padding: theme.spacing.unit * 2,
		backgroundColor: theme.palette.background.paper,
		borderRadius: theme.shape.borderRadius,
		boxShadow: theme.shadows[2],
		display: 'flex',
		flexDirection: 'column',

		maxWidth: theme.spacing.unit * 40,
		width: theme.spacing.unit * 40,

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
	}
}))(styledTag('div'));

export default FormContainer;