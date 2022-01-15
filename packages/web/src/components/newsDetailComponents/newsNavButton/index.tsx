import { Button, Card, Paper, Typography } from "@mui/material";
import React from "react";

const NewsNavButton = ({ title, body, sx, ...rest }) => {
  return (
    <Button
      variant="contained"
      sx={{
        ...sx,
        flexDirection: "column",
        textTransform: "capitalize",
        boxShadow: "0px 0px 64px -30px #fff",
        p: 2,
        borderRadius: 3,
        transition: "ease all 0.7s",
      }}
      {...rest}
    >
      <Typography variant="h6" component="div" color="text.primary">
        {title}
      </Typography>
      <Typography variant="body2">{body}</Typography>
    </Button>
  );
};

export default NewsNavButton;
