import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import { styledTag } from '../../../helpers';

const StyledHeader = withStyles(theme => ({
	root: {
		position: 'static', // Fallback for older browsers
		position: 'sticky',
		top: 0,

		display: 'flex',
		alignItems: 'center',

		[theme.breakpoints.down('sm')]: {
			padding: `0 ${theme.spacing.unit * 2}px`,
			height: theme.spacing.unit * 7
		},

		[theme.breakpoints.up('md')]: {
			padding: `0 ${theme.spacing.unit * 3}px`,
			height: theme.spacing.unit * 8
		}
	}
}))(styledTag('header'));

let MainHeader = ({ children, scrolled, classes }) => (
	<StyledHeader classes={{ root: scrolled ? classes.scrolled : classes.atTop }}>
		{children}
	</StyledHeader>
);

MainHeader = withStyles(theme => ({
	atTop: {
		backgroundColor: theme.palette.primary.dark,
		color: theme.palette.common.white
	},
	scrolled: {
		backgroundColor: theme.palette.background.default,
		color: theme.palette.text.default
	}
}))(MainHeader);

export default MainHeader;