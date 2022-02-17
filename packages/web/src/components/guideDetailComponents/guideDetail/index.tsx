import {
  Backdrop,
  Box,
  CircularProgress,
  Container,
  Typography,
} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { StyledPaper } from "./styledPaper";
import {
  guidesLoadingSelector,
  singleGuidesSelector,
} from "@next/common/selectors";
import parse from "html-react-parser";

const GuideDetail = () => {
  const singleGuide = useSelector(singleGuidesSelector);
  const loading = useSelector(guidesLoadingSelector);
  console.log("singleGuide", singleGuide);

  // const { next, previous } = singleGuide;
  const current = singleGuide;

  return (
    <>
      <StyledPaper>
        <Container maxWidth="md">
          <Box maxWidth={"720px"} mx="auto">
            <img src={current?.image} alt="" width="100%" />

            <Typography variant="h3" component="div" my={2}>
              {current?.title}
            </Typography>
            <Typography
              variant="body2"
              fontSize={"1.25rem"}
              // textAlign="center"
              component="div"
              sx={{ my: 3, mx: "auto" }}
              //   width={{ md: "90%", xs: "95%" }}
            >
              {current ? (
                parse(current?.short_description || "")
              ) : (
                <>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Elementum quis id elit at arcu suspendisse orci quis eleifend.
                  Nibh integer feugiat nunc, euismod. Enim sodales arcu congue
                  auctor a, id. Amet libero faucibus libero condimentum. Nisl
                  pulvinar purus arcu, eu posuere dolor ornare amet. Sit elit
                  bibendum tristique mi id consectetur purus aliquet tempor.
                </>
              )}
            </Typography>
            <Typography variant="h5" component="div">
              {current?.title}
            </Typography>
            <Typography
              variant="body2"
              fontSize={"1.25rem"}
              // textAlign="center"
              component="div"
              sx={{ my: 3, mx: "auto" }}
              //   width={{ md: "90%", xs: "95%" }}
            >
              {current ? (
                parse(current?.description || "")
              ) : (
                <>
                  ➤ Quis lacus dolor ut donec. Auctor sem tristique id diam
                  volutpat.
                  <br />
                  ➤ Potenti nulla turpis dictum consectetur orci orci enim,
                  cursus. Semper a iverra risus id pulvinar vitae laoreet mi
                  augue.
                  <br />
                  <br />➤ Maurisdiam sagittis curabitur cursus non arcu vivamus
                  eros et. Neque turpis egestas lorem dui mattis massa mauris
                  tristique. Sagittis, nulla nulla feugiat est, cras eu, nisl
                  lorem eu. Quis imperdiet senectus quam in amet nisi hendrerit
                  potenti malesuada.
                </>
              )}
            </Typography>
            {/* <Typography variant="h5" component="div" my={2}>
              {current?.title}
            </Typography> */}
            {/* <Stack
              direction="row"
              justifyContent="space-between"
              spacing={0}
              my={3}
            >
              <NewsNavButton
                href={`/guides/${previous?.id}`}
                title="Previous"
                body={previous?.title}
                sx={{ width: "48%" }}
                disabled={!previous}
              />
              <NewsNavButton
                href={`/guides/${next?.id}`}
                title="Next"
                body={next?.title}
                sx={{ width: "48%" }}
                disabled={!next}
              />
            </Stack> */}
          </Box>
        </Container>
      </StyledPaper>
      {loading && (
        <Backdrop
          sx={{ color: "Grey", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={true}
        >
          <CircularProgress color="inherit" />
          &nbsp; Loading...
        </Backdrop>
      )}
    </>
  );
};

export default GuideDetail;
