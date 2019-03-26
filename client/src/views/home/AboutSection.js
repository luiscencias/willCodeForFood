import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import { Link } from 'react-router-dom';

import Section from './Section';

const StyledSection = withStyles(theme => ({
	root: {
		'& .about-section-text': {
			[theme.breakpoints.up('4-col')]: {
				gridColumn: '1 / -1',
			},

			[theme.breakpoints.up('8-col')]: {
				gridColumn: '2 / span 6',
			},

			[theme.breakpoints.up('12-col')]: {
				gridColumn: '2 / span 10',
			}
		}

	}
}))(Section);

const AboutSection = () => (
	<StyledSection>
		<div className="about-section-text">
			<h2 align="center">About Us</h2>
			<p>
				The Professional Brotherhood of Engineers is an organization focused on developing leaders 
				for the future. Throughout the semester, PBE will have guest speakers from industry, 
				entrepreneurship events, social events with other organizations on campus, and tailgates.
			</p>
			<Link className="text-link" to="/about">Learn more about PBE</Link>
		</div>
	</StyledSection>
);

export default AboutSection;