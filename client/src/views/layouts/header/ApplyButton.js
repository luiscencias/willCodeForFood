import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';

import { Link } from 'react-router-dom';

const StyledButton = withStyles(theme => ({
	root: {
		boxShadow: 'none',
		color: theme.palette.common.white,
		marginLeft: theme.spacing.unit / 2,

		'&:hover': {
			backgroundColor: '#00bcd4'
		},

		[ theme.breakpoints.down('xs') ]: {
			padding: '10px 8px',
			minWidth: '96px'
		}
	}
}))(Button);

const ApplyButton = () => (
	<StyledButton component={Link} to="/apply" variant="contained" color="secondary" size="small">
		Apply
	</StyledButton>
);

export default ApplyButton;