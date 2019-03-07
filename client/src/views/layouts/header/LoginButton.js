import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';

const StyledButton = withStyles(theme => ({
	root: {
		[ theme.breakpoints.down('xs') ]: {
			margin: theme.spacing.unit * 2,
			padding: `11px ${ theme.spacing.unit / 2 }px`,
			borderRadius: theme.spacing.unit
		}
	}
}))(Button);

const LoginButton = ({ onClick }) => (
	<StyledButton variant="outlined" color="secondary" size="small" onClick={onClick}>
		Sign In
	</StyledButton>
);

LoginButton.propTypes = {
	onClick: PropTypes.func
}

export default LoginButton;