import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";

const ApplyCard = (props) => {
  const bgimage = {
    background: 'url("/images/rocket.svg")',
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center top",
  };
  return (
    <>
      <div
        style={{
          ...bgimage,
          width: "100%",
        }}
      >
        <Stack
          alignItems="center"
          spacing={2}
          sx={{ background: 'url("/images/rocket.svg")' }}
          pb={3}
          {...props}
        >
          <Box height="40vh"></Box>
          <Typography variant="h3">Apply For Listing</Typography>
          <Typography variant="body2">Get your drop listed with us.</Typography>
          <Button variant="contained" sx={{ bgcolor: "#1DA1F2" }}>
            Send Dm
          </Button>
        </Stack>
      </div>
    </>
  );
};

export default ApplyCard;
