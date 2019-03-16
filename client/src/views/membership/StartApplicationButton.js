import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';

const StyledButton = withStyles(theme => ({
	root: {
		padding: '12px 32px',

		borderWidth: '2px',

		borderColor: theme.palette.secondary.dark,
		color: theme.palette.secondary.dark,

		backgroundColor: theme.palette.grey[300],

		'&:hover': {
			backgroundColor: theme.palette.grey[400],
			borderColor: theme.palette.secondary.dark,
			color: theme.palette.secondary.dark,
			borderWidth: '2px'
		}
	},

	label: {
		fontSize: '1rem',
		fontWeight: 600,
		textAlign: 'center'
	}
}))(Button);

const StartApplicationButton = () => (
	<StyledButton 
		variant="outlined"
		color="secondary"
		component={Link}
		to="/membership-application"
	>
		Start Application
	</StyledButton>
);

export default StartApplicationButton;