import React from "react";
import { Button, Container, Grid } from "@material-ui/core";
import { Header } from "../components/Header";
import { Navigation } from "../components/Navigation";

export default function Index() {
  return (
    <Container maxWidth="sm">
      <Grid container spacing={3}>
        <Header page="Home" />
        <Grid item xs={12}>
          Welcome to Play Nine!
        </Grid>
        <Grid item xs={12}>
          <Button color="primary" size="large" href="/game/new">
            New Game
          </Button>
          <Button color="secondary" size="large" href="/game/new">
            New Game
          </Button>
        </Grid>
      </Grid>
      <Navigation />
    </Container>
  );
}
