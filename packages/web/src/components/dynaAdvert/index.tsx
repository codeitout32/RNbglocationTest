import { Box, Link } from "@mui/material";
import { advertSelector } from "@next/common/selectors";
import React from "react";
import { useSelector } from "react-redux";

// Currently not being used directly using in newsid
const DynaAdvert = () => {
  const advert = useSelector(advertSelector);
  console.log("selector advert", advert);
  return (
    <>
      <Box>
        <Link>
          <img src={advert[0].image} alt="" />
        </Link>
      </Box>
    </>
  );
};

export default DynaAdvert;
