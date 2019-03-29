import React from 'react';
import axios from 'axios';
import MainSection from './MainSection';
import ApplyForm from './ApplyForm';
import FormHeader from './FormHeader';

import { useScrollToTopOnMount } from '../../helpers';

const Apply = ({ location }) => {
	useScrollToTopOnMount();

	return (
		<MainSection>
			<div className="form-container">
				<FormHeader />
				{ location.state ? <p className="redirect-error">You must log in to access <span className="redirect-from">{location.state.from.pathname}</span>.</p> : '' }
				<ApplyForm
					handleSubmit={values => {
						//var formData = new FormData(values);
						//var json_str = JSON.stringify(values);
						//alert(json_str);

						//params.require(:member).permit(:email, :password, :password_confirmation, :first_name, :last_name)
						const post = {
							first_name: values.firstName,
							last_name: values.lastName,
							email: values.email,
							password: values.password,
							password_confirmation: values.confirmPassword,
						};

						axios({
							url: 'http://localhost:8081/api/members',
							params: post,
							method: 'post',
						});

					}} />
			</div>
		</MainSection>
	);
};

export default Apply;