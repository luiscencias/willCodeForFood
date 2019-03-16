import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import { styledTag } from '../../helpers';

import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import Section from './Section';

const StyledSection = withStyles(theme => ({
	root: {
		paddingTop: theme.spacing.unit * 2,
		paddingBottom: theme.spacing.unit * 2,

		'& .gallery-grid': {
			display: 'grid',

			height: 400,

			gridGap: `${theme.spacing.unit}px`,

			gridAutoRows: '1fr',

			[theme.breakpoints.up('4-col')]: {
				gridRow: '2 / span 1',
				gridColumn: '1 / -1',
				gridTemplateColumns: 'repeat(2, 1fr)',
				marginTop: theme.spacing.unit
			},

			[theme.breakpoints.up('8-col')]: {
				gridTemplateColumns: 'repeat(3, 1fr)',
				gridRow: '1 / span 1',
				gridColumn: '2 / -2',
				marginTop: 0
			},

			[theme.breakpoints.up('12-col')]: {
				gridTemplateColumns: 'repeat(4, 1fr)'
			},

			'& .gallery-image': {
				backgroundColor: theme.palette.secondary.dark
			}
		}
	}
}))(Section);

const IconLeft = withStyles(theme => ({
	root: {
		[theme.breakpoints.up('4-col')]: {
			gridColumn: '1 / span 2'
		},

		[theme.breakpoints.up('8-col')]: {
			gridColumn: '1 / span 1'
		},
	}
}))(IconButton);

const IconRight = withStyles(theme => ({
	root: {
		[theme.breakpoints.up('4-col')]: {
			gridColumn: '3 / span 2'
		},

		[theme.breakpoints.up('8-col')]: {
			gridColumn: '8 / span 1'
		},

		[theme.breakpoints.up('12-col')]: {
			gridColumn: '12 / span 1'
		}
	}
}))(IconButton);

const GallerySection = () => (
	<StyledSection>
		<IconLeft>
			<ChevronLeftIcon />
		</IconLeft>
		<div className="gallery-grid">
			<div className="gallery-image" />
			<div className="gallery-image" />
			<div className="gallery-image" />
			<div className="gallery-image" />
			<div className="gallery-image" />
			<div className="gallery-image" />
			<div className="gallery-image" />
			<div className="gallery-image" />
		</div>
		<IconRight>
			<ChevronRightIcon />
		</IconRight>
	</StyledSection>
);

export default GallerySection;