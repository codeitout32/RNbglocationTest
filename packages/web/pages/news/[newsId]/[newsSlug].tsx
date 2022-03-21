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

import { useRouter } from "next/router";
import RelatedArticles from "src/components/newsDetailComponents/relatedArticles";
import Advert from "src/components/advert";
import {
  fetchAdvertStart,
  fetchCategoriesStart,
} from "@next/common/slices/assets.slice";
import {
  advertSelector,
  categoriesSelector,
  singleNewsSelector,
} from "@next/common/selectors/";
import { handleImageError } from "@next/common/utils/handleImageError";
import getCategories from "src/components/newsDetailComponents/utils";
import AppLinksCard from "src/components/AppLinksCard";
import ArticleItem from "src/components/NewsList/articleItem";

export default function News() {
  const dispatch = useDispatch();
  const categoriesState = useSelector(categoriesSelector);

  const router = useRouter();
  const { newsId } = router.query;
  const dummyPages = [
    { title: "BlockChain", url: "/news/?cat=1" },
    { title: "NFTs", url: "/news/?cat=2" },
    { title: "Opinions", url: "/news/?cat=3" },
    { title: "Tech", url: "/news/?cat=4" },
    // { title: "Cat 5", url: "/news/?cat=5" },
    { title: "All News", url: "/news/" },
  ];

  //Categories from api

  console.log("categories", categoriesState);

  const categories = getCategories(categoriesState);

  const singleNews = useSelector(singleNewsSelector);

  const pages = categories?.length ? [...categories] : dummyPages;

  console.log("pages", pages);

  useEffect(() => {
    if (!categoriesState?.rows) dispatch(fetchCategoriesStart());
  }, []);

  useEffect(() => {
    if (!router.isReady) return;
    dispatch(fetchSingleNewsStart({ id: newsId }));
  }, [newsId]);
  return (
    <Fragment>
      <Header />
      <Container maxWidth="md">
        <Box sx={{ height: { md: "3vh", xs: "4vh" } }} />
        <AppLinksCard />
        <Box sx={{ height: { md: "3vh", xs: "4vh" } }} />
        <ArticleItem news={singleNews?.current} />
      </Container>
      <Box sx={{ height: "10vh" }} />
      <Footer />
    </Fragment>
  );
}
