import React from "react";
import StyledGradPaper from "@next/common/shared/components/gradPaper";
import { Box, Stack, Typography } from "@mui/material";

const Feed = ({ stickyHead = true }) => {
  return (
    <>
      {stickyHead && (
        <Box sx={{ marginBottom: "-150px", position: "relative", zIndex: -2 }}>
          <img
            src="images/feed_top.png"
            alt=""
            width={"100%"}
            style={{ objectFit: "contain" }}
          />
        </Box>
      )}
      <StyledGradPaper>
        <Stack sx={{ justifyContent: "center" }}>
          <Typography variant="h3" textAlign="center" my={8} gutterBottom>
            Feed
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
            src="images/feed_coming_soon.png"
            alt="market place coming soon"
          />
        </Stack>
      </StyledGradPaper>
    </>
  );
};

export default Feed;
