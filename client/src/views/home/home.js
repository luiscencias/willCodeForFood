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
			<p>Paragraph of this section</p>
		</Section>
		<SummarySection>
			<section>
				<Typography variant="h5">About</Typography>
				<Typography paragraph>
					The Professional Brotherhood of Engineers is an organization focused on developing leaders for
					the future. Throughout the semester, PBE will have guest speakers from industry, entrepreneurship
					events, social events with other organizations on campus, and tailgates. PBE will expose its members
					to different career paths not exclusive to technical engineering. Change your college experience and
					join PBE at a minimum you will have 40 new friends!
				</Typography>
			</section>
			<section>
				<Typography variant="h5">Events</Typography>
			</section>
		</SummarySection>
	</main>
);

export default Home;