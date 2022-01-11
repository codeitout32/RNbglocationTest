import React, { Fragment } from "react";
import SliderItem from "./guideItem";
import Carousel from "react-material-ui-carousel";
import { Paper, Typography, Box, Stack, Container, Grid } from "@mui/material";
import GuideItem from "./guideItem";

const GuidesnLists = () => {
  const newslist = [
    {
      image: "https://picsum.photos/1200/300",
      title: "The 10 Biggest NFT Sales of 2021",
      date: "07-01-2022",
    },
    {
      image: "https://picsum.photos/1200/300",
      title: "The 10 Biggest NFT Sales of 2021",
      date: "05-01-2022",
    },
    {
      image: "https://picsum.photos/1200/300",
      title: "The 10 Biggest NFT Sales of 2021",
      date: "07-01-2022",
    },
    // {
    //   image: "https://picsum.photos/1200/300",
    //   title: "The 10 Biggest NFT Sales of 2021",
    //   date: "08-01-2022",
    // },
  ];
  return (
    <Fragment>
      <Paper sx={{ alignItems: "center", mt: 5, bgcolor: "black" }}>
        <Container maxWidth="lg">
          <Stack
            direction="column"
            justifyContent="flex-start"
            alignItems="center"
            spacing={2}
          >
            <Typography variant="h3" textAlign="center">
              Guides & Lists
            </Typography>
            <Grid
              container
              direction="row"
              justifyContent="space-evenly"
              alignItems="flex-start"
              spacing={2}
            >
              {newslist.map((news) => (
                <Grid item>
                  <GuideItem
                    image={news.image}
                    date={news.date}
                    title={news.title}
                  />
                </Grid>
              ))}
            </Grid>
          </Stack>
        </Container>
      </Paper>
    </Fragment>
  );
};

export default GuidesnLists;
