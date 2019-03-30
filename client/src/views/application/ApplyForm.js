import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Formik, Form } from 'formik';

import * as Yup from 'yup';

import { Link } from 'react-router';

import PasswordField from './PasswordField';
import EmailField from './EmailField';
import SubmitButton from './SubmitButton';
import FirstNameField from "./FirstNameField";
import LastNameField from "./LastNameField";
import PhoneNumberField from "./PhoneNumberField";
import GraduationField from "./GraduationField";
import MajorField from "./MajorField";
import ConfirmPasswordField from "./ConfirmPassword";
import axios from "axios";
import { withRouter } from "react-router";



const validationSchema = Yup.object({

	firstName: Yup
		.string("Enter your name")
		.required("Name is required"),
	lastName: Yup
		.string("Enter your name")
		.required("Name is required"),
	phoneNumber: Yup
		.string("Enter your phone number")
		.required("Phone number is required"),
	graduationYear: Yup
		.string("Enter your graduation year")
		.required("Graduation year is required"),
	major: Yup
		.string("Enter your major")
		.required("Major is required"),
	email: Yup
		.string("Enter your email")
		.email("You must enter a valid email")
		.required("Email is required"),
	password: Yup
		.string("Enter your password")
		.required("Password is required"),
	confirmPassword: Yup
		.string("Confirm your password")
		.required("You must confirm your password")
});

const initialValues = {
	firstName: '',
	lastName: '',
	email: '',
	phoneNumber: '',
	graduationYear: '',
	major: '',
	password: '',
	confirmPassword: '',

};

class InnerForm extends React.Component {
	handleSubmit = (values, formikBag) => {
		const { history } = this.props;
		alert(JSON.stringify(values));

		const post = {
			first_name: values.firstName,
			last_name: values.lastName,
			email: values.email,
			password: values.password,
		};

		axios({
			url: process.env.REACT_APP_API_URL + '/api/members',
			params: post,
			method: 'post',
		}).then(function (response) {
			history.push("/");
		})
			.catch(function (error) {
				console.log(error);
			});
	}

	render() {
		return (
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={this.handleSubmit}
			>
				{() => (
					<Form>
						<FirstNameField/>
						<LastNameField/>
						<EmailField />
						<PhoneNumberField/>
						<GraduationField/>
						<MajorField/>
						<PasswordField />
						<ConfirmPasswordField/>
						<SubmitButton />
					</Form>
				)}
			</Formik>
		)
	}
}

const ApplyForm = withRouter(InnerForm);

export default ApplyForm;