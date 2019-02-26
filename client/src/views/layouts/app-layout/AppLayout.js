import React from 'react';

import { Header } from '../header';
import { Footer } from '../footer';

import { Main } from './styles';

const AppLayout = ({ children }) => (
	<>
		<Header isAuthenticated={false} />
			<Main>
				{ children }
			</Main>
		<Footer />
	</>
);

export default AppLayout;