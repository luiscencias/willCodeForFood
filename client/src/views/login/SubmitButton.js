import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';

const StyledButton = withStyles(theme => ({
	root: {
		height: theme.spacing.unit * 6,
		marginTop: theme.spacing.unit / 2,

		color: theme.palette.common.white
	}
}))(Button);

const SubmitButton = () => (
	<StyledButton
		type="submit"
		variant="contained"
		color="secondary"
	>
		Log In
	</StyledButton>
);

export default SubmitButton;