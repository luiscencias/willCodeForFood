import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { styledTag } from '../../helpers';

import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import Section from './Section';

const StyledSection = withStyles(theme => ({
	root: {
		padding: 0,

		'& .gallery-grid': {
			display: 'grid',

			gridGap: 0,

			gridColumn: '1 / -1',

			[theme.breakpoints.up('4-col')]: {
				gridRow: '2 / span 1',
				gridColumn: '1 / -1',
				gridTemplateColumns: 'repeat(3, 1fr)',
				gridAutoRows: '100px'
			},

			[theme.breakpoints.up('8-col')]: {
				gridTemplateColumns: 'repeat(4, 1fr)',
				gridRow: '1 / span 1',
				gridAutoRows: '166px'
			},

			[theme.breakpoints.up('12-col')]: {
				gridTemplateColumns: 'repeat(6, 1fr)',
			},

			'& .gallery-image': {
				backgroundColor: theme.palette.secondary.dark,
				borderColor: theme.palette.text.secondary,
				border: '1px solid',
				transition: 'all .2s ease-in-out',
				src: "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjH_6awwYzhAhVGZKwKHaK-CTsQjhx6BAgBEAM&url=https%3A%2F%2Fwww.gettyimages.com%2F&psig=AOvVaw0N-QPggK8_5q0_cp1eqnl_&ust=1553026684099506",

				'&:hover': {
					transform: 'scale(1.025)'
				},

				'&:nth-child(4n)': {
					backgroundColor: theme.palette.secondary.main
				},

				'&:nth-child(3n)': {
					backgroundColor: theme.palette.secondary.light
				}
			}
		}
	}
}))(Section);

const IconLeft = withStyles(theme => ({
	root: {
		borderRadius: 0,

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
		borderRadius: 0,

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

const GallerySection = ({ topRef }) => (
	<StyledSection>
		<div ref={topRef} className="gallery-grid">
			<div className="gallery-image" />
			<div className="gallery-image" />
			<div className="gallery-image" />
			<div className="gallery-image" />
			<div className="gallery-image" />
			<div className="gallery-image" />
			<div className="gallery-image" />
			<div className="gallery-image" />
			<div className="gallery-image" />
			<div className="gallery-image" />
			<div className="gallery-image" />
			<div className="gallery-image" />
		</div>
	</StyledSection>
);

export default GallerySection;