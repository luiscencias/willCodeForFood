import React from 'react';

import MainSection from './MainSection';
import LoginForm from './LoginForm';
import FormHeader from './FormHeader';
import ForgotPasswordLink from './ForgotPasswordLink';

import { useScrollToTopOnMount } from '../../helpers';
import axios from "axios";

const Login = ({ location }) => {
	useScrollToTopOnMount();

	return (
		<MainSection>
			<div className="form-container">
				<FormHeader />
				{ location.state ? <p className="redirect-error">You must log in to access <span className="redirect-from">{location.state.from.pathname}</span>.</p> : '' }
				<LoginForm handleSubmit={(values) => {
					//alert(JSON.stringify(values));

					const post = {
						email: values.email,
						password: values.password,
					};

					axios({
						url: process.env.REACT_APP_API_URL + '/api/auth',
						params: post,
						method: 'post',
					}).then(function (response) {
						alert(JSON.stringify(response))

					})
						.catch(function (error) {
							console.log(error);
						});
				}} />
			</div>
			<ForgotPasswordLink />
		</MainSection>
	);
};

export default Login;