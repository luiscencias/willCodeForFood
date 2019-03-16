import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import Section from './Section';

const StyledSection = withStyles(theme => ({
	root: {

		'& .about-section-text': {
			[theme.breakpoints.up('4-col')]: {
				gridColumn: '1 / -1',
			},

			[theme.breakpoints.up('8-col')]: {
				gridColumn: '1 / span 5',
			},

			[theme.breakpoints.up('12-col')]: {
				gridColumn: '1 / span 8',
			}
		},

		'& .about-us-image': {
			backgroundColor: theme.palette.grey[200],
			height: 250,

			[theme.breakpoints.up('4-col')]: {
				gridColumn: '1 / span 4',
				marginTop: theme.spacing.unit * 3
			},

			[theme.breakpoints.up('8-col')]: {
				gridColumn: '6 / span 3',
			},

			[theme.breakpoints.up('12-col')]: {
				gridColumn: '9 / span 4',
			}
		}

	}
}))(Section);

const AboutSection = () => (
	<StyledSection>
		<div className="about-section-text">
			<h2>About Us</h2>
			<p>
				The Professional Brotherhood of Engineers is an organization focused on developing leaders 
				for the future. Throughout the semester, PBE will have guest speakers from industry, 
				entrepreneurship events, social events with other organizations on campus, and tailgates.
			</p>
		</div>
		<div className="about-us-image"></div>
	</StyledSection>
);

export default AboutSection;