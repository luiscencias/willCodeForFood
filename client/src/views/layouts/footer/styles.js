import React from 'react';

import { withStyles } from '@material-ui/core/styles';

export const MainFooter = withStyles(theme => ({
	footer: {
		display: 'flex',
		backgroundColor: theme.palette.primary.light,
		paddingLeft: theme.spacing.unit * 3,
		paddingRight: theme.spacing.unit * 3,
		paddingTop: theme.spacing.unit * 3,
		paddingBottom: theme.spacing.unit * 5
	}
}))( ({ children, classes }) => (<footer className={classes.footer}>{children}</footer>) );