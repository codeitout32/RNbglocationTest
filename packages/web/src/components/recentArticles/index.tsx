import React, { Fragment } from "react";
import SliderItem from "./sliderItem";
import Carousel from "react-material-ui-carousel";
import {
  CardMedia,
  Container,
  Grid,
  Paper,
  Typography,
  Card,
  Box,
} from "@mui/material";
import ButtonWhite from "src/theme/buttonWhite";
import { url } from "inspector";
import ArticleItem from "./articleItem";

// taken from latest news

const RecentArticles = () => {
  const divStyle = {
    height: "270px",
    background:
      "linear-gradient(180deg, rgba(0,0,0,1) 10%, rgba(63,63,70,1) 36%)",
  };
  return (
    <Fragment>
      <Paper
        sx={{
          borderRadius: 10,
          mt: 5,
          pt: 5,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          background: "linear-gradient(180deg, #3F3F46 0%, #000000 15%);",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            textAlign="center"
            component="div"
            sx={{ my: 7 }}
          >
            Recent Articles
          </Typography>
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
        </Container>
        <div style={divStyle}></div>
      </Paper>
    </Fragment>
  );
};

export default RecentArticles;
