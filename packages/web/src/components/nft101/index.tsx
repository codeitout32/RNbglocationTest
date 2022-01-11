import React, { Fragment } from "react";
import SliderItem from "./sliderItem";
import Carousel from "react-material-ui-carousel";
import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import ButtonWhite from "src/theme/buttonWhite";

const NFT101 = () => {
  return (
    <Fragment>
      <Container sx={{ bgcolor: "primary.main" }} maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={6}>
            <Box>
              <Typography variant="h3">
                NFT 101: Everything You Need to Know
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
                NFTs are much easier to understand than most people think. This
                guide aims to demystify NFTs and give you a basic understanding
                of what they are, what they do, and most importantly, why they
                matter.
              </Typography>
              <ButtonWhite
                sx={{
                  textTransform: "capitalize",
                  mt: 3,
                  fontSize: ".7rem",
                  px: 4,
                  py: 2,
                }}
              >
                read more
              </ButtonWhite>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Paper
              sx={{
                borderRadius: "25px",
                overflow: "hidden",
                bgcolor: "primary.main",
              }}
            >
              <img src="https://picsum.photos/600/200" alt="" height="300" />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
};

export default NFT101;
