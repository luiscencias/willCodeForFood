import React from 'react';

import { Header } from '../header';
import { Footer } from '../footer';

const AppLayout = ({ children }) => (
	<>
		<Header />
		{ children }
		<Footer />
	</>
);

export default AppLayout;