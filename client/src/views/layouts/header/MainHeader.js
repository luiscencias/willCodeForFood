import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import { styledTag } from '../../../helpers';

import { withRouter } from 'react-router';

const StyledHeader = withStyles(theme => ({
	root: {
		position: 'static', // Fallback for older browsers
		position: 'sticky',
		top: 0,

		zIndex: theme.zIndex.appBar,

		display: 'flex',
		alignItems: 'center',

		[theme.breakpoints.down('sm')]: {
			padding: `0 ${theme.spacing.unitScaleToRem(2)}`,
			height: theme.spacing.unitScaleToRem(7)
		},

		[theme.breakpoints.up('md')]: {
			padding: `0 ${theme.spacing.unitScaleToRem(3)}`,
			height: theme.spacing.unitScaleToRem(8)
		}
	}
}))(styledTag('header'));

let MainHeader = ({ children, scrolled, classes, location }) => (
	<StyledHeader classes={{ root: scrolled || location.pathname != '/' ? classes.scrolled : classes.atTop }}>
		{children}
	</StyledHeader>
);

MainHeader = withRouter(MainHeader);

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