import React from 'react';

import MainSection from './MainSection';
import LoginForm from './LoginForm';
import FormHeader from './FormHeader';
import ForgotPasswordLink from './ForgotPasswordLink';

import { useScrollToTopOnMount } from '../../helpers';

const Login = ({ location }) => {
	useScrollToTopOnMount();

	return (
		<MainSection>
			<div className="form-container">
				<FormHeader />
				{ location.state ? <p className="redirect-error">You must log in to access <span className="redirect-from">{location.state.from.pathname}</span>.</p> : '' }
				<LoginForm handleSubmit={() => {}} />
			</div>
			<ForgotPasswordLink />
		</MainSection>
	);
};

export default Login;