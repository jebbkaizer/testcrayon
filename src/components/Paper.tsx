import {
  CrayonPaper,
  CrayonPaperBorderWidth,
  CrayonPaperCornerRadius,
  CrayonPaperElevation,
  CrayonPaperOpacity,
} from "@accelo/crayon-react";
import { Grid } from "@mui/material";
import * as CrayonTokens from "@accelo/crayon-tokens";

export const Paper = () => {
  return (
    <>
      <Grid item>
        <CrayonPaper
          paperElevation={CrayonPaperElevation.DROP_500}
          backgroundColor={CrayonTokens.CrayonColorBase050}
          sx={{
            width: 100,
            height: 100,
          }}
        />
      </Grid>
      <Grid item>
        <CrayonPaper
          borderWidth={CrayonPaperBorderWidth.MD}
          cornerRadius={CrayonPaperCornerRadius.MD}
          backgroundColor={CrayonTokens.CrayonColorBase050}
          sx={{
            width: 100,
            height: 100,
          }}
        />
      </Grid>
      <Grid item>
        <CrayonPaper
          backgroundColor={CrayonPaperBorderWidth.MD}
          paperElevation={CrayonPaperElevation.DROP_500}
          opacity={CrayonPaperOpacity.LOW}
          sx={{
            width: 100,
            height: 100,
          }}
        />
      </Grid>
    </>
  );
};
