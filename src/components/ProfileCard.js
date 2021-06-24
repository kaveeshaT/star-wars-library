import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Avatar } from 'react-avataaars';

const useStyles = makeStyles((theme) => ({
    root: {
        cursor: 'pointer',
        height: '100%',
        transition: 'all 0.3s',
        overflow:'visible',
        '& .avatar': {
            transition: 'all 0.3s',
        },
        '&:hover': {
            transform: 'scale(1.05)',
            transition: 'all 0.3s',
            '& .avatar': {
                transform: 'scale(1.1)',
                transition: 'all 0.3s',
            }
        },
    },
    avatarWrapper: {
        display: 'flex',
        justifyContent: 'center',
    }
}));

export default function ProfileCard({ name }) {
    const classes = useStyles();
    const hash = 'random-string';
    const options = {
      clothes: 'shirt',
      colorfabric: 'black',
      mouth: 'default',
      eyebrow: 'happy',
      eyes: 'default',
      skin: 'light',
      top: 'short',
      style: 'circle',
    };
    return (
        <Card className={classes.root} elevation={3}>
            <div className={classes.avatarWrapper}>
                <Avatar className="avatar" options={options} hash={hash} />
            </div>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {name}
                </Typography>
            </CardContent>
        </Card>
    );
}
