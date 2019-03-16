import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import { styledTag } from '../../../helpers';

const MainContainer = withStyles(theme => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		minHeight: '100vh'
	}
}))(styledTag('div'));

export default MainContainer;