import {
  Box,
  Container,
  Grid,
  IconButton,
  Link,
  Typography,
} from "@mui/material";
import React from "react";
import Logo from "src/theme/logo";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";

const Footer = () => {
  const company = [
    // { title: "About Us", link: "#" },
    { title: "Privacy Policy", link: "/privacy" },
    // { title: "How To guide", link: "#" },
    { title: "Terms of service", link: "/terms" },
  ];
  const commuinty = [
    { title: "Twitter", link: "https://twitter.com/YourNFTHub" },
    { title: "Discord", link: "https://discord.gg/e9VDZyXmtH" },
    { title: "FAQs", link: "#" },
  ];
  return (
    <>
      <Box sx={{ backgroundColor: "#323232", color: "#fff" }} pb={2}>
        <Container maxWidth="lg">
          <Grid
            container
            height="inherit"
            sx={{ minHeight: "150px", pt: "20px" }}
          >
            <Grid
              item
              md={3}
              xs={6}
              sx={{
                borderRight: 1,
                display: "flex",
                alignItems: "flex-end",
                flexDirection: "column",
                pr: 2,
              }}
            >
              <Grid container justifyContent="flex-end" spacing={1}>
                <Grid item xs={2}>
                  {/* <Logo sx={{ fontSize: "3.8rem" }} /> */}
                  <img src="/svg/logo.svg" alt="" width={50} height="auto" />
                </Grid>
                <Grid item xs={0}>
                  <Typography
                    variant="h4"
                    component="div"
                    width="50%"
                    sx={{
                      display: { xs: "none", md: "flex" },
                      fontFamily: "DM Sans",
                    }}
                  >
                    SOLSHORTS
                  </Typography>
                </Grid>
              </Grid>
              <Typography
                variant="body2"
                color={"text.secondary"}
                component="p"
                align="right"
                width="50%"
                sx={{
                  my: 2,
                  // fontSize: "1rem",
                }}
              >
                <b>Solshorts</b> Pvt Ltd. Copyright &copy; 2022
              </Typography>
            </Grid>
            <Grid item xs={6} md={3} pl={2}>
              <Link
                target="_blank"
                href="mailto:abc@gmail.com"
                underline="none"
              >
                <Typography
                  variant="h4"
                  fontWeight={500}
                  // color="text.secondary"
                  sx={
                    {
                      //   fontSize: "1rem",
                    }
                  }
                  gutterBottom
                >
                  Contact us
                </Typography>
              </Link>
              <Typography
                variant="body2"
                color={"primary"}
                component="a"
                align="right"
                width="50%"
                target="_blank"
                href="#"
                sx={{
                  my: 2,
                  // fontSize: "1rem",
                }}
              >
                Terms &amp; conditions <br />
                Privacy Policies
              </Typography>
            </Grid>
            <Grid item md={3} xs={6}>
              {/* <Typography
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
              {company.map((item, index) => (
                <Link
                  href={item.link}
                  underline="none"
                  color="inherit"
                  sx={{
                    display: "block",
                    typography: "h6",
                    fontFamily: "DM Sans",
                  }}
                  key={item.title}
                >
                  {item.title}
                </Link>
              ))} */}
            </Grid>
            <Grid
              item
              md={3}
              xs={6}
              sx={{
                display: "flex",
                alignItems: "flex-end",
                ".MuiSvgIcon-root": { color: "white" },
              }}
            >
              <IconButton>
                <LinkedInIcon fontSize="large" />
              </IconButton>
              <IconButton>
                <TwitterIcon fontSize="large" />
              </IconButton>
              <IconButton>
                <FacebookIcon fontSize="large" />
              </IconButton>
            </Grid>
          </Grid>
          {/* <Typography
            variant="body1"
            color={"text.secondary"}
            component="p"
            sx={{
              my: 2,
              // fontSize: "1rem",
            }}
          >
            Copyright &copy; 2022 Your NFT Hub. All Rights Reserved.
          </Typography> */}
        </Container>
      </Box>
    </>
  );
};

export default Footer;
