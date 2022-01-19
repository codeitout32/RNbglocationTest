import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import React from "react";
import { dropsListSelector, singleDropsSelector } from "@next/common/selectors";
import { useSelector } from "react-redux";
import getDate from "@next/common/utils/dateFormater";
import { StyledPaper } from "./styledPaper";

const DropsDetail = () => {
  const singleDrops = useSelector(singleDropsSelector);
  console.log("singleDrops", singleDrops);
  return (
    <StyledPaper sx={{ bgcolor: "primary.main" }}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="flex-end"
        spacing={4}
      >
        <Grid item>
          <ThumbUpOutlinedIcon fontSize="large" />
          <Typography variant="caption" component="p">
            {singleDrops.likes} Likes
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            alt="Remy Sharp"
            src="https://picsum.photos/100"
            sx={{ width: 150, height: 150 }}
          />
        </Grid>
        <Grid item>
          <ThumbDownOutlinedIcon fontSize="large" />
          <Typography variant="caption" component="p">
            {singleDrops.dislikes} Dislikes
          </Typography>
        </Grid>
      </Grid>
      <Stack maxWidth="md" mx="auto" alignItems="center" spacing={3}>
        <Typography variant="h3" component="div">
          {singleDrops.title}
        </Typography>
        <Box>
          <Button variant="contained">Metaverse</Button>
          <Button variant="contained">Game</Button>
        </Box>

        <Grid
          container
          sx={{
            "& .MuiGrid-item": {
              bgcolor: "grey.900",
              p: 2,
              border: "2px solid black",
              "& .MuiTypography-root": {
                textAlign: "center",
              },
            },
          }}
        >
          <Grid item md={3}>
            <Typography variant="h5">
              {getDate(singleDrops.created_at)}
            </Typography>
            <Typography variant="body2">Launch Date</Typography>
          </Grid>
          <Grid item md={3}>
            <Typography variant="h5">
              {singleDrops.owners}/{singleDrops.supply}
            </Typography>
            <Typography variant="body2">
              Listed item/ Supply as content
            </Typography>
          </Grid>
          <Grid item md={3}>
            <Typography variant="h5">{singleDrops.price} SOL</Typography>
            <Typography variant="body2">Mint Price</Typography>
          </Grid>
          <Grid item md={3}>
            <Typography variant="h5">{singleDrops.floor_price} M</Typography>
            <Typography variant="body2">Floor MC(USD)</Typography>
          </Grid>
        </Grid>
      </Stack>
      <Typography
        variant="body1"
        textAlign="center"
        component="p"
        sx={{ my: 7, mx: "auto" }}
        width="55%"
      >
        {singleDrops.description}
      </Typography>
    </StyledPaper>
  );
};

export default DropsDetail;
