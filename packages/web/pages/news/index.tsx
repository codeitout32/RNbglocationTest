import {
  Backdrop,
  Box,
  CircularProgress,
  Collapse,
  Container,
} from "@mui/material";
import { fetchNewsStart } from "@next/common/slices/news.slice";
import { Fragment, useEffect } from "react";
import { useIntl } from "react-intl";
import { useSelector, useDispatch } from "react-redux";
import Footer from "src/components/footer";
import GuidesnLists from "src/components/guidesnLists";
import Header from "src/components/header";
import LargeCorousel from "src/components/largeCorousel";
import NewsLatest from "src/components/newsLatest";
import FeaturedNews from "src/components/featuredNews";
import RecentArticles from "src/components/recentArticles";
import Advert from "src/components/advert";
import { useRouter } from "next/router";
import { newsLoadingSelector } from "@next/common/selectors";
import React from "react";

export default function News() {
  // const [checked, setChecked] = React.useState(false);  state to show hide featured transition.
  const dispatch = useDispatch();
  const messages = useIntl();
  const loading = useSelector(newsLoadingSelector);
  const pages = [
    { title: "BlockChain", url: "?cat=1" },
    { title: "NFTs", url: "?cat=2" },
    { title: "Opinions", url: "?cat=3" },
    { title: "Technology", url: "?cat=4" },
    { title: "Cat 5", url: "?cat=5" },
    { title: "All News", url: "/news" },
  ];

  const pages2 = [
    { title: "Marketplace", url: "#" },
    { title: "News", url: "/news" },
    { title: "Drops", url: "/drops" },
    { title: "Feed", url: "/feed" },
  ];

  const handleLoadmore = (e) => {
    dispatch(
      fetchDropsStart({
        ...pagination,
        page_num: pagination.page_num + 1,
      })
    );
  };

  const router = useRouter();
  const { cat } = router.query;

  useEffect(() => {
    //deprecated useEffect, this can be removed
    if (!cat) console.log("router1", cat);
  }, []);

  useEffect(() => {
    if (!router.isReady) return;
    if (!cat) {
      dispatch(fetchNewsStart({ row_per_page: "50" }));
      return;
    }
    console.log("router", cat);
    dispatch(fetchNewsStart({ category_id: cat }));
  }, [router]);
  return (
    <Fragment>
      <Header pages={pages} collapseMenuAfter={3} />
      {/* {!cat && (
        <Container maxWidth="xl">
          <Box sx={{ height: "10vh" }} />
          <FeaturedNews />
          <Box sx={{ height: "10vh" }} />
        </Container>
      )} */}
      <Collapse in={!cat}>
        <Container maxWidth="xl">
          <Box sx={{ height: "10vh" }} />
          <FeaturedNews />
          <Box sx={{ height: "10vh" }} />
        </Container>
      </Collapse>

      <NewsLatest />
      <Box sx={{ height: "10vh" }} />
      <Advert />
      <Container maxWidth="xl">
        <Box sx={{ height: "10vh" }} />

        <GuidesnLists />
        <Box sx={{ height: "10vh" }} />
      </Container>
      <RecentArticles />
      <Box sx={{ height: "5vh" }} />
      {loading && (
        <Backdrop
          sx={{ color: "Grey", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={true}
        >
          <CircularProgress color="inherit" />
          &nbsp; Loading...
        </Backdrop>
      )}
      <Footer />
    </Fragment>
  );
}
