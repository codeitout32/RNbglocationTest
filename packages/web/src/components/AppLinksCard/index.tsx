import { Box, Card } from "@mui/material";

import React from "react";

const AppLinksCard = () => {
  return (
    <Card
      sx={{
        backgroundColor: "#36D910",
        padding: 1,
        color: "white",
        fontSize: "14px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <div>
        For the best experience use <b>SolShorts</b> app on your smartphone
      </div>
      <Box sx={{ display: "flex" }}>
        <img
          src={process.env.NEXT_PUBLIC_IMAGE_URL + "/images/appstore.png"}
          width={125}
        />
        <img
          src={process.env.NEXT_PUBLIC_IMAGE_URL + "/images/playstore.png"}
          width={125}
        />
      </Box>
    </Card>
  );
};

export default AppLinksCard;
