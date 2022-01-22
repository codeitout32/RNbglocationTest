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
import { StyledCard } from "./styled/styledCard";

const SliderItem = ({ date, title, image }) => {
  return (
    <Fragment>
      <StyledCard
        sx={{
          // border: "4px solid white",
          borderRadius: 2,

          pb: 7,
          bgcolor: "#27272A",
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="300"
            image={image}
            alt="green iguana"
            sx={{ p: 1 }}
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
            <Typography variant="h5" fontSize={24} color="text.primary">
              {title}
            </Typography>
          </CardContent>
        </CardActionArea>
        {/* <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions> */}
      </StyledCard>
    </Fragment>
  );
};

export default SliderItem;
