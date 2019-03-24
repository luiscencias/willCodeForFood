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

				'&:hover': {
					transform: 'scale(1.85)'
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
			<div className="gallery-image"><img src={"https://instagram.fftw1-1.fna.fbcdn.net/vp/f6b805fb1b129d6c260501a314a178f5/5D2A11EB/t51.2885-15/e35/39952037_539216823177415_9116474508000130641_n.jpg?_nc_ht=instagram.fftw1-1.fna.fbcdn.net"} width={"100%"} height={"100%"}/></div>
			<div className="gallery-image"><img src={"https://instagram.fftw1-1.fna.fbcdn.net/vp/ddbcd4e30ed5d35940d63de642788de3/5D13CFD5/t51.2885-15/e35/52713135_2323907557932378_8977152329679767459_n.jpg?_nc_ht=instagram.fftw1-1.fna.fbcdn.net"} width={"100%"} height={"100%"}/></div>
			<div className="gallery-image"><img src={"https://instagram.fftw1-1.fna.fbcdn.net/vp/3eb89330c0733586b61e955d2fc79b6d/5D0DAED6/t51.2885-15/e35/41739254_2473917379293001_5623219170017712919_n.jpg?_nc_ht=instagram.fftw1-1.fna.fbcdn.net"} width={"100%"} height={"100%"}/></div>
			<div className="gallery-image"><img src={"https://instagram.fftw1-1.fna.fbcdn.net/vp/cd92b0ab448a9f6d4aa94e159b662cf5/5D1FC60D/t51.2885-15/e35/40281407_1116450308533348_7620834114249162752_n.jpg?_nc_ht=instagram.fftw1-1.fna.fbcdn.net"} width={"100%"} height={"100%"}/></div>
			<div className="gallery-image"><img src={"https://instagram.fftw1-1.fna.fbcdn.net/vp/3ad38223df89e311df0f1981c3da4a81/5D4A633B/t51.2885-15/e35/49627641_2216145098698096_9151043469505953462_n.jpg?_nc_ht=instagram.fftw1-1.fna.fbcdn.net"} width={"100%"} height={"100%"}/></div>
			<div className="gallery-image"><img src={"https://instagram.fftw1-1.fna.fbcdn.net/vp/4c7fdc0f82590db74e1040e0289e706e/5D12C363/t51.2885-15/e35/51098330_2046036468814112_2964575966984489950_n.jpg?_nc_ht=instagram.fftw1-1.fna.fbcdn.net"} width={"100%"} height={"100%"}/></div>
			<div className="gallery-image"><img src={"https://instagram.fftw1-1.fna.fbcdn.net/vp/c85de497ae4a5034fdc17128f820a484/5D1B7013/t51.2885-15/e35/51683224_305670483473571_9178803700954198597_n.jpg?_nc_ht=instagram.fftw1-1.fna.fbcdn.net"} width={"100%"} height={"100%"}/></div>
			<div className="gallery-image"><img src={"https://instagram.fftw1-1.fna.fbcdn.net/vp/595b42e918c23c91addbc4c2ff72a566/5D152BC6/t51.2885-15/e35/50815357_2128650320546967_5441205527428140863_n.jpg?_nc_ht=instagram.fftw1-1.fna.fbcdn.net"} width={"100%"} height={"100%"}/></div>
			<div className="gallery-image"><img src={"https://instagram.fftw1-1.fna.fbcdn.net/vp/fd4fbeea6bdbf5a5e7f8fa4996f722ff/5D15E5F6/t51.2885-15/e35/51411296_2239986649589246_3525185031546061425_n.jpg?_nc_ht=instagram.fftw1-1.fna.fbcdn.net"} width={"100%"} height={"100%"}/></div>
			<div className="gallery-image"><img src={"https://instagram.fftw1-1.fna.fbcdn.net/vp/79626616228bf107b57a32951f205e62/5D179080/t51.2885-15/e35/51014250_314883212502146_8062705633830261993_n.jpg?_nc_ht=instagram.fftw1-1.fna.fbcdn.net"} width={"100%"} height={"100%"}/></div>
			<div className="gallery-image"><img src={"https://instagram.fftw1-1.fna.fbcdn.net/vp/0d1b097cebabbeb3c0b7da01e6179224/5D2AA223/t51.2885-15/e35/52117858_396117654290536_1322657763217974316_n.jpg?_nc_ht=instagram.fftw1-1.fna.fbcdn.net"} width={"100%"} height={"100%"}/></div>
			<div className="gallery-image"><img src={"https://instagram.fftw1-1.fna.fbcdn.net/vp/97965d452b886a3ea45d6f7452148af6/5D1A3E7A/t51.2885-15/e35/52016886_1237904816359047_7028606463491129808_n.jpg?_nc_ht=instagram.fftw1-1.fna.fbcdn.net"} width={"100%"} height={"100%"}/></div>
		</div>
	</StyledSection>
);

export default GallerySection;