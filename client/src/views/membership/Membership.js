import React from 'react';

import { useScrollToTopOnMount } from '../../helpers';

import IntroSection from './IntroSection';
import BenefitsSection from './BenefitsSection';
import HowToApplySection from './HowToApplySection';

const Membership = () => {
	useScrollToTopOnMount();

	return (
		<main>
			<IntroSection />
			<BenefitsSection />
			<HowToApplySection />
		</main>
	);

};

export default Membership;