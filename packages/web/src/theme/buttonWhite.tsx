import { Button } from "@mui/material";
import React from "react";

const ButtonWhite = (props) => {
  console.log("white button", props);
  return (
    <Button
      {...props}
      variant="contained"
      sx={{
        ...props.sx,
        backgroundColor: "white",
        color: "black",
        "&:hover": {
          backgroundColor: "#d3d3d3",
        },
      }}
    >
      {props.children}
    </Button>
  );
};

export default ButtonWhite;
