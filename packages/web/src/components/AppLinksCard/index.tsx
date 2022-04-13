import { Box, Card, Link } from "@mui/material";

import React from "react";

const AppLinksCard = () => {
  return (
    <Card
      elevation={3}
      sx={{
        mb: 3,
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
        <Link href="https://play.google.com/store" target="_blank">
          <img src={"/images/appstore.png"} width={125} />
        </Link>

        <Link href="https://apps.apple.com/" target="_blank">
          <img src={"/images/playstore.png"} width={125} />
        </Link>
      </Box>
    </Card>
  );
};

export default AppLinksCard;
