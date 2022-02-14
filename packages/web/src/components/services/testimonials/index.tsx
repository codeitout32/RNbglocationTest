import {
  Avatar,
  Box,
  CardActionArea,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { title } from "process";
import React from "react";
import StyledGradPaper from "./gradPaper";
import Marquee from "react-fast-marquee";

const Testimonials = () => {
  const tList = [
    {
      image: "https://picsum.photos/65",
      title: "Zaire Siphron",
      content: "",
    },
    {
      image: "https://picsum.photos/65",
      title: "Zaire Siphron",
      content: "",
    },
    {
      image: "https://picsum.photos/65",
      title: "Zaire Siphron",
      content: "",
    },
  ];

  const brandList = [
    {
      title: "bitcoin",
      image: "/images/testimonials/bitcoin.svg",
      link: "#",
    },
    {
      title: "ethreum",
      image: "/images/testimonials/ethreum.svg",
      link: "#",
    },
    {
      title: "litecoin",
      image: "/images/testimonials/litecoin.svg",
      link: "#",
    },
    {
      title: "polkadot",
      image: "/images/testimonials/polkadot.svg",
      link: "#",
    },
    {
      title: "solana",
      image: "/images/testimonials/solana.svg",
      link: "#",
    },
    {
      title: "stellar",
      image: "/images/testimonials/stellar.svg",
      link: "#",
    },
    {
      title: "tron",
      image: "/images/testimonials/tron.svg",
      link: "#",
    },
    {
      title: "xrp",
      image: "/images/testimonials/xrp.svg",
      link: "#",
    },
  ];
  return (
    <>
      <StyledGradPaper>
        <Typography
          variant="h3"
          textAlign="center"
          component="div"
          sx={{ my: 7 }}
        >
          Testimonials
        </Typography>
        <Marquee direction="right" gradient={false}>
          {tList.map((test) => (
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
                flexDirection: "row",
              }}
              maxWidth={"540px"}
              width="40%"
              mx="auto"
              pl={3}
            >
              <Avatar
                alt="Remy Sharp"
                src={test.image}
                sx={{ width: 65, height: 65, mt: 1 }}
              />
              <Box className="dialog-box" p={3} pl={4}>
                <Typography
                  variant="body1"
                  component="p"
                  fontSize={"1.5rem"}
                  align="left"
                >
                  {test.title}
                </Typography>
                <Typography
                  variant="body2"
                  component="p"
                  fontSize={"1rem"}
                  align="left"
                  maxWidth={"380px"}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam, purus sit amet luctus venenatis, lectus magna
                  fringilla urna, porttitor
                </Typography>
              </Box>
            </Box>
          ))}
        </Marquee>
        <Box height={"5vh"} />
        <Marquee direction="left" gradient={false}>
          {tList.map((test) => (
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
                flexDirection: "row",
              }}
              maxWidth={"540px"}
              width="40%"
              mx="auto"
              pl={3}
            >
              <Avatar
                alt="Remy Sharp"
                src={test.image}
                sx={{ width: 65, height: 65, mt: 1, ml: 0 }}
              />
              <Box className="dialog-box" p={3} pl={4}>
                <Typography
                  variant="body1"
                  component="p"
                  fontSize={"1.5rem"}
                  align="left"
                >
                  {test.title}
                </Typography>
                <Typography
                  variant="body2"
                  component="p"
                  fontSize={"1rem"}
                  align="left"
                  maxWidth={"380px"}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam, purus sit amet luctus venenatis, lectus magna
                  fringilla urna, porttitor
                </Typography>
              </Box>
            </Box>
          ))}
        </Marquee>
        <Box height={"5vh"} />

        <Typography
          variant="h3"
          textAlign="center"
          component="div"
          sx={{ my: 7 }}
        >
          Who's Using It?
        </Typography>
        <Container maxWidth="lg">
          <Grid container spacing={8} justifyContent="center">
            {brandList.map((brand) => (
              <Grid item md={3} key={brand.title}>
                <CardActionArea href={brand.link}>
                  <CardMedia
                    component="img"
                    height="auto"
                    width="100%"
                    image={brand.image}
                    alt=""
                    sx={{ maxWidth: "180px", justifyContent: "center" }}
                  />
                </CardActionArea>
              </Grid>
            ))}
          </Grid>
        </Container>
      </StyledGradPaper>
    </>
  );
};

export default Testimonials;
