import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import React, { Fragment } from "react";
import ButtonTransparent from "src/theme/buttonTransparent";
import ButtonWhite from "src/theme/buttonWhite";
import Link from "next/link";
const LatestItem = ({ news }) => {
  console.log("newsitem", news);
  return (
    <>
      <Grid container spacing={1.5} justifyContent="center" sx={{ my: 0.5 }}>
        <Grid item md={4}>
          <Paper
            sx={{
              overflow: "hidden",
              bgcolor: "inherit",
              img: {
                objectFit: "cover",
              },
            }}
          >
            <img height="120px" width="120px" src={news.image} />
          </Paper>
        </Grid>
        <Grid item md={8}>
          <Paper sx={{ bgcolor: "inherit" }}>
            <Typography variant="h6">{news.title}</Typography>
            <Link href={"/news/" + news.id}>
              <ButtonTransparent
                sx={{
                  textTransform: "capitalize",
                  mt: 1,
                  fontSize: ".7rem",
                  px: 0,
                }}
              >
                read more {"  "}
                <ArrowForwardIcon sx={{ ml: 2, fontSize: "1.1rem" }} />
              </ButtonTransparent>
            </Link>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default LatestItem;
