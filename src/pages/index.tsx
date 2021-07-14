import React from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import { Header } from "../components/Header";

export default function Index() {
  return (
    <>
      <Header />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h3">Welcome to Play Nine!</Typography>
        </Grid>
        <Grid item xs={6}>
          <Button
            color="primary"
            size="large"
            href="/game/new"
            variant="outlined"
          >
            Start a new game
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            color="secondary"
            size="large"
            href="/game"
            variant="outlined"
          >
            Join a game
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
