import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";

// import marketComingSoon from "public/images/market_coming_soon.png";

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

        {/* <div style={{ position: "relative" }} className="img-div">
                <Image
                  src={featured?.image || "https://picsum.photos/200"}
                  alt="Picture of the author"
                  layout="intrinsic"
                  height={600}
                  width={1000}
                  objectFit="cover"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM0TgMAANIAm3/ipYoAAAAASUVORK5CYII="
                  placeholder="blur"
                  onError={handleImageError}
                />
              </div> */}

        <img
          src="images/market_coming_soon.png"
          alt="market place coming soon"
        />
      </Stack>
    </>
  );
};

export default Marketplace;
