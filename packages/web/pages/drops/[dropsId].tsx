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

import { useRouter } from "next/router";
import { fetchSingleDropsStart } from "@next/common/slices/drops.slice";
import Overview from "src/components/dropsDetailComponents/overview";
import DropsDetail from "src/components/dropsDetailComponents/dropsDetail";
import Advert from "src/components/advert";

export default function News() {
  const dispatch = useDispatch();

  const router = useRouter();
  const { dropsId } = router.query;
  const pages = [
    { title: "Marketplace", url: "#" },
    { title: "News", url: "/news" },
    { title: "Drops", url: "/drops" },
    { title: "Feed", url: "#" },
  ];

  console.log("dropsId1", dropsId);

  useEffect(() => {
    if (!router.isReady) return;
    dispatch(fetchSingleDropsStart({ id: dropsId }));
    console.log("dropsId", dropsId);
  }, [dropsId]);
  return (
    <Fragment>
      <Header pages={pages} />
      <Container maxWidth="xl">
        <Box sx={{ height: "150px" }} bgcolor="grey.900" />
        <DropsDetail />
        <Box sx={{ height: "50px" }} />
        <Overview />
        {/* <Box sx={{ height: "200px" }} /> */}
        <Box sx={{ height: "200px" }} />
        <Advert />
        <Box sx={{ height: "10vh" }} />

        <Footer />
      </Container>
    </Fragment>
  );
}
