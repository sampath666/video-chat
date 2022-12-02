import React, { useContext, useState } from 'react';
import { Grid, Typography, Paper, makeStyles } from '@material-ui/core';
import { SocketContext } from '../Context';

const useStyles = makeStyles((theme) => ({
  video: {
    width: '450px',
    [theme.breakpoints.down('xs')]: {
      width: '180px',
    },
    borderRadius: '20px',
  },
  gridContainer: {
    justifyContent: 'center',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  paper: {
    padding: '20px',
    margin: '10px',
    borderRadius: '20px',
    backgroundColor: '#9497B2',
    paddingTop: '30px',
    paddingLeft: '30px',
  },
  heading: {
    fontSize: '30px',
    color: '#274DAF',
    fontWeight: 'bold',
  },
  tempButton: {
    borderRadius: 15,
    backgroundColor: '#9497B2',
    color: '#274DAF',
    width: '70px',
    height: '42px',
    fontWeight: 'bold',
    padding: '0px',
    marginRight: '12px',
    marginTop: '10px',
  },
  con: {
    width: '450px',
    display: 'flex',
    justifyContent: 'center',
    borderRadius: '2px black solid',
    marginTop: '10px',
  },
}));

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);
  const classes = useStyles();
  const [mute] = useState(true);

  return (
    <Grid container className={classes.gridContainer}>
      {stream && (
        <Paper className={classes.paper}>
          <Grid item xs={12} md={6}>
            <Typography className={classes.heading} variant="h5" gutterBottom>{name || 'Name'}</Typography>
            <video playsInline muted="false" ref={myVideo} autoPlay className={classes.video} />
          </Grid>
        </Paper>
      )}
      {callAccepted && !callEnded && (
        <Paper className={classes.paper}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>{call.name || 'Name'}</Typography>
            <video playsInline muted={mute} ref={userVideo} autoPlay className={classes.video} />
          </Grid>
        </Paper>
      )}
    </Grid>
  );
};

export default VideoPlayer;
