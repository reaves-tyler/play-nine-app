import { Breadcrumbs, Grid } from "@material-ui/core";

export const Header = ({ page }: { page: string }) => {
  return (
    <Grid item>
      <Breadcrumbs aria-label="breadcrumb">{page}</Breadcrumbs>
    </Grid>
  );
};
