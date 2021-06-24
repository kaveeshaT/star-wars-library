import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';


const useStyles = makeStyles((theme) => ({
    root: {
        padding: '3vw',
        background: '#fff',
        height: '100vh',
        width: '100vw',
    },
    closeButton: {
        position: 'absolute',
        top: '1vw',
        right: '1vw',
    },
}));

export default function CharacterDetails({ characterData, handleClose }) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <IconButton aria-label="close" className={classes.closeButton} onClick={handleClose}>
                <HighlightOffIcon />
            </IconButton>
            <div>Name: {characterData.name}</div>
        </div>
    );
}
