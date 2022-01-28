import { Grid, Icon, Paper, Stack, Typography } from "@mui/material";
import mLink from "@mui/material/Link";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import React, { Fragment } from "react";
import ButtonTransparent from "src/theme/buttonTransparent";
import ButtonWhite from "src/theme/buttonWhite";
import Link from "next/link";
const ArticleItem = ({ news }) => {
  const dummy = {
    description:
      "dum Sailing the OpenSea: Grifters, SEEDS, Vortex & More Sailing the OpenSea: Grifters, SEEDS, Vortex & More Sailing the OpenSea: Grifters, SEEDS, Vortex & More",
    date: "Jan 8 2022",
  };

  const showDate = (rawDate) => {
    const date = new Date(rawDate);
    return date.toLocaleDateString("en-us", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <>
      <Grid
        container
        alignItems="center"
        sx={{ borderBottom: "1px solid ", p: 5, borderColor: "grey.700" }}
        spacing={1}
      >
        <Grid item md={4} xs={12}>
          <Paper
            sx={{
              borderRadius: "10px",
              overflow: "hidden",
              bgcolor: "inherit",
              width: "250px",
            }}
          >
            <img height="180px" width="auto" src={news.image} />
          </Paper>
        </Grid>
        <Grid item md={7} xs={12}>
          <Grid container spacing={1}>
            <Grid item md={4}>
              <Typography variant="body1" color="grey.700">
                {news?.author ? "By " + news?.author : "By Langston Thomas"}
              </Typography>
            </Grid>
            <Grid item md={8}>
              <Typography variant="body1" color="grey.700">
                {news?.posted_on ? showDate(news?.posted_on) : dummy.date}
              </Typography>
            </Grid>
          </Grid>

          <Typography variant="h6" sx={{ mt: 1 }}>
            {news?.short_description
              ? news?.short_description
              : dummy.description}
          </Typography>
          {/* <ButtonTransparent
              sx={{
                textTransform: "capitalize",
                mt: 3,
                fontSize: ".7rem",
                px: 4,
                py: 2,
              }}
            >
              read more
            </ButtonTransparent> */}
        </Grid>
        <Grid item md={1}>
          <Stack direction="column" alignItems="center" spacing={2}>
            <Link href={`news/${news.id}`}>
              <Icon sx={{ overflow: "visible" }} component={mLink}>
                <ArrowCircleRightIcon
                  sx={{ fontSize: 40, color: "text.primary" }}
                />
              </Icon>
            </Link>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default ArticleItem;
