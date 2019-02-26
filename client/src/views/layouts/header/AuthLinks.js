import React from 'react';

import { AuthLink } from './styles';

import { Link } from 'react-router-dom';

const AuthLinks = () => (
	<>
		<AuthLink
			variant="outlined"
			color="secondary"
			size="small"
		>
			Log In
		</AuthLink>
		<AuthLink
			variant="contained"
			color="secondary"
			size="small"
		>
			Apply
		</AuthLink>
	</>
);

export default AuthLinks;