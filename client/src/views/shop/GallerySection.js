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

			gridGap: "50px",

			gridColumn: '1 / -1',

			[theme.breakpoints.up('4-col')]: {
				gridRow: '2 / span 1',
				gridColumn: '1 / -1',
				gridTemplateColumns: 'repeat(3, 1fr)',
				gridAutoRows: '100px'
			},

			[theme.breakpoints.up('8-col')]: {
				gridTemplateColumns: 'repeat(, 1fr)',
				gridRow: '1 / span 1',
				gridAutoRows: '166px'
			},

			[theme.breakpoints.up('12-col')]: {
				gridTemplateColumns: 'repeat(4, 1fr)',
			},

			'& .gallery-image': {
				backgroundColor: theme.palette.secondary.dark,
				borderColor: theme.palette.text.secondary,
				border: '1px solid',
				transition: 'all .2s ease-in-out',

				'&:hover': {
					transform: 'scale(1.75)'
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
			<div className="gallery-image">
				{/* <span style={{color: "black", fontSize: "10pt", width: "50px", align: "center"}}>#1 -- ye inspired shirt (front)</span> */}
				<img src={"https://i.imgur.com/GWJsBmz.png"} width={"100%"} height={"100%"}/>
			</div>

			<div className="gallery-image">
				{/*<span style={{color: "black", fontSize: "10pt"}}>#1 -- ye inspired shirt (back)</span>*/}
				<img src={"https://i.imgur.com/hpnVQWf.png"} width={"100%"} height={"100%"}/>
			</div>

			<div className="gallery-image">
				{/*<span style={{color: "black", fontSize: "10pt"}}>#2 -- "CSTAT" shirt (front)</span>*/}
				<img src={"https://i.imgur.com/Icuh6pI.png"} width={"100%"} height={"100%"}/>
			</div>

			<div className="gallery-image">
				{/*<span style={{color: "black", fontSize: "10pt"}}>#2 -- "CSTAT" shirt (back)</span>*/}
				<img src={"https://i.imgur.com/CJDmUO7.png"} width={"100%"} height={"100%"}/>
			</div>

			<div className="gallery-image">
				{/*<span style={{color: "black", fontSize: "10pt"}}>#3 -- maroon OG shirt (front)</span>*/}
				<img src={"https://i.imgur.com/qR2Linm.png"} width={"100%"} height={"100%"}/>
			</div>

			<div className="gallery-image">
				{/*<span style={{color: "black", fontSize: "10pt"}}>#3 -- maroon OG shirt (back)</span>*/}
				<img src={"https://i.imgur.com/BtCHn1X.png"} width={"100%"} height={"100%"}/>
			</div>

			<div className="gallery-image">
				{/*<span style={{color: "black", fontSize: "10pt"}}>#4 -- simple PBE shirt [Lavender] (front)</span>*/}
				<img src={"https://i.imgur.com/UXWl7zL.png"} width={"100%"} height={"100%"}/>
			</div>

			<div className="gallery-image">
				{/*<span style={{color: "black", fontSize: "10pt"}}>#4 -- simple PBE shirt [Lavender] (back)</span>*/}
				<img src={"https://i.imgur.com/VV6CwP4.png"} width={"100%"} height={"100%"}/>
			</div>

			<div className="gallery-image">
				{/*<span style={{color: "black", fontSize: "10pt"}}>#5 -- simple PBE shirt [Navy] (front)</span>*/}
				<img src={"https://i.imgur.com/uMYw67b.png"} width={"100%"} height={"100%"}/>
			</div>

			<div className="gallery-image">
				{/*<span style={{color: "black", fontSize: "10pt"}}>#5 -- simple PBE shirt [Navy] (back)</span>*/}
				<img src={"https://i.imgur.com/WAUf3lb.png"} width={"100%"} height={"100%"}/>
			</div>

			<div className="gallery-image">
				{/*<span style={{color: "black", fontSize: "10pt"}}>#6 -- ye inspired crew neck (front)</span>*/}
				<img src={"https://i.imgur.com/3CCeC6R.png"} width={"100%"} height={"100%"}/>
			</div>

			<div className="gallery-image">
				{/*<span style={{color: "black", fontSize: "10pt"}}>#6 -- ye inspired crew neck (back)</span>*/}
				<img src={"https://i.imgur.com/dx1o4NU.jpg"} width={"100%"} height={"100%"}/>
			</div>

			<div className="gallery-image">
				{/*<span style={{color: "black", fontSize: "10pt"}}>#7 -- PBE maroon polo </span>*/}
				<img src={"https://i.imgur.com/nHqHvWE.png"} width={"100%"} height={"100%"}/>
			</div>

		</div>
	</StyledSection>
);

export default GallerySection;