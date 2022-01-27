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
  const commuinty = [
    { title: "Twitter", link: "#" },
    { title: "Discord", link: "#" },
    { title: "FAQs", link: "#" },
  ];
  return (
    <Container maxWidth="lg">
      <Grid container height="inherit" sx={{ minHeight: "150px" }}>
        <Grid item md={3} xs={12}>
          <Grid container>
            <Grid item xs={3}>
              <Logo sx={{ fontSize: "3rem" }} />
            </Grid>
            <Grid item xs={9}>
              <Typography
                variant="body1"
                component="div"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                }}
              >
                Your
              </Typography>
              <Typography
                variant="h5"
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
            }}
          >
            Your NFT Hub, the #1 NFT Marketplace.
          </Typography>
        </Grid>
        <Grid item md={3}></Grid>
        <Grid item md={3} xs={6}>
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
        <Grid item md={3} xs={6}>
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
          {commuinty.map((item) => (
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
      <Typography
        variant="body2"
        component="p"
        sx={{
          mr: 2,
          // fontSize: "1rem",
        }}
      >
        &copy;2021 NFTHUB All rights reserved
      </Typography>
    </Container>
  );
};

export default Footer;
