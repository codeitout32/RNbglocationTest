import { Box, Container, Grid, Skeleton } from "@mui/material";
import {
  fetchNewsStart,
  fetchSingleNewsStart,
} from "@next/common/slices/news.slice";
import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "src/components/footer";
import GuidesnLists from "src/components/guidesnLists";
import Header from "src/components/header";
import NewsDetail from "src/components/newsDetailComponents/newsDetail";
import NewsLatest from "src/components/newsLatest";
import NFT101 from "src/components/nft101";
import RecentArticles from "src/components/recentArticles";

import { useRouter } from "next/router";
import RelatedArticles from "src/components/newsDetailComponents/relatedArticles";

export default function News() {
  const dispatch = useDispatch();

  const router = useRouter();
  const { newsId } = router.query;
  const pages = [
    { title: "BlockChain", url: "#" },
    { title: "NFTs", url: "/news" },
    { title: "Opinions", url: "#" },
    { title: "More", url: "#" },
  ];

  console.log("newsId1", newsId);

  useEffect(() => {
    if (!router.isReady) return;
    dispatch(fetchSingleNewsStart({ id: newsId }));
    console.log("newsId", newsId);
  }, [newsId]);
  return (
    <Fragment>
      <Header pages={pages} />
      <Container maxWidth="xl">
        <Box sx={{ height: "100px" }} />
        <Grid container maxWidth="lg" spacing={2} mx="auto">
          <Grid item xs={8}>
            <NewsDetail />
          </Grid>
          <Grid item xs={4}>
            <Box sx={{ height: "450px" }}></Box>
            <NewsLatest asSidebar />
          </Grid>
        </Grid>

        <Box sx={{ height: "200px" }} />
        <RelatedArticles />
        {/* <Box sx={{ height: "200px" }} /> */}
        <Box sx={{ height: "200px" }} />
        <Skeleton variant="rectangular" width="100%" height={500} />
        <Footer />
      </Container>
    </Fragment>
  );
}
