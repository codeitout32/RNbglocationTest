import { Backdrop, Box, CircularProgress, Container } from "@mui/material";
import { dropsLoadingSelector } from "@next/common/selectors";
import { fetchDropsStart } from "@next/common/slices/drops.slice";
import { fetchNewsStart } from "@next/common/slices/news.slice";
import { Fragment, useEffect } from "react";
import { useIntl } from "react-intl";
import { useSelector, useDispatch } from "react-redux";
import Drops from "src/components/dropsListing";
import Footer from "src/components/footer";
import GuidesnLists from "src/components/guidesnLists";
import Header from "src/components/header";

export default function News() {
  const dispatch = useDispatch();
  const messages = useIntl();
  const loading = useSelector(dropsLoadingSelector);

  const pages = [
    { title: "News", url: "/news" },
    { title: "Drops", url: "/drops" },
    { title: "Services", url: "/services" },
    { title: "Marketplace", url: "/marketplace" },
    { title: "Feed", url: "/feed" },
  ];
  // useEffect(() => {
  //   dispatch(fetchDropsStart());
  // }, []);
  return (
    <Fragment>
      <Header pages={pages} />
      <Container maxWidth="xl">
        <Box sx={{ height: "10vh" }} />
      </Container>
      <Drops />
      <Box sx={{ height: "10vh" }} />
      <Footer />
      {loading && (
        <Backdrop
          sx={{ color: "Grey", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={true}
        >
          <CircularProgress color="inherit" />
          &nbsp; Loading...
        </Backdrop>
      )}
    </Fragment>
  );
}
