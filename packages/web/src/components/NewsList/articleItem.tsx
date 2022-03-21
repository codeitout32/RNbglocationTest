import { Grid, Icon, Paper, Stack, Typography, Box } from "@mui/material";
import mLink from "@mui/material/Link";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import React, { Fragment } from "react";
import ButtonTransparent from "src/theme/buttonTransparent";
import ButtonWhite from "src/theme/buttonWhite";
import Link from "next/link";
import moment from "moment";
import parse from "html-react-parser";

// utils
import { handleImageError } from "@next/common/utils/handleImageError";
import Image from "next/image";
import { getSlug } from "src/helper/generateSlug";

const ArticleItem = ({ news }) => {
  const dummy = {
    title:
      "Biden talks to China Xi for nearly 2 hours as they discuss Ukraine war",
    description:
      'US President Joe Biden talked to Chinese counterpart Xi Jinping for nearly two hours as the leaders discussed the war in Ukraine. Xi said China and US should "shoulder international responsibilities". The White House said, "President Biden described the implications and consequences if China provides material support to Russia as it conducts brutal attacks against Ukrainian cities and civilians.',
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
    <Paper elevation={3} sx={{ my: 1.5 }}>
      <Grid
        container
        alignItems="flex-start"
        sx={{
          // borderBottom: "1px solid ",
          p: 1,
          borderColor: "grey.700",
          // "&:hover": { cursor: "pointer" },
        }}
        spacing={0}
      >
        <Grid item md={4.7} xs={12}>
          <Paper
            sx={{
              // borderRadius: "10px",
              overflow: "hidden",
              bgcolor: "inherit",
              width: { md: "320px" },
              ".img-div": {
                // objectFit: "cover",
                height: { md: "270px" },
                width: { xs: "95%", md: "100%" },
                mx: "auto",
              },
            }}
          >
            <div style={{ position: "relative" }} className="img-div">
              <Image
                src={"" || "https://picsum.photos/200"}
                alt="Picture of the author"
                layout="fill"
                // height={200}
                // width={300}
                objectFit="cover"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNcXg8AAdMBKJ79nBQAAAAASUVORK5CYII="
                placeholder="blur"
                onError={handleImageError}
              />
            </div>
            {/* <img src={news.image} onError={handleImageError} /> */}
          </Paper>
        </Grid>
        <Grid item md={7} xs={12}>
          <Box ml={1}>
            <Typography variant="h6" sx={{ mt: 1 }}>
              <Link href={`news/${news.id}/${getSlug(news.title)}`} passHref>
                <a> {news.title || dummy.title} </a>
              </Link>
            </Typography>

            <Typography variant="caption" color="grey.700">
              {news?.author ? "By " + news?.author : "By Langston Thomas"}
              &nbsp;/&nbsp;
            </Typography>

            <Typography variant="caption" color="grey.700">
              {moment(news?.created_at)
                .utc()
                .format("hh:mm a on DD MMMM YYYY, dddd") || dummy.date}
            </Typography>

            {/* item details in grid
              <Grid container spacing={1}>
                <Grid item md={4}>
                  <Typography variant="caption" color="grey.700">
                    {news?.author ? "By " + news?.author : "By Langston Thomas"}
                  </Typography>
                </Grid>
                <Grid item md={8}>
                  <Typography variant="caption" color="grey.700">
                    {news?.created_at
                      ? moment(news?.created_at).utc().format("MMMM DD, YYYY")
                      : dummy.date}
                  </Typography>
                </Grid>
              </Grid> */}

            <Typography variant="body1" sx={{ mt: 1 }} component="div">
              {parse(news.description)}
            </Typography>
          </Box>
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
        {/* <Grid item md={1}>  arrow button in right
            <Stack direction="column" alignItems="center" spacing={2} ml={2}>
              <Link href={`news/${news.id}`}>
                <Icon sx={{ overflow: "visible" }} component={mLink}>
                  <ArrowCircleRightIcon
                    sx={{ fontSize: 40, color: "text.primary" }}
                  />
                </Icon>
              </Link>
            </Stack>
          </Grid> */}
      </Grid>
    </Paper>
  );
};

export default ArticleItem;
