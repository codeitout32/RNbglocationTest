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
  Stack,
  Skeleton,
} from "@mui/material";
import ButtonWhite from "src/theme/buttonWhite";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { url } from "inspector";
import LatestItem from "./latestItem";

import { useSelector } from "react-redux";
import { newsListSelector } from "@next/common/selectors";
import ButtonTransparent from "src/theme/buttonTransparent";
import BigWrapper from "./bigWrapper";

type NewsLatest = {
  asSidebar: boolean;
};

const NewsLatest = ({ asSidebar }: { asSidebar: Boolean | undefined }) => {
  const newsList = useSelector(newsListSelector);

  const latestNewsList = newsList.rows
    ? newsList?.rows.filter((news) => news.is_latest === 1)
    : [];
  const [headNews, ...restNews] = latestNewsList;
  console.log("newslist", restNews);

  const sideBar = (
    <Paper
      sx={{
        overflow: "hidden",
        bgcolor: "primary.main",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {restNews.length ? (
        restNews.map((news, index) => {
          if (index < 4) return <LatestItem key={index} news={news} />;
        })
      ) : (
        <Skeleton variant="rectangular" height={500} />
      )}
    </Paper>
  );
  return (
    <Paper
      sx={{
        borderRadius: 10,
        mt: 5,
        pt: 5,
        display: "flex",
        flexDirection: "column",
        background: "linear-gradient(180deg, #3F3F46 0%, #000000 25%)",
        "& img": { borderRadius: "20px" },
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant={asSidebar ? "h5" : "h3"}
          textAlign={asSidebar ? "left" : "center"}
          component="div"
          sx={{
            my: asSidebar ? 1 : 7,
          }}
        >
          The Latest
        </Typography>
        {asSidebar ? (
          sideBar
        ) : (
          <BigWrapper headNews={headNews}>{sideBar}</BigWrapper>
        )}
      </Container>
    </Paper>
  );
};

export default NewsLatest;
