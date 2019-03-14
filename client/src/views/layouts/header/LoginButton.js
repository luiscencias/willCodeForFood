import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';

const StyledButton = withStyles(theme => ({
	root: {
		[ theme.breakpoints.down('sm') ]: {
			
		}
	}
}))(Button);

const LoginButton = ({ handleClick }) => (
	<StyledButton component={Link} to='/login' variant="outlined" color="secondary" size="small" onClick={handleClick}>
		Log In
	</StyledButton>
);

LoginButton.propTypes = {
	onClick: PropTypes.func
}

export default LoginButton;