import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import { styledTag } from '../../helpers';

import { Link } from 'react-router-dom';

const styles = theme => ({
	root: {
		fontSize: '0.875rem',
		marginTop: theme.spacing.unit * 2,
		color: theme.palette.secondary.dark
	}
});

const ForgotPasswordLink = ({ classes }) => (
	<Link className={classes.root} to='/forgot-password'>Forgot password?</Link>
);

export default withStyles(styles)(ForgotPasswordLink);