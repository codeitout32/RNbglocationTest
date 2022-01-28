import {
  Container,
  Grid,
  TextField,
  Typography,
  Button,
  Paper,
  Box,
} from "@mui/material";
import React from "react";
import { styled } from "@mui/system";
import advertBackground from "public/images/space-astro-background.png";

const Advert = () => {
  console.log("image", advertBackground.src);
  return (
    <StyledDiv>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item md={6} xs={12} spacing={3}>
            <Typography variant="h3" gutterBottom>
              Advertise With Us
            </Typography>
            <Typography variant="body1" gutterBottom>
              Share your products and services on Your NFT Hub to reach the
              right NFT community audience.
            </Typography>
            <Box sx={{}}>
              <TextField
                variant="outlined"
                placeholder="Email"
                size="small"
                sx={{ width: "60%" }}
              />
              <Button variant="contained"> Subscribe</Button>
            </Box>
          </Grid>
          <Grid item></Grid>
        </Grid>
      </Container>
    </StyledDiv>
  );
};

export default Advert;

const StyledDiv = styled("div")`
  background: rgb(255, 255, 255);
  background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 18%,
      rgba(0, 0, 0, 0.6) 54%,
      rgba(63, 63, 70, 0) 81%
    ),
    url(${advertBackground.src});
  background-size: cover;

  height: 45vh;
  & .MuiContainer-root {
    padding: 8% 0;
  }
  & .MuiOutlinedInput-input {
    background: #f4f4f5;
    border-radius: 4px;
    color: black;
  }
  & .MuiButton-contained {
    border: 1px white solid;
    margin-left: 1%;
  }
`;
