import { Box, Container, Grid, Link, Skeleton } from "@mui/material";
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
import NewsLatest from "src/components/newsDetailComponents/newsLatest";
import NFT101 from "src/components/featuredNews";
import RecentArticles from "src/components/recentArticles";

import { useRouter } from "next/router";
import RelatedArticles from "src/components/newsDetailComponents/relatedArticles";
import Advert from "src/components/advert";
import { fetchAdvertStart } from "@next/common/slices/advert.slice";
import { advertSelector } from "@next/common/selectors/";
import { handleImageError } from "@next/common/utils/handleImageError";

export default function News() {
  const dispatch = useDispatch();

  const router = useRouter();
  const { newsId } = router.query;
  const pages = [
    { title: "BlockChain", url: "/news/?cat=1" },
    { title: "NFTs", url: "/news/?cat=2" },
    { title: "Opinions", url: "/news/?cat=3" },
    { title: "Technology", url: "/news/?cat=4" },
    // { title: "Cat 5", url: "/news/?cat=5" },
    { title: "All News", url: "/news/" },
  ];

  const pages2 = [
    { title: "Marketplace", url: "#" },
    { title: "News", url: "/news" },
    { title: "Drops", url: "/drops" },
    { title: "Feed", url: "/feed" },
  ];

  useEffect(() => {
    dispatch(fetchAdvertStart());
  }, []);

  const advert = useSelector(advertSelector);

  useEffect(() => {
    if (!router.isReady) return;
    dispatch(fetchSingleNewsStart({ id: newsId }));
  }, [newsId]);
  return (
    <Fragment>
      <Header pages={pages} collapseMenuAfter={3} />
      <Container maxWidth="xl">
        <Box sx={{ height: "100px" }} />
        <Grid container maxWidth="lg" spacing={2} mx="auto">
          <Grid item md={8} xs={11}>
            <NewsDetail />
          </Grid>
          <Grid item md={4} xs={11}>
            <Box sx={{ height: "450px" }}>
              <Link href={advert[0].ad_link} target="_blank">
                <img
                  src={advert[0].image}
                  alt=""
                  onError={handleImageError}
                  height="100%"
                  width="100%"
                  style={{ objectFit: "contain" }}
                />
              </Link>
            </Box>
            <NewsLatest asSidebar={false} />
          </Grid>
        </Grid>

        <Box sx={{ height: "10vh" }} />
        <RelatedArticles />
        {/* <Box sx={{ height: "200px" }} /> */}
        <Box sx={{ height: "10vh" }} />
        {/* <Skeleton variant="rectangular" width="100%" height={500} /> */}
      </Container>
      <Advert />
      <Box sx={{ height: "10vh" }} />
      <Footer />
    </Fragment>
  );
}
