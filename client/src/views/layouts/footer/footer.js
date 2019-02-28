import React from 'react';

import Typography from '@material-ui/core/Typography';

import { MainFooter } from './styles';

const Footer = () => (
	<MainFooter>
		<section>
			<Typography variant="h6">Find Us On</Typography>
			<Typography component="a" href="#">Instagram</Typography>
			<Typography component="a" href="#">Facebook</Typography>
		</section>
	</MainFooter>
);

export default Footer;