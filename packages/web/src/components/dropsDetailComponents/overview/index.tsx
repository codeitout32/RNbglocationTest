import {
  Grid,
  Paper,
  Typography,
  Container,
  Tooltip,
  Box,
} from "@mui/material";
import { singleDropsSelector } from "@next/common/selectors";
import React from "react";
import { useSelector } from "react-redux";
import StyledGradPaper from "./gradPaper";
import { grey } from "@mui/material/colors";
import CustomToolTip from "./customToolTip";
import parse from "html-react-parser";

const Overview = () => {
  const singleDrops = useSelector(singleDropsSelector);

  const fieldList = [
    {
      title: "Roadmap Score",
      value: singleDrops.roadmap_score,
    },
    {
      title: "Discord Score",
      value: singleDrops.discord_member,
    },
    {
      title: " Twitter Score",
      value: singleDrops.twitter_followers,
    },
    {
      title: "Team Score",
      value: singleDrops.team_score,
    },
    {
      title: "Popularity Score",
      value: singleDrops.popularity_score,
    },
    {
      title: "Flip Score",
      value: singleDrops.flip_score,
    },
    {
      title: "Hodl Score",
      value: singleDrops.hodl_score,
    },
    {
      title: "Community Score",
      value: singleDrops.community_score,
    },
  ];

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
            <Typography variant="body2" align="center" fontSize={"1.25rem"}>
              YNH Overall Score
            </Typography>
            <Typography
              variant="h3"
              gutterBottom
              align="center"
              className="ovScore"
            >
              {singleDrops.overall_score}/100
            </Typography>
            <Tooltip
              title={
                <Box sx={{}}>
                  <Typography
                    variant="body2"
                    fontSize={".8rem"}
                    color="text.secondary"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                    aliquam
                  </Typography>
                </Box>
              }
              componentsProps={{
                tooltip: {
                  sx: {
                    backgroundColor: grey[800],
                    maxWidth: "200px",
                    p: 2,
                  },
                },
                arrow: {
                  sx: {
                    color: grey[800],
                  },
                },
              }}
              placement="right"
              arrow
            >
              <img src="/images/meter.svg" alt="" style={{ width: "100%" }} />
            </Tooltip>
            {/* <Paper>
              <Typography variant="body2" fontSize={"1.25rem"}>
                YNH Overall Score
              </Typography>
              <Typography variant="h4">{singleDrops.overall_score}</Typography>
            </Paper> */}
          </Grid>
          <Grid item md={3} xs={12}></Grid>
          {fieldList.map((field) => (
            <Grid item md={3} xs={12}>
              <CustomToolTip
                title={
                  <Typography
                    variant="body2"
                    fontSize={".8rem"}
                    color="text.secondary"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                    aliquam
                  </Typography>
                }
              >
                <Paper>
                  <Typography variant="body2" fontSize={"1.25rem"}>
                    {field.title}
                  </Typography>
                  <Typography variant="h4">{field.value}</Typography>
                </Paper>
              </CustomToolTip>
            </Grid>
          ))}
        </Grid>
        <Typography
          variant="h3"
          textAlign="center"
          component="div"
          sx={{ my: 3, mt: 12 }}
        >
          Our Take
        </Typography>
        <Typography
          variant="body1"
          textAlign="center"
          paragraph
          component="div"
          color="text.secondary"
          sx={{ mx: "auto" }}
          width={{ md: "55%", xs: "95%" }}
        >
          {parse(singleDrops?.our_take_description || "")}
        </Typography>
      </Container>
    </StyledGradPaper>
  );
};

export default Overview;

//old grid code
{
  /* <Grid item md={3} xs={12}>
            <Paper>
              <Typography variant="body2" fontSize={"1.25rem"}>
                Roadmap Score
              </Typography>
              <Typography variant="h4">{singleDrops.roadmap_score}</Typography>
            </Paper>
          </Grid>
          <Grid item md={3} xs={12}>
            <Paper>
              <Typography variant="body2" fontSize={"1.25rem"}>
                Discord member
              </Typography>
              <Typography variant="h4">{singleDrops.discord_member}</Typography>
            </Paper>
          </Grid>
          <Grid item md={3} xs={12}>
            <Paper>
              <Typography variant="body2" fontSize={"1.25rem"}>
                Twitter Followers
              </Typography>
              <Typography variant="h4">
                {singleDrops.twitter_followers}
              </Typography>
            </Paper>
          </Grid>
          <Grid item md={3} xs={12}>
            <Paper>
              <Typography variant="body2" fontSize={"1.25rem"}>
                Team Score
              </Typography>
              <Typography variant="h4">{singleDrops.team_score}</Typography>
            </Paper>
          </Grid>
          <Grid item md={3} xs={12}>
            <Paper>
              <Typography variant="body2" fontSize={"1.25rem"}>
                Popularity Score
              </Typography>
              <Typography variant="h4">
                {singleDrops.popularity_score}
              </Typography>
            </Paper>
          </Grid>
          <Grid item md={3} xs={12}>
            <Paper>
              <Typography variant="body2" fontSize={"1.25rem"}>
                Flip Score
              </Typography>
              <Typography variant="h4">{singleDrops.flip_score}</Typography>
            </Paper>
          </Grid>
          <Grid item md={3} xs={12}>
            <Paper>
              <Typography variant="body2" fontSize={"1.25rem"}>
                Hodl Score
              </Typography>
              <Typography variant="h4">{singleDrops.hodl_score}</Typography>
            </Paper>
          </Grid>
          <Grid item md={3} xs={12}>
            <Paper>
              <Typography variant="body2" fontSize={"1.25rem"}>
                Community Score
              </Typography>
              <Typography variant="h4">
                {singleDrops.community_score}
              </Typography>
            </Paper>
          </Grid> */
}
