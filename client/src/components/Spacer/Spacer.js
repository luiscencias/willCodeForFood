import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import { styledTag } from '../../helpers';

const Spacer = withStyles(theme => ({
	root: {
		flexGrow: 1
	}
}))(styledTag('span'));

export default Spacer;