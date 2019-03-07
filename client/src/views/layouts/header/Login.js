import React, { useState } from 'react';
import PropTypes from 'prop-types';

import LoginButton from './LoginButton';

const Login = () => {
	const [ modalIsVisible, setModalVisibility ] = useState( false );

	return <LoginButton onClick={() => setModalVisibility( true )} />;
};

export default Login;