import { Container, Grid, Link, Typography } from "@mui/material";
import React from "react";
import Logo from "src/theme/logo";

const Footer = () => {
  const company = [
    { title: "About Us", link: "#" },
    { title: "Privacy Policy", link: "#" },
    { title: "How To guide", link: "#" },
    { title: "Terms of service", link: "#" },
  ];
  return (
    <Container maxWidth="lg">
      <Grid
        container
        alignItems="center"
        height="inherit"
        sx={{ minHeight: "250px" }}
      >
        <Grid item md={3}>
          <Grid container>
            <Grid item xs={4}>
              <Logo sx={{ fontSize: "3rem" }} />
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
        <Grid item md={3}></Grid>
        <Grid item md={3}>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={
              {
                //   fontSize: "1rem",
              }
            }
            gutterBottom
          >
            Company
          </Typography>
          {company.map((item) => (
            <Link
              href="#"
              underline="none"
              color="inherit"
              sx={{ display: "block" }}
            >
              {item.title}
            </Link>
          ))}
        </Grid>
        <Grid item md={3}>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={
              {
                //   fontSize: "1rem",
              }
            }
            gutterBottom
          >
            Community
          </Typography>
          {company.map((item) => (
            <Link
              href="#"
              underline="none"
              color="inherit"
              sx={{ display: "block" }}
            >
              {item.title}
            </Link>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Footer;
