import {
  Avatar,
  Badge,
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Stack,
  SvgIcon,
  Typography,
} from "@mui/material";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import React from "react";
import { dropsListSelector, singleDropsSelector } from "@next/common/selectors";
import { useSelector } from "react-redux";
import getDate from "@next/common/utils/dateFormater";
import { StyledPaper } from "./styledPaper";
import { handleImageError } from "@next/common/utils/handleImageError";

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
        columnSpacing={2}
      >
        <Grid item>
          <ThumbUpOutlinedIcon fontSize="large" />
          <Typography
            variant="caption"
            component="p"
            fontFamily="Sen, sans-serif"
          >
            {singleDrops.likes} Likes
          </Typography>
        </Grid>
        <Grid item>
          <Box sx={{ position: "relative" }}>
            <img
              src="/images/drops_check_tick.svg"
              alt=""
              style={{
                position: "absolute",
                right: "4%",
                top: "4%",
                zIndex: 1,
              }}
              width="45px"
            />
            <Avatar
              alt="Remy Sharp"
              src={singleDrops.image}
              sx={{
                width: "100%",
                maxWidth: 160,
                height: "auto",
              }}
              onError={handleImageError}
            >
              <img src="https://picsum.photos/200" alt="fallback image" />
            </Avatar>
          </Box>
        </Grid>
        <Grid item>
          <ThumbDownOutlinedIcon fontSize="large" />
          <Typography
            variant="caption"
            component="p"
            fontFamily="Sen, sans-serif"
          >
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
          <Grid item md={3} xs={6}>
            <Typography variant="h5">
              {getDate(singleDrops.created_at)}
            </Typography>
            <Typography variant="body2">Launch Date</Typography>
          </Grid>
          <Grid item md={3} xs={6}>
            <Typography variant="h5">
              {`${singleDrops.listed_item}/${singleDrops.supply_content}`}
            </Typography>
            <Typography variant="body2">
              {singleDrops.type == "launched"
                ? "Listed item/ Supply as content"
                : "Total Supply"}
            </Typography>
          </Grid>
          <Grid item md={3} xs={6}>
            <Typography variant="h5">{singleDrops.mint_price} SOL</Typography>
            <Typography variant="body2">Mint Price</Typography>
          </Grid>
          <Grid item md={3} xs={6}>
            <Typography variant="h5">{singleDrops.floor_mc} M</Typography>
            <Typography variant="body2">Floor MC(USD)</Typography>
          </Grid>
        </Grid>
      </Stack>
      <Typography
        variant="body1"
        textAlign="center"
        component="p"
        sx={{ my: 7, mx: "auto" }}
        width={{ md: "55%", xs: "95%" }}
      >
        {singleDrops.description}
      </Typography>
    </StyledPaper>
  );
};

export default DropsDetail;
