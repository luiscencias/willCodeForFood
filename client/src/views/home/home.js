import React from 'react';

import Typography from '@material-ui/core/Typography';

import HeroSection from './HeroSection';
import AboutSection from './AboutSection';

import { HeroLogo, CallToActionButton, SummarySection } from './styles';

import Section from './Section';

const Home = () => (
	<main>
		<HeroSection />
		<AboutSection />
	</main>
);

export default Home;