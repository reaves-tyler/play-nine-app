import { useRouter } from 'next/router';
import useSWR from 'swr';
import {
    Grid,
    Input,
    Button,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@material-ui/core';
import { Header } from '../../components/Header';
import React, { useState } from 'react';
import axios from 'axios';

const fetcher = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    if (res.status !== 200) {
        throw new Error(data.message);
    }
    return data;
};

export default function Game() {
    const { query } = useRouter();
    const { data, error, mutate } = useSWR(() => query.id && `/api/score/${query.id}`, fetcher);
    const [value, setValue] = useState<number>();

    if (error) return <div>{error.message}</div>;
    if (!data) return <div>Loading...</div>;

    const newScore = async (e, positive) => {
        await axios.post('/api/score', {
            gameID: query.id,
            player: 'Test Player',
            value: positive ? 0 + value : 0 - value,
        });
        setValue(0);
        mutate();
    };

    return (
        <>
            <Header />
            <Grid container>
                <Grid item xs={12}>
                    <Input
                        value={value}
                        onChange={(e) => setValue(Number(e.target.value))}
                        placeholder='Enter score'
                        fullWidth
                    />
                </Grid>
                <Grid item xs={6}>
                    <Button
                        variant='text'
                        color='secondary'
                        onClick={(e) => newScore(e, false)}
                        fullWidth
                        disabled={!value}>
                        Negative
                    </Button>
                </Grid>
                <Grid item xs={6}>
                    <Button
                        variant='text'
                        color='primary'
                        onClick={(e) => newScore(e, true)}
                        fullWidth
                        disabled={!value}>
                        Positive
                    </Button>
                </Grid>
                <br />
                <Grid item xs={12}>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Player</TableCell>
                                    <TableCell align='right'>Score</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.map((row) => (
                                    <TableRow key={row.name}>
                                        <TableCell component='th' scope='row'>
                                            {row.player}
                                        </TableCell>
                                        <TableCell align='right'>{row.value}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </>
    );
}
