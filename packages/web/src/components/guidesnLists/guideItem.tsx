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
import React, { Fragment } from "react";
import { handleImageError } from "@next/common/utils/handleImageError";
import Clamp from "react-multiline-clamp";
import Link from "next/link";

const GuideItem = ({ date, title, image, id }) => {
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
      <Link href={"/guides/" + id} passHref>
        <Card
          sx={{
            maxWidth: "350px",
            borderColor: "black",

            borderRadius: "5px",
            textAlign: "center",
            bgcolor: "black",
            py: 3,
            // height: "40vh",
            // minHeight: "430px",
          }}
        >
          <CardActionArea sx={{ zIndex: "1" }}>
            <CardMedia
              component="img"
              height="280"
              width="95%"
              image={image}
              onError={handleImageError}
              alt="green iguana"
              sx={{
                p: 0,
                border: 1,
                borderRadius: 2,
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
            <CardContent sx={{ mt: 3, textTransform: "capitalize" }}>
              {/* <Typography
              gutterBottom
              variant="subtitle2"
              component="div"
              color="text.secondary"
            >
              {date}
            </Typography> */}
              <Typography variant="h5" fontSize={{ xs: "1.87rem" }}>
                <Clamp withTooltip lines={2}>
                  {title} <br /> &nbsp;
                </Clamp>
              </Typography>
            </CardContent>
            <div style={divStyle}> Hello</div>
          </CardActionArea>
          {/* <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions> */}
        </Card>
      </Link>
    </Fragment>
  );
};

export default GuideItem;
