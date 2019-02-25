import React from 'react';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const Home = () => (
	<>
		<section>
			<Button>Apply</Button>
			<Button>Log In</Button>
		</section>
		<section>
			<section>
				<Typography>About</Typography>
				<Typography paragraph>
					The Professional Brotherhood of Engineers is an organization focused on developing leaders for the future. Throughout the semester, PBE will have guest speakers from industry, entrepreneurship events, social events with other organizations on campus, and tailgates. PBE will expose its members to different career paths not exclusive to technical engineering. Change your college experience and join PBE at a minimum you will have 40 new friends!
				</Typography>
			</section>
			<section>
				<Typography>Events</Typography>
			</section>
		</section>
	</>
);

export default Home;