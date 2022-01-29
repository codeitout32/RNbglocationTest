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

import { handleImageError } from "@next/common/utils/handleImageError";

const LatestItem = ({ news, asSidebar }) => {
  console.log("newsitem", news);
  return (
    <>
      <Grid container spacing={1} justifyContent="center" sx={{ my: 0.5 }}>
        <Grid item md={3}>
          <Paper
            sx={{
              overflow: "hidden",
              borderRadius: "8px",
              bgcolor: "inherit",
              img: {
                objectFit: "cover",
              },
            }}
          >
            <img
              width={asSidebar ? "60px" : "120px"}
              height={asSidebar ? "60px" : "120px"}
              src={news.image}
              onError={handleImageError}
            />
          </Paper>
        </Grid>
        <Grid item md={9}>
          <Paper sx={{ bgcolor: "inherit" }}>
            <Typography variant={asSidebar ? "body1" : "h6"}>
              {news.title}
            </Typography>
            <Link href={"/news/" + news.id}>
              <ButtonTransparent
                sx={{
                  textTransform: "capitalize",
                  mt: 1,
                  fontSize: ".7rem",
                  px: 1,
                  "&:hover": {
                    backgroundColor: "#1e1e1e",
                  },
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
