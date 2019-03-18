import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';

const StyledButton = withStyles(theme => ({
	root: {
		height: theme.spacing.unitScaleToRem(6),
		marginTop: theme.spacing.unitScaleToRem(0.5),

		color: theme.palette.common.white
	},

	label: {
		fontSize: theme.typography.body1Next.fontSize,
		linHeight: theme.typography.body1Next.linHeight
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