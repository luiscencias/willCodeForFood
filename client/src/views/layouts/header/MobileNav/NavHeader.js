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

		paddingBottom: theme.spacing.unit,

		backgroundColor: theme.palette.grey[100]
	}
}))(styledTag('div'))

const StyledAccountIcon = withStyles(theme => ({
	root: {
		fontSize: theme.spacing.unit * 10,

		color: theme.palette.grey[300],

		alignSelf: 'center',

		marginTop: theme.spacing.unit * 2
	}
}))(AccountIcon);

const StyledButton = withStyles(theme => ({
	root: {
		marginTop: theme.spacing.unit * 2,
		marginBottom: theme.spacing.unit,
		marginLeft: theme.spacing.unit * 2,
		marginRight: theme.spacing.unit * 2
	}
}))(Button);

const NavHeader = ({ handleClick }) => (
	<Container>
		<StyledAccountIcon />
		<StyledButton variant="outlined" component={Link} onClick={handleClick} to="/login">Log In</StyledButton>
	</Container>
);

export default NavHeader;