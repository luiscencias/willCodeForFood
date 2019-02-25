import React from 'react';

import Typography from '@material-ui/core/Typography';

const Footer = () => (
	<footer>
		<section>
			<Typography>Find Us On</Typography>
			<Typography component="a" href="#">Instagram</Typography>
			<Typography component="a" href="#">Facebook</Typography>
		</section>
	</footer>
);

export default Footer;