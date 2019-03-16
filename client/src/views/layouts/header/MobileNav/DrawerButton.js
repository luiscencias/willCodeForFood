import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const StyledIcon = withStyles(theme => ({
	
}))(MenuIcon);

const StyledIconButton = withStyles(theme => ({
	root: {
		color: 'inherit'
	}
}))(IconButton);

const DrawerButton = ({ onClick }) => (
	<StyledIconButton onClick={onClick}>
		<StyledIcon />
	</StyledIconButton>
);

DrawerButton.propTypes = {
	onClick: PropTypes.func.isRequired
};

export default DrawerButton;