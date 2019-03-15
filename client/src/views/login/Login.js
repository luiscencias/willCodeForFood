import React from 'react';

import MainSection from './MainSection';
import FormContainer from './FormContainer';
import LoginForm from './LoginForm';
import FormHeader from './FormHeader';
import ForgotPasswordLink from './ForgotPasswordLink';

const Login = ({ location }) => (
	<MainSection>
		<FormContainer>
			<FormHeader />
			{ location.state ? <p className="redirect-error">You must log in to access <span className="redirect-from">{location.state.from.pathname}</span>.</p> : '' }
			<LoginForm handleSubmit={() => {}} />
		</FormContainer>
		<ForgotPasswordLink />
	</MainSection>
);

export default Login;