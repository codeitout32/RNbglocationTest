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

const SliderItem = ({ date, title, image }) => {
  return (
    <Fragment>
      <Card
        sx={{
          maxWidth: "20%",
          borderColor: "white",
          border: 1,
          borderRadius: 2,
          textAlign: "center",
          pb: 3,
          bgcolor: "secondary.main",
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image={image}
            alt="green iguana"
            sx={{ p: 0.5 }}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="subtitle2"
              component="div"
              color="text.secondary"
            >
              {date}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {title}
            </Typography>
          </CardContent>
        </CardActionArea>
        {/* <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions> */}
      </Card>
    </Fragment>
  );
};

export default SliderItem;
