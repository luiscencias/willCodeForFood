import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import { FormikTextField } from 'formik-material-fields';

const styles = theme => ({
	inputRoot: {
		height: '3.5rem'
	},
	inputAdornedEnd: {
		paddingRight: theme.spacing.unitScaleToRem(1)
	},
	inputLabel: {

	},
	formHelperTextRoot: {
		marginBottom: theme.spacing.unitScaleToRem(2)
	}
});

const StyledField = ({ classes, FormHelperTextProps, InputLabelProps, InputProps, ...rest }) => (
	<FormikTextField
		FormHelperTextProps={{
			classes: {
				root: classes.formHelperTextRoot
			},
			...FormHelperTextProps
		}}
		InputLabelProps={{
			...InputLabelProps
		}}
		InputProps={{
			classes: {
				root: classes.inputRoot,
				adornedEnd: classes.inputAdornedEnd
			},
			...InputProps
		}}
		{...rest}
	/>
);

export default withStyles(styles)(StyledField);