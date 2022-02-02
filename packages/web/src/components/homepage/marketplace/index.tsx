import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const Marketplace = () => {
  return (
    <>
      <Stack sx={{ justifyContent: "center" }}>
        <Typography variant="h3" textAlign="center" gutterBottom>
          Marketplace
        </Typography>
        <Typography
          variant="h3"
          textAlign="center"
          gutterBottom
          sx={{ position: "absolute", left: 0, right: 0 }}
        >
          Coming Soon
        </Typography>

        <img
          src="images/market_coming_soon.png"
          alt="market place coming soon"
        />
      </Stack>
    </>
  );
};

export default Marketplace;
