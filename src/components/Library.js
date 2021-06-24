import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Modal from '@material-ui/core/Modal';
import axios from '../axios';

import ProfileCard from './ProfileCard';
import CharacterDetails  from './CharacterDetails';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2vw',
    },
}));

export default function Library() {
    const classes = useStyles();

    const [people, setPeople] = useState([]);
    const [open, setOpen] = React.useState(false);

    useEffect(() => {
        (async () => {
            const getPeople = await axios.get('people');
            setPeople(getPeople.data.results);
            console.log(getPeople.data.results);
        })()
    }, []);
    console.log(people);

    const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    return (
        <Grid container spacing={4} className={classes.root}>
            {people.map((data) => {
                return (
                    <Grid item xs={3}>
                        <ProfileCard name={data.name} onClick={handleOpen} />
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby={data.name}
                            aria-describedby="Character details"
                        >
                            <CharacterDetails characterData={data} handleClose={handleClose} />
                        </Modal>
                    </Grid>
                )
            })}
        </Grid>
    );
}
