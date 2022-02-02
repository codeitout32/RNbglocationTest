import React from "react";
import { Grid, Link as Linkm, Typography } from "@mui/material";
import LogoIcon from "src/theme/logo";
import Link from "next/link";

const Logo = React.forwardRef(({ href, sx }, ref) => {
  return (
    <>
      <Link href="/">
        <Grid
          container
          maxWidth="20%"
          sx={{
            ...sx,
            "&:hover": {
              cursor: "pointer",
            },
          }}
        >
          <Grid item xs={4}>
            <a href={href} ref={ref}>
              <LogoIcon sx={{ fontSize: "3.8rem" }} />
            </a>
          </Grid>
          <Grid item xs={8}>
            <Typography
              variant="body2"
              noWrap
              component="div"
              sx={{
                display: { xs: "none", md: "flex" },
              }}
              color="text.primary"
            >
              Your
            </Typography>

            <Typography
              variant="h4"
              noWrap
              component="div"
              fontSize="1.87rem"
              sx={{
                display: { xs: "none", md: "flex" },
              }}
            >
              NFT Hub
            </Typography>
          </Grid>
        </Grid>
      </Link>
    </>
  );
});

export default Logo;
