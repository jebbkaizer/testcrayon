import { CrayonPaper } from "@accelo/crayon-react";
import { Box, Tooltip } from "@mui/material";

export const PaletteBox = ({ color }: { color: string }) => (
  <Tooltip title={color} placement="bottom">
    <Box
      sx={{
        width: 50,
        height: 50,
      }}
    >
      <CrayonPaper
        style={{
          height: 50,
          background: color,
        }}
      />
    </Box>
  </Tooltip>
);
