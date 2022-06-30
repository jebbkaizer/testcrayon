import * as Icon from "@accelo/crayon-icons";
import { Grid } from "@mui/material";

export const Icons = () => {
  return (
    <>
      <Grid container direction="column" sx={{ width: 50 }}>
        <Grid item xs={2}>
          <Icon.FavouriteOutlineSm />
        </Grid>
        <Grid item xs={2}>
          <Icon.AssetOutlineSm />
        </Grid>
        <Grid item xs={2}>
          <Icon.CheckOutlineSm />
        </Grid>
        <Grid item xs={2}>
          <Icon.CompanyOutlineSm />
        </Grid>
        <Grid item xs={2}>
          <Icon.MilestoneOutlineSm />
        </Grid>
        <Grid item xs={2}>
          <Icon.SalesOutlineSm />
        </Grid>
      </Grid>
      <Grid container direction="column" rowSpacing={1.5} sx={{ width: 60 }}>
        <Grid item xs={2}>
          <Icon.FavouriteOutlineMd />
        </Grid>
        <Grid item xs={2}>
          <Icon.AssetOutlineMd />
        </Grid>
        <Grid item xs={2}>
          <Icon.CheckOutlineMd />
        </Grid>
        <Grid item xs={2}>
          <Icon.CompanyOutlineMd />
        </Grid>
        <Grid item xs={2}>
          <Icon.MilestoneOutlineMd />
        </Grid>
        <Grid item xs={2}>
          <Icon.SalesOutlineMd />
        </Grid>
      </Grid>
    </>
  );
};
