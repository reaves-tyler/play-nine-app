import useSwr from "swr";
import Link from "next/link";
import {
  Card,
  CardActions,
  CardContent,
  Container,
  Button,
  Grid,
} from "@material-ui/core";
import { Header } from "../../components/Header";
import { Navigation } from "../../components/Navigation";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function games() {
  const { data, error } = useSwr("/api/game", fetcher);

  if (error) return <div>Failed to load games</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <Container>
      <Header page="Games" />
      <Grid container spacing={3}>
        {data.map((game) => (
          <Grid item xs={3}>
            <Card key={game.id}>
              <CardContent>{game.name}</CardContent>
              <CardActions>
                <Link href="/game/[id]" as={`/game/${game._id}`}>
                  <Button size="large" color="primary">
                    Join
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Navigation />
    </Container>
  );
}
