import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React, { Fragment } from "react";

// taken from guidenlist item
const RelatedNewsItem = ({ news }) => {
  const { date, title } = news;
  const image = "https://picsum.photos/1200/300";
  const divStyle = {
    border: 1,
    borderRadius: 5,
    background:
      "radial-gradient(farthest-corner at 52% -16%, rgb(161, 161, 170) 20%, rgb(63, 63, 70) 68%)",
    // backgroundColor: "grey",
    height: "250px",
    position: "absolute",
    top: "180px",
    width: "100%",
    zIndex: -1,
  };
  return (
    <Fragment>
      <Card
        sx={{
          maxWidth: "350px",
          borderColor: "black",

          borderRadius: 5,
          textAlign: "center",
          bgcolor: "black",
          py: 3,
          height: "40vh",
          minHeight: "430px",
        }}
      >
        <Link href={`/news/${news.id}`}>
          <CardActionArea sx={{ zIndex: "1" }}>
            <CardMedia
              component="img"
              height="280"
              width="95%"
              image={image}
              sx={{
                p: 0,
                border: 1,
                borderRadius: 4,
                borderColor: "black",
                width: "90%",
                mx: "auto",
                position: "relative",
                top: 0,
                transition: ".5s",
                ":hover": {
                  top: "-20px",
                  zIndex: "1",
                },
              }}
            />
            <CardContent sx={{ mt: 4 }}>
              {/* <Typography
              gutterBottom
              variant="subtitle2"
              component="div"
              color="text.secondary"
            >
              {date}
            </Typography> */}
              <Typography variant="h5" sx={{ overflowWrap: "break-word" }}>
                {title.length > 20
                  ? title.substring(0, 25).concat("...")
                  : title}
              </Typography>
            </CardContent>
            <div style={divStyle}> Hello</div>
          </CardActionArea>
        </Link>
        {/* <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions> */}
      </Card>
    </Fragment>
  );
};

export default RelatedNewsItem;
