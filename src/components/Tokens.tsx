import * as CrayonTokens from "@accelo/crayon-tokens";
import { Box, Divider, Grid } from "@mui/material";
import { PaletteBox } from "./PaletteBox";

export const Tokens = () => {
  const colorStrings = [
    "Base",
    "Blue",
    "Purple",
    "Red",
    "Orange",
    "Green",
    "Magenta",
    "Success",
    "Danger",
  ];
  const colorPaletteRange = [
    "050",
    100,
    200,
    300,
    400,
    500,
    600,
    700,
    800,
    900,
  ];
  return (
    <>
      {colorStrings.map((colorString) => {
        return (
          <Box
            key={colorString}
            sx={{
              marginBottom: 3,
            }}
          >
            <h4 style={{ margin: 0 }}>{colorString}</h4>
            <Divider
              sx={{
                my: 1,
              }}
            />
            <Grid container spacing={2}>
              {colorPaletteRange.map((idx) => {
                const color = Object.entries(CrayonTokens).find(
                  ([key, value]) => key === `CrayonColor${colorString}${idx}`
                )?.[1];
                if (color) {
                  return (
                    <Grid item key={idx}>
                      <PaletteBox color={color.toString()} />
                    </Grid>
                  );
                }
              })}
            </Grid>
          </Box>
        );
      })}
    </>
  );
};
