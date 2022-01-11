import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Icon,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import React, { Fragment } from "react";
import ButtonTransparent from "src/theme/buttonTransparent";
import ButtonWhite from "src/theme/buttonWhite";
import Link from "next/link";
const ArticleItem = () => {
  return (
    <>
      <Grid
        container
        md={12}
        alignItems="center"
        sx={{ borderBottom: "1px solid ", p: 5, borderColor: "grey.700" }}
      >
        <Grid item md={4}>
          <Paper
            sx={{
              borderRadius: "10px",
              overflow: "hidden",
              bgcolor: "inherit",
              width: "250px",
            }}
          >
            <img
              height="180px"
              width="250px"
              src="https://picsum.photos/250/200"
            />
          </Paper>
        </Grid>
        <Grid item md={7}>
          <Grid container>
            <Grid item md={4}>
              <Typography variant="body1" color="grey.700">
                By Langston Thomas
              </Typography>
            </Grid>
            <Grid item md={8}>
              <Typography variant="body1" color="grey.700">
                Dec 23 2021
              </Typography>
            </Grid>
          </Grid>

          <Typography variant="h6" sx={{ mt: 3 }}>
            Sailing the OpenSea: Grifters, SEEDS, Vortex & More Sailing the
            OpenSea: Grifters, SEEDS, Vortex & More Sailing the OpenSea:
            Grifters, SEEDS, Vortex & More
          </Typography>
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
        <Grid item md={1}>
          <Stack direction="column" alignItems="center" spacing={2}>
            <Link href="#">
              <Icon>
                <ArrowCircleRightIcon sx={{ fontSize: 40 }} />
              </Icon>
            </Link>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default ArticleItem;
