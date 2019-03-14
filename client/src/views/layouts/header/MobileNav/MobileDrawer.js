import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import Drawer from '@material-ui/core/Drawer';

const StyledDrawer = withStyles(theme => ({
	root: {
		
	},
	paper: {
		maxWidth: `calc( 100vw - ${theme.spacing.unit * 7}px )`,
		width: theme.spacing.unit * 35,

		[theme.breakpoints.down('xs')]: {
			
		}
	}
}))(Drawer);

const MobileDrawer = ({ isOpen, onClose, children }) => (
	<StyledDrawer anchor="left" open={isOpen} onClose={onClose}>
		{ children }
	</StyledDrawer>
);

MobileDrawer.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired,
	children: PropTypes.node.isRequired
};

export default MobileDrawer;