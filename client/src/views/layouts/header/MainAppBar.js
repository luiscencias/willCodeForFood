import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';


const StyledAppBar = withStyles(theme => ({
	root: {
		boxShadow: 'none'
	}
}))(AppBar);


const StyledToolBar = withStyles(theme => ({
	root: {
		height: theme.spacing.mainHeader.height
	}
}))(Toolbar);


const MainAppBar = ({ children }) => (
	<StyledAppBar position="sticky" color="default">
		<StyledToolBar>
			{ children }
		</StyledToolBar>
	</StyledAppBar>
);

MainAppBar.propTypes = {
	children: PropTypes.node.isRequired
};

export default MainAppBar;