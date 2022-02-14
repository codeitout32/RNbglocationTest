import React, { Fragment } from "react";
import SliderItem from "./sliderItem";
import Carousel from "react-material-ui-carousel";
import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import ButtonWhite from "src/theme/buttonWhite";
import { useSelector } from "react-redux";
import { featuredNewsSelector } from "@next/common/selectors";
import LinkNext from "next/link";

import { handleImageError } from "@next/common/utils/handleImageError";
const FeaturedNews = () => {
  const featuredNews = useSelector(featuredNewsSelector);
  const [featured, ...rest] = featuredNews ? featuredNews.rows : [];
  return (
    <Fragment>
      <Container sx={{ bgcolor: "primary.main" }} maxWidth="lg">
        <Grid
          container
          spacing={5}
          sx={{ flexDirection: { xs: "column-reverse", md: "row" } }}
        >
          <Grid item md={6}>
            <Box>
              <Typography variant="h3">{featured?.title}</Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
                {featured?.short_description}
              </Typography>
              <LinkNext href={"/news/" + featured?.id} passHref>
                <ButtonWhite
                  sx={{
                    textTransform: "capitalize",
                    mt: 3,
                    fontSize: ".7rem",
                    px: 4,
                    py: 2,
                  }}
                  // href
                >
                  read more
                </ButtonWhite>
              </LinkNext>
            </Box>
          </Grid>
          <Grid item md={6}>
            <Paper
              sx={{
                borderRadius: "25px",
                overflow: "hidden",
                bgcolor: "primary.main",
              }}
            >
              <img
                src={featured.image}
                alt=""
                // height="300"
                onError={handleImageError}
                style={{ objectFit: "cover" }}
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
};

export default FeaturedNews;
