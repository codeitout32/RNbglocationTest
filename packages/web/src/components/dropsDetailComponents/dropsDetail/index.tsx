import {
  Avatar,
  Badge,
  Box,
  Button,
  Container,
  Grid,
  IconButton,
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
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Icons
import TwitterIcon from "@mui/icons-material/Twitter";
import { faLink, faShare } from "@fortawesome/free-solid-svg-icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { grey } from "@mui/material/colors";

//Clamp
import Clamp from "react-multiline-clamp";

const DropsDetail = () => {
  const singleDrops = useSelector(singleDropsSelector);
  console.log("singleDrops", singleDrops);

  const isLaunched = () => {
    return singleDrops.type == "launched";
  };

  return (
    <StyledPaper sx={{ bgcolor: "primary.main" }}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        columnSpacing={2}
      >
        <Grid item md={1}></Grid>
        <Grid item xs={10}>
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
                {singleDrops.is_verified && (
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
                )}
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

          <Stack maxWidth="md" mx="15%" alignItems="center" spacing={3}>
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
                  {moment(singleDrops.created_at).format(
                    "MMMM DD, YYYY" + (isLaunched() ? " HH:mm A" : "")
                  )}
                </Typography>
                <Typography variant="body2">
                  {isLaunched() ? " Date Time" : "Date"}
                </Typography>
              </Grid>
              <Grid item md={3} xs={6}>
                <Typography variant="h5">
                  {isLaunched()
                    ? `${singleDrops.listed_item}/${singleDrops.supply_content}`
                    : moment(singleDrops.created_at).format("HH:mm A")}
                </Typography>
                <Typography variant="body2">
                  {isLaunched() ? "Listed item/ Total Supply " : "Time"}
                </Typography>
              </Grid>
              <Grid item md={3} xs={6}>
                <Typography variant="h5">
                  {isLaunched()
                    ? singleDrops.mint_price + " USD"
                    : singleDrops.supply_content}
                </Typography>
                <Typography variant="body2">
                  {isLaunched() ? "Floor Price " : "Total Supply"}
                </Typography>
              </Grid>
              <Grid item md={3} xs={6}>
                <Typography variant="h5">
                  {isLaunched()
                    ? singleDrops.mint_price + " USD"
                    : singleDrops.floor_mc + " SOL"}
                </Typography>
                <Typography variant="body2">
                  {isLaunched() ? "Floor MC(USD)" : "Mint Price"}{" "}
                </Typography>
              </Grid>
            </Grid>
          </Stack>
          <Typography
            variant="body2"
            fontSize={"1.25rem"}
            textAlign="center"
            component="p"
            sx={{ my: 7, mx: "auto" }}
            width={{ md: "60%", xs: "95%" }}
          >
            <Clamp withTooltip lines={3}>
              {singleDrops?.description} &nbsp;
            </Clamp>
          </Typography>
        </Grid>
        <Grid item md={1} xs={12} mt={"-10%"}>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              flexDirection: { xs: "row", md: "column" },
              justifyContent: "center",
            }}
            className="icon-box"
          >
            <IconButton
              aria-label="link"
              sx={{ color: grey[600] }}
              href={singleDrops.website_link}
              target="_blank"
            >
              <FontAwesomeIcon icon={faLink} />
            </IconButton>
            <IconButton
              aria-label="delete"
              sx={{ fontSize: { md: "1.2rem" } }}
              href={singleDrops.discord_link}
              target="_blank"
            >
              <FontAwesomeIcon icon={faDiscord} />
            </IconButton>
            <IconButton
              aria-label="delete"
              href={singleDrops.twitter_link}
              target="_blank"
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              aria-label="delete"
              href={singleDrops.website_link}
              target="_blank"
            >
              <FontAwesomeIcon icon={faShare} />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </StyledPaper>
  );
};

export default DropsDetail;
