import React from "react";
import { Grid, Link as Linkm, Typography } from "@mui/material";
import LogoIcon from "src/theme/logo";

const Logo = React.forwardRef(({ href, sx }, ref) => {
  return (
    <>
      <Grid container maxWidth="15%" sx={sx}>
        <Grid item xs={4}>
          <a href={href} ref={ref}>
            <LogoIcon sx={{ fontSize: "3rem" }} />
          </a>
        </Grid>
        <Grid item xs={8}>
          <Typography
            variant="body1"
            noWrap
            component="div"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontSize: ".8rem",
            }}
          >
            Your
          </Typography>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontSize: "1.2rem",
            }}
          >
            NFT Hub
          </Typography>
        </Grid>
      </Grid>
    </>
  );
});

export default Logo;
