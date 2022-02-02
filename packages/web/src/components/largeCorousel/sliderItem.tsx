import {
  bottomNavigationActionClasses,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React, { Fragment } from "react";

const SliderItem = () => {
  return (
    <Fragment>
      <Card
        sx={{
          // maxWidth: "xl",
          backgroundColor: "#000",
          backgroundImage: `url("images/transparent_bg_1.png")`,
          backgroundSize: "cover",
          backgroundPositionY: "bottom",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          style={{
            background:
              "linear-gradient(rgb(0, 0, 0) 20%, rgba(100, 100, 100, 0) 40%)",
          }}
        >
          <CardContent sx={{ height: "100%" }}>
            <Container maxWidth="lg">
              <Grid
                container
                spacing={5}
                direction="row"
                justifyContent="center"
                alignItems="center"
                sx={{
                  height: {
                    xl: "60vh",
                    lg: "70vh",
                    md: "60vh",
                    sm: "35vh",
                    xs: "25vh",
                  },
                }}
              >
                <Grid item md={5}>
                  <Typography variant="h3">
                    Your NFT Hub: Your One stop for everything NFT related.
                  </Typography>
                  <Typography variant="body2" mt={4} fontSize={"1.2rem"}>
                    Powered by Nova Nerds
                  </Typography>
                </Grid>
                <Grid item></Grid>
                <Grid item md={6}>
                  <img src="images/banner_avatar1.svg" alt="" />
                </Grid>
              </Grid>
            </Container>
          </CardContent>

          {/* <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions> */}
        </div>
      </Card>
    </Fragment>
  );
};

export default SliderItem;
