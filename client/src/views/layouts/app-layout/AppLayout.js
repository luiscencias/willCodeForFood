import React from 'react';

import { Header } from '../header';
import { Footer } from '../footer';

const AppLayout = ({ children }) => (
	<>
		<Header isAuthenticated={false} />
			<main>
				{ children }
			</main>
		<Footer />
	</>
);

export default AppLayout;