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

const GuideItem = ({ date, title, image }) => {
  const divStyle = {
    border: 1,
    borderRadius: 5,
    background:
      "radial-gradient(farthest-corner at 52% -16%, rgb(161, 161, 170) 20%, rgb(63, 63, 70) 68%)",
    // backgroundColor: "grey",
    height: "250px",
    position: "relative",
    top: "-200px",
    zIndex: 0,
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
          pb: 3,
          height: "40vh",
          minHeight: "430px",
        }}
      >
        <CardActionArea sx={{ zIndex: "1" }}>
          <CardMedia
            component="img"
            height="280"
            width="95%"
            image={image}
            alt="green iguana"
            sx={{
              p: 0,
              border: 1,
              borderRadius: 4,
              borderColor: "black",
              width: "90%",
              mx: "auto",
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
            <Typography variant="h5">{title}</Typography>
          </CardContent>
        </CardActionArea>
        <div style={divStyle}> Hello</div>
        {/* <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions> */}
      </Card>
    </Fragment>
  );
};

export default GuideItem;
