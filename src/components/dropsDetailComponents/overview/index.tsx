import { Grid, Paper, Typography, Container } from "@mui/material";
import { singleDropsSelector } from "@next/common/selectors";
import React from "react";
import { useSelector } from "react-redux";
import StyledGradPaper from "./gradPaper";

const Overview = () => {
  const singleDrops = useSelector(singleDropsSelector);

  return (
    <StyledGradPaper sx={{ bgcolor: "transparent" }}>
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
              <Typography variant="h5">{singleDrops.overall_score}</Typography>
            </Paper>
          </Grid>
          <Grid item md={3} xs={12}></Grid>
          <Grid item md={3} xs={12}>
            <Paper>
              <Typography variant="body2">Roadmap Score</Typography>
              <Typography variant="h5">{singleDrops.roadmap_score}</Typography>
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
              <Typography variant="h5">{singleDrops.team_score}</Typography>
            </Paper>
          </Grid>
          <Grid item md={3} xs={12}>
            <Paper>
              <Typography variant="body2">Popularity Score</Typography>
              <Typography variant="h5">
                {singleDrops.popularity_score}
              </Typography>
            </Paper>
          </Grid>
          <Grid item md={3} xs={12}>
            <Paper>
              <Typography variant="body2">Flip Score</Typography>
              <Typography variant="h5">{singleDrops.flip_score}</Typography>
            </Paper>
          </Grid>
          <Grid item md={3} xs={12}>
            <Paper>
              <Typography variant="body2">Hodl Score</Typography>
              <Typography variant="h5">{singleDrops.hodl_score}</Typography>
            </Paper>
          </Grid>
          <Grid item md={3} xs={12}>
            <Paper>
              <Typography variant="body2">Community Score</Typography>
              <Typography variant="h5">
                {singleDrops.community_score}
              </Typography>
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
          paragraph
          component="p"
          sx={{ my: 7, mx: "auto" }}
          width={{ md: "55%", xs: "95%" }}
        >
          {singleDrops.our_take_description}
        </Typography>
      </Container>
    </StyledGradPaper>
  );
};

export default Overview;
