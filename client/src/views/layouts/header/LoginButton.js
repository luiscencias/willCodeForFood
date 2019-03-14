import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import AccountIcon from '@material-ui/icons/AccountCircle';

const StyledButton = withStyles(theme => ({
	root: {
		height: theme.spacing.unit * 4.5,
		paddingLeft: theme.spacing.unit * 3/2,
		paddingRight: theme.spacing.unit * 2,
		textTransform: 'none',
		color: 'inherit'
	},

	label: {
		fontSize: '0.875rem'
	}
}))(Button);

const StyledAccountIcon = withStyles(theme => ({
	root: {
		fontSize: '1.125rem',
		marginRight: theme.spacing.unit / 2
	}
}))(AccountIcon);

const LoginButton = ({ handleClick }) => (
	<StyledButton component={Link} to='/login' variant="text" size="small" onClick={handleClick}>
		<StyledAccountIcon /> Log In
	</StyledButton>
);

LoginButton.propTypes = {
	onClick: PropTypes.func
}

export default LoginButton;