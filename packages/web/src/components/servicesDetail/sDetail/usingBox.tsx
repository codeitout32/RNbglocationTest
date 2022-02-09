import React from "react";
import {
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  CardActionArea,
  Container,
  Grid,
  IconButton,
  Paper,
  Stack,
  SvgIcon,
  Typography,
} from "@mui/material";

const UsingBox = ({ item }) => {
  return (
    <>
      <Box>
        <img src={item.image} alt="" />
        <Typography
          variant="body2"
          fontSize={"1.25rem"}
          textAlign="center"
          component="p"
          sx={{
            my: 1,
            //  mx: "auto"
          }}
          width={{ md: "90%", xs: "95%" }}
        >
          {item.title}
        </Typography>
      </Box>
    </>
  );
};

export default UsingBox;
