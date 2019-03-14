import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import { styledTag } from '../../../helpers';

const MainHeader = withStyles(theme => ({
	root: {
		position: 'static', // Fallback for older browsers
		position: 'sticky',
		top: 0,

		backgroundColor: theme.palette.background.default,

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

export default MainHeader;