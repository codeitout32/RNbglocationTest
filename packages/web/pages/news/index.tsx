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

  const pages2 = [
    { title: "Marketplace", url: "#" },
    { title: "News", url: "/news" },
    { title: "Drops", url: "/drops" },
    { title: "Feed", url: "/feed" },
  ];

  useEffect(() => {
    dispatch(fetchNewsStart());
  }, []);
  return (
    <Fragment>
      <Header pages={pages} />
      <Container maxWidth="xl">
        <Box sx={{ height: "10vh" }} />
        <FeaturedNews />
        <Box sx={{ height: "10vh" }} />
      </Container>
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
      <Footer />
    </Fragment>
  );
}
