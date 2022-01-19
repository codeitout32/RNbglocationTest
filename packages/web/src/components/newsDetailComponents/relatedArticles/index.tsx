import React, { Fragment } from "react";
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

import { newsListSelector, singleNewsSelector } from "@next/common/selectors";
import { useSelector } from "react-redux";
import RelatedNewsItem from "./relatedNewsItem";
import { StyledPaper } from "./styles/styledRelNewsPape";

// taken from recent article index

const RelatedArticles = () => {
  const divStyle = {
    position: "relative",
    top: "-200px",

    height: "270px",
    background: "linear-gradient(0deg, #000 0%, #3F3F46 100%)",
    marginBottom: "-200px",
  };

  const singleNews = useSelector(singleNewsSelector);
  const relatedNews = singleNews?.relatedNews
    ? singleNews.relatedNews.rows
    : [];
  return (
    <Fragment>
      <StyledPaper
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
        {/* <div style={divStyle}></div> */}
        <Container maxWidth="lg" sx={{ zIndex: 1 }}>
          <Typography
            variant="h3"
            textAlign="center"
            component="div"
            sx={{ my: 7 }}
          >
            Related News
          </Typography>

          <Grid container spacing={3}>
            {relatedNews?.map((news, index) => (
              <Grid item md={4}>
                <RelatedNewsItem key={index} news={news} />
              </Grid>
            ))}
          </Grid>
          <Grid item xs={12} textAlign="center">
            <ButtonWhite> Explore</ButtonWhite>
          </Grid>

          {/* <ArticleItem />
          <ArticleItem /> */}
        </Container>
      </StyledPaper>
    </Fragment>
  );
};

export default RelatedArticles;
