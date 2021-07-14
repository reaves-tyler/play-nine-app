import { useRouter } from "next/router";
import useSWR from "swr";
import { Grid } from "@material-ui/core";
import { Header } from "../../components/Header";

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
  const { data, error } = useSWR(
    () => query.id && `/api/game/${query.id}`,
    fetcher
  );

  if (error) return <div>{error.message}</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <>
      <Header />
      <Grid container spacing={3}>
        <Grid item xs={3}>
          {data.name}
        </Grid>
      </Grid>
    </>
  );
}
