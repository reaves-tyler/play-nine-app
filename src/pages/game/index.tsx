import useSwr from 'swr';
import Link from 'next/link';
import { Card, CardActions, CardContent, Button, Grid } from '@material-ui/core';
import { Header } from '../../components/Header';
import axios from 'axios';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function games() {
    const { data, error, mutate } = useSwr('/api/game', fetcher);

    if (error) return <div>Failed to load games</div>;
    if (!data) return <div>Loading...</div>;

    const endGame = async (e, _id) => {
        await axios.patch(`/api/game/${_id}`, { active: false });
        mutate();
    };

    if (data.length === 0) {
        return (
            <>
                <Header />
                <Grid container>
                    <Grid item xs={12}>
                        <Link href='/game/new'>
                            <Button size='large' variant='contained' color='primary' fullWidth>
                                Create New Game
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
            </>
        );
    }

    return (
        <>
            <Header />
            <Grid container spacing={3}>
                {data.map(
                    (game) =>
                        game.active && (
                            <Grid item xs={6} key={game._id}>
                                <Card key={game.id}>
                                    <CardContent>{game.name}</CardContent>
                                    <CardActions>
                                        <Link href='/game/[id]' as={`/game/${game._id}`}>
                                            <Button size='large' color='primary'>
                                                Join
                                            </Button>
                                        </Link>
                                        <Button size='large' color='secondary' onClick={(e) => endGame(e, game._id)}>
                                            End
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        )
                )}
            </Grid>
        </>
    );
}
