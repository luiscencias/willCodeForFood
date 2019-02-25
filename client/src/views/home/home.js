import React from 'react';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const Home = () => (
	<>
		<section>
			<Typography variant="h1">PBE</Typography>
			<Button variant="contained" size="large">Apply</Button>
			<Button variant="outlined" size="large">Log In</Button>
		</section>
		<section>
			<section>
				<Typography variant="h5">About</Typography>
				<Typography paragraph>
					The Professional Brotherhood of Engineers is an organization focused on developing leaders for the future. Throughout the semester, PBE will have guest speakers from industry, entrepreneurship events, social events with other organizations on campus, and tailgates. PBE will expose its members to different career paths not exclusive to technical engineering. Change your college experience and join PBE at a minimum you will have 40 new friends!
				</Typography>
			</section>
			<section>
				<Typography variant="h5">Events</Typography>
			</section>
		</section>
	</>
);

export default Home;