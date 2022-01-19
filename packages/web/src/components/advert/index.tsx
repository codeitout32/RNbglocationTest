import { Container, Grid, Typography } from "@mui/material";
import React from "react";

const Advert = () => {
  return (
    <div>
      <Container maxWidth="lg">
        <Grid container>
          <Grid>
            <Typography variant="h3"> Advertise With Us</Typography>
          </Grid>
          <Grid></Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Advert;
