import { Box, Container } from "@mui/material";
import { fetchNewsStart } from "@next/common/slices/news.slice";
import { Fragment, useEffect } from "react";
import { useIntl } from "react-intl";
import { useSelector, useDispatch } from "react-redux";
import Drops from "src/components/drops";
import Footer from "src/components/footer";
import GuidesnLists from "src/components/guidesnLists";
import Header from "src/components/header";
import LargeCorousel from "src/components/largeCorousel";
import NewsLatest from "src/components/newsLatest";
import NFT101 from "src/components/nft101";
import RecentArticles from "src/components/recentArticles";

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
        <NFT101 />
        <Box sx={{ height: "200px" }} />
        <NewsLatest />
        <Box sx={{ height: "200px" }} />
        <GuidesnLists />
        {/* <Box sx={{ height: "200px" }} /> */}
        <RecentArticles />
        <Footer />
      </Container>
    </Fragment>
  );
}
