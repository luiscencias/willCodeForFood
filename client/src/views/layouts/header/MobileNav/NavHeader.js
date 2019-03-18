import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { styledTag } from '../../../../helpers';

import AccountIcon from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';

import MainLink from '../MainLink';

const Container = withStyles(theme => ({
	root: {
		display: 'flex',
		flexDirection: 'column',

		paddingBottom: theme.spacing.unitScaleToRem(1),

		backgroundColor: theme.palette.grey[100],

		minHeight: '9.75rem'
	}
}))(styledTag('div'))

const StyledAccountIcon = withStyles(theme => ({
	root: {
		fontSize: '5rem',
		color: theme.palette.grey[300],

		alignSelf: 'center',

		marginTop: theme.spacing.unitScaleToRem(2)
	}
}))(AccountIcon);

const StyledButton = withStyles(theme => ({
	root: {
		marginTop: theme.spacing.unitScaleToRem(2),
		marginBottom: theme.spacing.unitScaleToRem(1),
		marginLeft: theme.spacing.unitScaleToRem(2),
		marginRight: theme.spacing.unitScaleToRem(2),

		minHeight: '2.25rem'
	}
}))(Button);

const NavHeader = ({ handleClick }) => (
	<Container>
		<StyledAccountIcon />
		<StyledButton variant="outlined" component={Link} onClick={handleClick} to="/login">Log In</StyledButton>
	</Container>
);

export default NavHeader;