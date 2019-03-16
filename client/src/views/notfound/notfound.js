import React from 'react';
import {HeroLogo, HeroSection} from './styles'

import { useScrollToTopOnMount } from '../../helpers';

const NotFound = () => {
	useScrollToTopOnMount();

	return (
		<HeroSection>
			<HeroLogo variant = "h3">
					Page Not Found
			</HeroLogo>

			<HeroLogo variant = "h6">
				(Wait, how did you get here?)
			</HeroLogo>

		</HeroSection>
	);
};

export default NotFound;