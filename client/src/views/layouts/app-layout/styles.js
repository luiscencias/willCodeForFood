import React from 'react';

import { withStyles } from '@material-ui/core/styles';

export const Main = withStyles(theme => ({
	main: {
		minHeight: `calc( 100vh - ${theme.spacing.mainHeader.height}px )`,
		backgroundColor: theme.palette.background.default
	}
}))( ({ children, classes }) => (<main className={classes.main}>{children}</main>) )