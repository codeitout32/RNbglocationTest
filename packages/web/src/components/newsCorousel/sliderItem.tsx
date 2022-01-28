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

import moment from "moment";
import Link from "next/link";

const SliderItem = ({ date, title, image, id }) => {
  return (
    <Fragment>
      <StyledCard
        sx={{
          // border: "4px solid white",
          borderRadius: 2,

          pb: "6vh",
          bgcolor: "#27272A",
        }}
      >
        <Link href={`/news/${id}`}>
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
                {moment(date).format("DD MMM, YYYY")}
              </Typography>
              <Typography variant="h5" fontSize={24} color="text.primary">
                {title}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
        {/* <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions> */}
      </StyledCard>
    </Fragment>
  );
};

export default SliderItem;
