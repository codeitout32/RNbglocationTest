import { Container, Grid, Link, Typography } from "@mui/material";
import React from "react";
import Logo from "src/theme/logo";

const Footer = () => {
  return (
    <Container maxWidth="lg" sx={{ minHeight: "250px" }}>
      <Grid container alignItems="center" height="inherit">
        <Grid item md={3}>
          <Grid container>
            <Grid item xs={4}>
              <Logo fontSize="large" />
            </Grid>
            <Grid item xs={8}>
              <Typography
                variant="body1"
                component="div"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontSize: ".8rem",
                }}
              >
                Your
              </Typography>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontSize: "1.2rem",
                }}
              >
                NFT Hub
              </Typography>
            </Grid>
          </Grid>
          <Typography
            variant="h6"
            component="div"
            sx={{
              mr: 2,

              fontSize: "1rem",
            }}
          >
            Your NFT Hub, the #1 NFT Marketplace.
          </Typography>
        </Grid>
        <Grid item md={3}>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{
              fontSize: "1rem",
            }}
            gutterBottom
          >
            Company
          </Typography>
          <Link href="#" underline="none" color="inherit">
            About US
          </Link>
          <Link href="#" underline="none">
            Privacy Policy
          </Link>
          <Link href="#">How To guide</Link>
          <Link href="#">About US</Link>
        </Grid>
        <Grid item md={3}></Grid>
        <Grid item md={3}></Grid>
      </Grid>
    </Container>
  );
};

export default Footer;
