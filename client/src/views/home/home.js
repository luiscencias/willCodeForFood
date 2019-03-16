import React from 'react';

import Typography from '@material-ui/core/Typography';

import HeroSection from './HeroSection';

import { HeroLogo, CallToActionButton, SummarySection } from './styles';

import Section from './Section';

const Home = () => (
	<main>
		<HeroSection />
		<Section>
			<h2>Heading of this section</h2>
			<p>
				The Professional Brotherhood of Engineers is an organization focused on developing leaders 
				for the future. Throughout the semester, PBE will have guest speakers from industry, 
				entrepreneurship events, social events with other organizations on campus, and tailgates.
			</p>
		</Section>
	</main>
);

export default Home;