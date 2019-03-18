import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import { styledTag } from '../../helpers';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const Title = withStyles(theme => ({
	root: {
		height: theme.spacing.unitScaleToRem(5.5),
		...theme.typography.h5,
		lineHeight: `${theme.spacing.unitScaleToRem(5.5)}`,

		textAlign: 'center',

		margin: 0,
		marginBottom: theme.spacing.unitScaleToRem(3)
	}
}))(styledTag('h5'));

const Icon = withStyles(theme => ({
	root: {
		alignSelf: 'center',
		fontSize: '3.75rem',

		color: theme.palette.secondary.main
	}
}))(AccountCircleIcon);

const FormHeader = () => (
	<>
		<Icon />
		<Title>Log In</Title>
	</>
);

export default FormHeader;