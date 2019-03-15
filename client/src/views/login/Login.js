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
			<LoginForm handleSubmit={() => {}} />
		</FormContainer>
		<ForgotPasswordLink />
	</MainSection>
);

export default Login;