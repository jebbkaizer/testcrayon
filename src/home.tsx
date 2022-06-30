import { Box, Grid } from "@mui/material";
import { FC, useState } from "react";

import { CrayonTabs } from "@accelo/crayon-react";

import {
  Avatar,
  Icons,
  Paper,
  TabPanel,
  Tabs,
  Tokens,
  Typography
} from "./components";

export const Home: FC = () => {
  const [crayonTab, setCrayonTab] = useState<number>(0);

  const handleCrayonTabChange = (
    event: React.SyntheticEvent<Element, Event>,
    value: number
  ) => {
    setCrayonTab(value);
  };

  const crayonTabs = [
    {
      title: "Typography",
      value: 0,
    },
    {
      title: "Paper",
      value: 1,
    },
    {
      title: "Tabs",
      value: 2,
    },
    {
      title: "Avatar",
      value: 3,
    },
    {
      title: "Icons",
      value: 4,
    },
    { title: "Tokens", value: 5 },
  ];

  return (
    <Box sx={{ my: 3 }}>
      <CrayonTabs
        onChange={handleCrayonTabChange}
        tabs={crayonTabs}
        value={crayonTab}
      />

      <TabPanel value={crayonTab} index={0}>
        <Box sx={{ my: 1 }}>
          <Grid container spacing={2}>
            <Typography />
          </Grid>
        </Box>
      </TabPanel>
      <TabPanel value={crayonTab} index={1}>
        <Box sx={{ my: 1 }}>
          <Grid container spacing={2}>
            <Paper />
          </Grid>
        </Box>
      </TabPanel>
      <TabPanel value={crayonTab} index={2}>
        <Box sx={{ my: 1 }}>
          <Grid container spacing={2}>
            <Tabs />
          </Grid>
        </Box>
      </TabPanel>
      <TabPanel value={crayonTab} index={3}>
        <Box sx={{ my: 1 }}>
          <Grid container spacing={2}>
            <Avatar />
          </Grid>
        </Box>
      </TabPanel>
      <TabPanel value={crayonTab} index={4}>
        <Box sx={{ my: 1 }}>
          <Grid container>
            <Icons />
          </Grid>
        </Box>
      </TabPanel>
      <TabPanel value={crayonTab} index={5}>
        <Box sx={{ my: 1 }}>
          <Grid container>
            <Tokens />
          </Grid>
        </Box>
      </TabPanel>
    </Box>
  );
};
