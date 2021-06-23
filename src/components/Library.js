import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import axios from '../axios';

import ProfileCard from './ProfileCard';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2vw',
    },
}));

export default function Library() {
    const classes = useStyles();

    const [people, setPeople] = useState([]);

    useEffect(() => {
        (async () => {
            const getPeople = await axios.get('people');
            setPeople(getPeople.data.results);
            console.log(getPeople.data.results);
        })()
    }, []);
    console.log(people);
    return (
        <Grid container spacing={2} className={classes.root}>
            {people.map((data) => {
                return (
                    <Grid item xs={3}><ProfileCard name={data.name} /></Grid>
                )
            })}
        </Grid>
    );
}
