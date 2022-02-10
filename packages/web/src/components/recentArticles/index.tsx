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
import { newsListSelector } from "@next/common/selectors";
import { useSelector } from "react-redux";

// taken from latest news

const RecentArticles = () => {
  const divStyle = {
    position: "relative",
    top: "-200px",

    height: "270px",
    background: "linear-gradient(180deg, #000 0%, #3F3F46 100%)",
    marginBottom: "-200px",
  };

  const newsList = useSelector(newsListSelector);
  const recentNewsList = newsList.rows
    ? newsList?.rows.filter((news) => news.is_recent === 1)
    : [];
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
        <Container maxWidth="lg" sx={{ zIndex: 1 }}>
          <Typography
            variant="h3"
            textAlign="center"
            component="div"
            sx={{ my: 7 }}
          >
            Recent Articles
          </Typography>

          {recentNewsList.map((news, index) => (
            <ArticleItem key={index} news={news} />
          ))}

          {!recentNewsList.length && (
            <Typography
              variant="h5"
              textAlign="center"
              component="div"
              sx={{
                my: 7,
              }}
            >
              No News Found...
            </Typography>
          )}
          {/* <ArticleItem />
          <ArticleItem /> */}
        </Container>
        <div style={divStyle}></div>
      </Paper>
    </Fragment>
  );
};

export default RecentArticles;
