import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import Drawer from '@material-ui/core/Drawer';

const StyledDrawer = withStyles(theme => ({
	paper: {
		minWidth: '60%'
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