import { Box, Container } from "@mui/material";
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

  const pages = [
    { title: "Marketplace", url: "#" },
    { title: "News", url: "/news" },
    { title: "Drops", url: "/drops" },
    { title: "Feed", url: "#" },
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
    </Fragment>
  );
}
