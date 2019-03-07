import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';

export const HeroSection = withStyles(theme => ({
    'section': {
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    }
}))( ({ children, classes }) => (<section className={classes.section}>{children}</section>) );

export const HeroLogo = withStyles(theme => ({
    root: {
        fontWeight: 400,
        //fontSize: 1,
        //display: 'flex',
        //flexDirection: 'row',
        //alignItems: 'center',
        //justifyContent: 'center'
        //color: theme.palette.primary.main,
        //marginBottom: theme.spacing.unit
    }
}))(Typography);
