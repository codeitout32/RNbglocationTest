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
          maxWidth: "xl",
          backgroundColor: "#000",
          backgroundImage: `url("images/diamond-roaring-dinosaur.png")`,
          height: {
            xl: "60vh",
            lg: "70vh",
            md: "60vh",
            sm: "35vh",
            xs: "25vh",
          },
          backgroundSize: "contain",
          backgroundPositionY: "bottom",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          style={{
            height: "inherit",
            background:
              "linear-gradient(rgb(0, 0, 0) 20%, rgba(100, 100, 100, 0) 40%)",
          }}
        >
          <CardContent>
            <Container maxWidth="lg">
              <Grid container spacing={2}>
                <Grid item md={8}>
                  <Typography variant="h3">
                    Your NFT Hub: Your One Stop for anything nft related
                  </Typography>
                </Grid>
                <Grid item md={4}>
                  <Typography variant="h6" mt={1}>
                    Powered by Nova Nerds
                  </Typography>
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
