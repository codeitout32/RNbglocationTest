import React, { Fragment } from "react";
import SliderItem from "./sliderItem";
import Carousel from "react-material-ui-carousel";
import { Paper, Typography, Box } from "@mui/material";

const News = () => {
  const newslist = [
    {
      image: "https://picsum.photos/1200/300",
      title: "title1",
      date: "07-01-2022",
    },
    {
      image: "https://picsum.photos/1200/300",
      title: "title2",
      date: "05-01-2022",
    },
    {
      image: "https://picsum.photos/1200/300",
      title: "title3",
      date: "07-01-2022",
    },
    {
      image: "https://picsum.photos/1200/300",
      title: "title4",
      date: "08-01-2022",
    },
  ];
  return (
    <Fragment>
      <Paper sx={{ alignItems: "center", mt: 5, bgcolor: "black" }}>
        <Box sx={{ justifyContent: "center" }}>
          <Typography variant="h3" textAlign="center">
            News
          </Typography>
          <Carousel autoPlay={false} animation="slide">
            {newslist.map((news) => (
              <SliderItem
                image={news.image}
                date={news.date}
                title={news.title}
              />
            ))}
          </Carousel>
        </Box>
      </Paper>
    </Fragment>
  );
};

export default News;
