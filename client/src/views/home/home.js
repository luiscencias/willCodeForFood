import React, { useRef } from 'react';

import Typography from '@material-ui/core/Typography';

import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ServicesSection from './ServicesSection';
import GallerySection from './GallerySection';
import QuoteSection from './QuoteSection';

import { HeroLogo, CallToActionButton, SummarySection } from './styles';

import { useScrollToTopOnMount } from '../../helpers';

import Section from './Section';

const scrollPastFold = ref => () => ref.current.scrollIntoView({
	behavior: 'smooth',
	block: 'start'
});

const Home = () => {
	useScrollToTopOnMount();

	const foldBottom = useRef(null);

	return (
		<main>
			<HeroSection scrollDownFunction={scrollPastFold(foldBottom)} />
			
			<GallerySection topRef={foldBottom} />
			<AboutSection />
			<ServicesSection />
			<QuoteSection />
		</main>
	);

};

export default Home;