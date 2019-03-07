import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';


const StyledButton = withStyles(theme => ({
	root: {
		'&:hover': {
			backgroundColor: 'inherit'
		},

		[ theme.breakpoints.down('xs') ]: {
			padding: '10px 8px'
		}
	},

	label: {
		fontWeight: 400,
		textTransform: 'none',

		'&:hover': {
			fontWeight: 500
		},

		[ theme.breakpoints.down('xs') ]: {
			justifyContent: 'flex-start',
			fontSize: '14px'
		}
	}
}))(Button);

const NavLink = ({ path, children }) => (
	<StyledButton component={Link} to={path} variant="text" size="small">
		{ children }
	</StyledButton>
);

NavLink.propTypes = {
	path: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired
};

export default NavLink;
