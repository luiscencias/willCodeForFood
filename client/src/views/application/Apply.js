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

						//values = JSON.stringify(firs);
						//alert (values);

						//need rails url
						axios.post('http://localhost:8081/members', JSON.stringify(values.firstName));

					}} />
			</div>
		</MainSection>
	);
};

export default Apply;