import React from 'react';
import {
    Typography,
    Container,
    Grid
} from '@material-ui/core';
// import { animateHTML } from './FadeInOnView.jsx'



// document.documentElement.style
//     .setProperty('--schedule-opacity', document.getElementsByClassName("hidden").length > 0 ? '0' : '1');

const styles = {
    header: {
        padding: '30px'
    },
    date: {
        marginLeft: '5px',
        marginBottom: '20px',
        textAlign: 'left',
        color: 'white'
    },
    time: {
        marginLeft: '25px',
        width: '82px',
        textAlign: 'center',
        marginTop: '15px',
        fontSize: '23px'
    },
    description: {
        width: '187px',
        height: '80px',
        marginLeft: '50px',
        marginTop: '20px',
        textAlign: 'left',
        fontSize: '18px',
    },
};


const schedule_info = [{
        date: "Thursday, Sept 17",
        events: [{
                time: "6:00 pm",
                description: "Kick-Off and Theme Reveal"
            },
            {
                time: "7:00 pm",
                description: "Jamming starts!"
            },
        ],
    },
    {
        date: "Sunday, Sept 20",
        events: [{
                time: "11:00 am",
                description: "Jamming ends!"
            },
            {
                time: "12:00 pm",
                description: "itch.io page submissions due"
            },
        ],
    },
]

function createSchedule() {
    return (
        <div  >
            {schedule_info.map(date_item => {
                return (
                    <div  className="schedulesSingleGrid">
                        <Typography variant="h3" gutterBottom style={styles.date}>
                            {date_item.date}
                        </Typography>
                        {date_item.events.map(event => {
                            return (
                                <Container className="schedulesEvent">
                                    <Grid container spacing = {3} alignItems = "left" alignContent="center">
                                        <Grid item xs = {3}>
                                            <Typography variant="h4" style={styles.time}>{event.time}</Typography>
                                        </Grid>
                                        <Grid item xs = {9}>
                                            <Typography variant = "subtitle1" style={styles.description}>{event.description}</Typography>
                                        </Grid>
                                    </Grid>
                                </Container>
                    )})}</div>);
            })}
        </div>
    );
}



export class Schedule extends React.Component {

    // componentDidMount(){
    //     animateHTML().init()
    // }

    render() {
        return ( 
            <div align = "center" className = "schedulesMainGrid">
                <Typography variant = "h2" color = 'secondary' id = "schedule" style = {styles.header}> 
                    Schedule 
                </Typography> 
                {createSchedule()} 
                <div className = "schedulesBottomText" style={{marginTop: '20px'}}>
                    <Typography variant = "h4" style={{color: 'black', width: '100%', paddingTop: '15px', fontSize: '18px'}}>
                        Check back soon for times of the Game Jam Showcase, Judging, and the Closing and Awards Ceremony!
                    </Typography>
                </div>
            </div>
        )
    }
}