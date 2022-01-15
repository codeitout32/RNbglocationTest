import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";

const ApplyCard = () => {
  return (
    <div>
      <Stack alignItems="center" spacing={2} bgcolor="grey.800" pb={3}>
        <Box height="300px"></Box>
        <Typography variant="h3">Apply For Listing</Typography>
        <Typography variant="body2">Get your drop listed with us.</Typography>
        <Button variant="contained" sx={{ bgcolor: "#1DA1F2" }}>
          Send Dm
        </Button>
      </Stack>
    </div>
  );
};

export default ApplyCard;
