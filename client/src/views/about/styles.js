import React from 'react';

import {withStyles } from '@material-ui/core/styles';

import Typography from "@material-ui/core/Typography";


export const thumbnailGalleryStyles = {
    background: '#ddd',
    height: '500px',
    width: '1024px',
    margin: '40px auto',
    display: 'flex'
};

export const missionStatement = {
  margin: '40px auto',
  height: '400px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

export const HeroSection = withStyles(theme => ({
    'section': {
        minHeight: '120px',
        backgroundColor: theme.palette.primary.dark,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    }
}))( ({ children, classes }) => (<section className={classes.section}>{children}</section>) );

export const HeroLogo = withStyles(theme => ({
    root: {
        fontWeight: 400,
        color: theme.palette.secondary.main,
        marginBottom: theme.spacing.unit
    }
}))(Typography);