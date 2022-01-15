import { Grid, Paper, Typography, Container } from "@mui/material";
import { singleDropsSelector } from "@next/common/selectors";
import React from "react";
import { useSelector } from "react-redux";

const Overview = () => {
  const singleDrops = useSelector(singleDropsSelector);

  return (
    <Paper sx={{ bgcolor: "black" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          textAlign="center"
          component="div"
          sx={{ my: 7 }}
        >
          Overview
        </Typography>
        <Grid
          container
          spacing={4}
          sx={{
            "& .MuiPaper-root": {
              border: "2px solid #3F3F46",
              bgcolor: "black",
              p: 2,
            },
          }}
        >
          <Grid item md={3} xs={12}></Grid>
          <Grid item md={6} xs={12}>
            <Paper>
              <Typography variant="body2">YNH Overall Score</Typography>
              <Typography variant="h5">{singleDrops.user_score}</Typography>
            </Paper>
          </Grid>
          <Grid item md={3} xs={12}></Grid>
          <Grid item md={3} xs={12}>
            <Paper>
              <Typography variant="body2">Roadmap Score</Typography>
              <Typography variant="h5">{singleDrops.user_score}</Typography>
            </Paper>
          </Grid>
          <Grid item md={3} xs={12}>
            <Paper>
              <Typography variant="body2">Discord member</Typography>
              <Typography variant="h5">{singleDrops.discord_member}</Typography>
            </Paper>
          </Grid>
          <Grid item md={3} xs={12}>
            <Paper>
              <Typography variant="body2">Twitter Followers</Typography>
              <Typography variant="h5">
                {singleDrops.twitter_followers}
              </Typography>
            </Paper>
          </Grid>
          <Grid item md={3} xs={12}>
            <Paper>
              <Typography variant="body2">Team Score</Typography>
              <Typography variant="h5">98</Typography>
            </Paper>
          </Grid>
          <Grid item md={3} xs={12}>
            <Paper>
              <Typography variant="body2">Popularity Score</Typography>
              <Typography variant="h5">1026</Typography>
            </Paper>
          </Grid>
          <Grid item md={3} xs={12}>
            <Paper>
              <Typography variant="body2">Flip Score</Typography>
              <Typography variant="h5">568</Typography>
            </Paper>
          </Grid>
          <Grid item md={3} xs={12}>
            <Paper>
              <Typography variant="body2">Hodl Score</Typography>
              <Typography variant="h5">4966</Typography>
            </Paper>
          </Grid>
          <Grid item md={3} xs={12}>
            <Paper>
              <Typography variant="body2">Community Score</Typography>
              <Typography variant="h5">200</Typography>
            </Paper>
          </Grid>
        </Grid>
        <Typography
          variant="h3"
          textAlign="center"
          component="div"
          sx={{ my: 7 }}
        >
          Our Take
        </Typography>
        <Typography
          variant="body1"
          textAlign="center"
          component="p"
          sx={{ my: 7, mx: "auto" }}
          width="55%"
        >
          Axies are fierce creatures that love to battle, build, and hunt for
          treasure! Build up a collection and use them across an ever expanding
          universe of games! Axie players can earn tokens such as DAI,
          (truncated ...)
        </Typography>
      </Container>
    </Paper>
  );
};

export default Overview;
