import "./App.css";
import { Home } from "./home";

import {
  AppBar, Container, Grid, Toolbar,
  Typography
} from "@mui/material";

function App() {
  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6">Crayon Test React App</Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Grid container spacing={2}>
          <Grid item>
            <Home />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default App;
