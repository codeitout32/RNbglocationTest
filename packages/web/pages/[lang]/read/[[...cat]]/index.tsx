import { Box, Container, Grid, Link, Skeleton } from "@mui/material";
import {
  fetchNewsStart,
  fetchSingleNewsStart,
} from "@next/common/slices/news.slice";
import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "src/components/footer";
import Header from "src/components/header";

import { useRouter } from "next/router";
import { fetchCategoriesStart } from "@next/common/slices/assets.slice";
import { categoriesSelector } from "@next/common/selectors/";
import { handleImageError } from "@next/common/utils/handleImageError";
import getCategories from "src/components/newsDetailComponents/utils";
import NewsList from "src/components/NewsList";
import _ from "lodash";

export default function News() {
  const dispatch = useDispatch();
  const categoriesState = useSelector(categoriesSelector);

  const router = useRouter();
  const { lang, cat } = router.query;

  //Categories from api

  console.log("categories", categoriesState);

  const categories = getCategories(categoriesState);

  const categoryId = _.find(categoriesState.rows, [
    "category_name",
    cat?.[0],
  ])?.id;

  const pages = [...categories]; //not using in this project

  console.log("pages", pages);

  useEffect(() => {}, []);

  useEffect(() => {
    if (!router.isReady) return;
    console.log("router query", router.query);
    console.log("categoryId", categoryId);
    dispatch(
      fetchNewsStart({
        row_per_page: 10,
        page_num: 1,
        sort_type: "DESC",
        category_id: categoryId ? categoryId : "",
      })
    );
  }, [router]);
  return (
    <>
      <Header pages={pages} />
      {/* Preiviously xl container was here */}
      <Container maxWidth="md" disableGutters>
        <NewsList lang={lang} category={categoryId ?? ""} />
      </Container>
      <Box sx={{ height: "10vh" }} />
      <Footer />
    </>
  );
}
