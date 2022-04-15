import { Grid, Icon, Paper, Stack, Typography, Box } from "@mui/material";
import Linkm from "@mui/material/Link";
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
import ImgLgtbox from "./imgLgtbox";

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

  //Handle image error
  const [src, setSrc] = React.useState(
    `${process.env.NEXT_PUBLIC_IMAGE_URL}${news?.image}`
  );

  //Open lightbox
  const [isLbOpen, setIsLbOpen] = React.useState(false);

  React.useEffect(() => {
    // Rerender image in one single news
    setSrc(process.env.NEXT_PUBLIC_IMAGE_URL + news?.image);
  }, [news?.image]);

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
              width: { md: "320px", sm: "60%" },
              mx: { sm: "auto", md: 0 },
              ".img-div": {
                // objectFit: "cover",
                height: { md: "270px", xs: "300px" },
                width: { xs: "100%", md: "100%" },
                mx: "auto",
              },
            }}
          >
            {/* <Link href={`/news/${news?.id}/${getSlug(news?.title)}`} passHref> */}
            <a onClick={() => setIsLbOpen(true)}>
              <div style={{ position: "relative" }} className="img-div">
                <Image
                  src={news?.image ? src : "https://picsum.photos/200"}
                  alt="Picture of the author"
                  layout="fill"
                  // height={200}
                  // width={300}
                  objectFit="cover"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNcXg8AAdMBKJ79nBQAAAAASUVORK5CYII="
                  placeholder="blur"
                  onError={() => setSrc("https://picsum.photos/200")}
                />
              </div>
            </a>
            {/* <img src={news.image} onError={handleImageError} /> */}
          </Paper>
        </Grid>
        <Grid item md={7} xs={12}>
          <Box ml={1}>
            <Typography variant="h6" sx={{ mt: 1 }}>
              <Link href={`/news/${news?.id}/${getSlug(news?.title)}`} passHref>
                <a> {news?.title || dummy.title} </a>
              </Link>
            </Typography>
            <Linkm
              href={news?.external_url}
              color="text.primary"
              underline="none"
              target="_blank"
              onClick={
                news?.external_url ? null : () => alert("Link not found")
              }
            >
              <Typography variant="caption" sx={{ fontWeight: 700 }}>
                short&nbsp;
              </Typography>
            </Linkm>

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
              {parse(news?.description ?? "")}
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
      {isLbOpen && (
        <ImgLgtbox imgUrl={src ?? ""} setOpen={setIsLbOpen} news={news} />
      )}
    </Paper>
  );
};

export default ArticleItem;
