import { CrayonAvatar } from "@accelo/crayon-react";
import { Grid } from "@mui/material";

export const Avatar = () => {
  return (
    <>
      <Grid item>
        <CrayonAvatar name="John Smith" withBadge />
      </Grid>
    </>
  );
};
