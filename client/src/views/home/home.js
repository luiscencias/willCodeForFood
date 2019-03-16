import React from 'react';

import Typography from '@material-ui/core/Typography';

import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ServicesSection from './ServicesSection';
import GallerySection from './GallerySection';

import { HeroLogo, CallToActionButton, SummarySection } from './styles';

import { useScrollToTopOnMount } from '../../helpers';

import Section from './Section';

const Home = () => {
	useScrollToTopOnMount();

	return (
		<main>
			<HeroSection />
			<GallerySection />
			<AboutSection />
			<ServicesSection />
		</main>
	);

};

export default Home;