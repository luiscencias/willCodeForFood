import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';

import { Link } from 'react-router-dom';

export const StyledButton = withStyles(theme => ({
	root: {
		color: 'inherit',
		justifyContent: 'flex-start',
		padding: 0
	},
	label: {
		fontSize: '1rem',
		fontWeight: 900,
		textAlign: 'left'
	}
}))(Button);

const Logo = () => <StyledButton size="small" component={Link} to="/" inline >PBE</StyledButton>;

export default Logo;