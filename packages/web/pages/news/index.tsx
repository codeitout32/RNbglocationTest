import {
  Backdrop,
  Box,
  CircularProgress,
  Collapse,
  Container,
} from "@mui/material";
import {
  fetchNewsStart,
  fetchRecentNewsStart,
} from "@next/common/slices/news.slice";
import { Fragment, useEffect } from "react";
import { useIntl } from "react-intl";
import { useSelector, useDispatch } from "react-redux";
import Footer from "src/components/footer";
import GuidesnLists from "src/components/guidesnLists";
import Header from "src/components/header";
import LargeCorousel from "src/components/largeCorousel";
import NewsLatest from "src/components/newsLatest";
import FeaturedNews from "src/components/featuredNews";
import RecentArticles from "src/components/NewsList";
import Advert from "src/components/advert";
import { useRouter } from "next/router";
import {
  categoriesSelector,
  newsLoadingSelector,
} from "@next/common/selectors";
import React from "react";
import { fetchCategoriesStart } from "@next/common/slices/assets.slice";
import getCategories from "src/components/newsDetailComponents/utils";

export default function News() {
  // const [checked, setChecked] = React.useState(false);  state to show hide featured transition.
  const dispatch = useDispatch();
  const messages = useIntl();
  const loading = useSelector(newsLoadingSelector);
  const categoriesState = useSelector(categoriesSelector);

  const dummyPages = [
    { title: "BlockChain", url: "?cat=1" },
    { title: "NFTs", url: "?cat=2" },
    { title: "Opinions", url: "?cat=3" },
    { title: "Tech", url: "?cat=4" },
    // { title: "Cat 5", url: "?cat=5" },
    { title: "All News", url: "/news" },
  ];

  //Categories from api

  console.log("categories", categoriesState);

  const categories = getCategories(categoriesState);

  const pages = [...categories] || dummyPages;

  console.log("pages", pages);

  //Router
  const router = useRouter();
  const { cat } = router.query;

  useEffect(() => {
    //deprecated useEffect, this can be removed
    if (!cat) console.log("router1", cat);
    dispatch(fetchCategoriesStart());
  }, []);

  useEffect(() => {
    if (!router.isReady) return;
    if (!cat) {
      dispatch(fetchNewsStart({ row_per_page: "10" }));
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
      <RecentArticles category={cat} />
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
