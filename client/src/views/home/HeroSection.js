import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import { styledTag } from '../../helpers';

const Section = withStyles(theme => ({
	root: {
		backgroundColor: theme.palette.primary.dark,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',

		[theme.breakpoints.down('sm')]: {
			height: `calc( 100vh - ${theme.spacing.unit * 7}px )`
		},

		[theme.breakpoints.up('md')]: {
			height: `calc( 100vh - ${theme.spacing.unit * 8}px )`
		}
	}
}))(styledTag('section'));

const Title = withStyles(theme => ({
	root: {
		...theme.typography.h2,
		color: theme.palette.common.white,
		fontWeight: theme.typography.fontWeightMedium,
		marginBottom: '2.5rem',
		marginTop: '-8rem'
	}
}))(styledTag('h2'));

const Subtitle = withStyles(theme => ({
	root: {
		...theme.typography.h5,
		color: theme.palette.common.white,
		fontWeight: theme.typography.fontWeightLight,
		margin: 0
	}
}))(styledTag('h3'));

const HeroSection = () => (
	<Section>
		<Title>A compelling headline for this org</Title>
		<Subtitle>A subtitle which gives more info and sells the org</Subtitle>
	</Section>
);

export default HeroSection;

