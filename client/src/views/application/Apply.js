import React from 'react';

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
				<ApplyForm handleSubmit={() => {}} />
			</div>
		</MainSection>
	);
};

export default Apply;