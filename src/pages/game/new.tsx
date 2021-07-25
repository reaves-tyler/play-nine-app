import React, { useState } from 'react';
import axios from 'axios';
import { Button, Grid, Input } from '@material-ui/core';
import { useRouter } from 'next/router';
import { Header } from '../../components/Header';

export default function Games() {
    const [value, setValue] = useState('');
    const router = useRouter();
    const handleChange = (event) => setValue(event.target.value);

    const newGame = async () => {
        const game = await axios.post('/api/game/new', { name: value });
        router.push(`/game/${game.data._id}`);
    };

    return (
        <>
            <Header />
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Input value={value} onChange={handleChange} placeholder='Enter the name of your game' fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <Button variant='contained' color='primary' onClick={newGame} fullWidth disabled={!value}>
                        Play!
                    </Button>
                </Grid>
            </Grid>
        </>
    );
}
