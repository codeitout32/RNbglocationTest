import { Box, Card, Link } from "@mui/material";

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
        <Link href="#">
          <img src={"/images/appstore.png"} width={125} />
        </Link>

        <img src={"/images/playstore.png"} width={125} />
      </Box>
    </Card>
  );
};

export default AppLinksCard;
