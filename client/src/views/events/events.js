import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import {useScrollToTopOnMount} from "../../helpers";
import axios from 'axios';

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
        alignContent: 'center'

    },
    inline: {
        display: 'inline',
    },
});

class Events extends React.Component {
    // useScrollToTopOnMount();
    constructor(props) {
        super(props);
        this.state = {
            events: []
        }
    }


    componentDidMount() {
        axios.get('http://localhost:8081/events')
            .then(res => {
                const events = res.data;
                this.setState({events});
            });
        // const { classes } = props;

    }

    render() {

        return (

            <List >
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp"
                                src="https://i1.wp.com/votenesbit.com/wp-content/uploads/2017/12/calendar-date-may15.png?resize=248%2C300&ssl=1"/>
                    </ListItemAvatar>
                    <ListItemText
                        primary="Celebrate"
                        secondary={
                            <React.Fragment>
                                <Typography component="span"  color="textPrimary">
                                    May 15, 2019
                                </Typography>
                                {" Helloooo Summer!! "}
                            </React.Fragment>
                        }
                    />
                </ListItem>
                {/*<ListItem alignItems="flex-start">*/}
                {/*<ListItemAvatar>*/}
                {/*<Avatar alt="Remy Sharp"  />*/}
                {/*</ListItemAvatar>*/}
                {/*<ListItemText*/}
                {/*primary="Summer BBQ"*/}
                {/*secondary={*/}
                {/*<React.Fragment>*/}
                {/*<Typography component="span" className={classes.inline} color="textPrimary">*/}
                {/*to Scott, Alex, Jennifer*/}
                {/*</Typography>*/}
                {/*{" — Wish I could come, but I'm out of town this…"}*/}
                {/*</React.Fragment>*/}
                {/*}*/}
                {/*/>*/}
                {/*</ListItem>*/}
                {/*<ListItem alignItems="flex-start">*/}
                {/*<ListItemAvatar>*/}
                {/*<Avatar alt="Remy Sharp"  />*/}
                {/*</ListItemAvatar>*/}
                {/*<ListItemText*/}
                {/*primary="Oui Oui"*/}
                {/*secondary={*/}
                {/*<React.Fragment>*/}
                {/*<Typography component="span" className={classes.inline} color="textPrimary">*/}
                {/*Sandra Adams*/}
                {/*</Typography>*/}
                {/*{' — Do you have Paris recommendations? Have you ever…'}*/}
                {/*</React.Fragment>*/}
                {/*}*/}
                {/*/>*/}
                {/*</ListItem>*/}

            </List>
        );
    }
}

// Events.propTypes = {
//     classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(Events);
// export default Events;