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
        };
    }


    componentDidMount() {
        fetch('http://localhost:8081/api/events')
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        events: result
                    });
                },
                // error handler
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const {events} = this.state;
        return (

            <List >
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp"
                                src="https://i1.wp.com/votenesbit.com/wp-content/uploads/2017/12/calendar-date-may15.png?resize=248%2C300&ssl=1"/>
                    </ListItemAvatar>
                    <ListItemText
                        primary={events.map(event => <div>{event.date}</div>)}
                        secondary={
                            <React.Fragment>
                                <Typography component="span"  color="textPrimary">
                                    { events.map(event => <div>{event.title}</div>) }
                                    {/*{events[0].title}*/}
                                </Typography>
                                {events.map(event => <div>{event.details}</div>)}
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