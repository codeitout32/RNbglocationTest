import { Box, Container } from "@mui/material";
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

export default function News() {
  const dispatch = useDispatch();
  const messages = useIntl();
  const pages = [
    { title: "BlockChain", url: "#" },
    { title: "NFTs", url: "/news" },
    { title: "Opinions", url: "#" },
    { title: "More", url: "#" },
  ];
  useEffect(() => {
    dispatch(fetchNewsStart());
  }, []);
  return (
    <Fragment>
      <Header pages={pages} />
      <Container maxWidth="xl">
        <Box sx={{ height: "200px" }} />
        <FeaturedNews />
        <Box sx={{ height: "200px" }} />
        <NewsLatest />
        <Box sx={{ height: "200px" }} />
        <Advert />
        <Box sx={{ height: "200px" }} />

        <GuidesnLists />
        {/* <Box sx={{ height: "200px" }} /> */}
        <RecentArticles />
        <Footer />
      </Container>
    </Fragment>
  );
}
