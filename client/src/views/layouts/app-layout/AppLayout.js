import React from 'react';

import { Header } from '../header';
import { Footer } from '../footer';

import MainContainer from './MainContainer';

const AppLayout = ({ children }) => (
	<MainContainer>
		<Header isAuthenticated={false} />
		{ children }
		<Footer />
	</MainContainer>
);

export default AppLayout;