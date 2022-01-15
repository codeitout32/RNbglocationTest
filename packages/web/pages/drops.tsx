import { Box, Container } from "@mui/material";
import { fetchDropsStart } from "@next/common/slices/drops.slice";
import { fetchNewsStart } from "@next/common/slices/news.slice";
import { Fragment, useEffect } from "react";
import { useIntl } from "react-intl";
import { useSelector, useDispatch } from "react-redux";
import Drops from "src/components/dropsListing";
import Footer from "src/components/footer";
import GuidesnLists from "src/components/guidesnLists";
import Header from "src/components/header";
import LargeCorousel from "src/components/largeCorousel";
import NewsLatest from "src/components/newsLatest";
import NFT101 from "src/components/nft101";

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
    dispatch(fetchDropsStart());
  }, []);
  return (
    <Fragment>
      <Header pages={pages} />
      <Container maxWidth="xl">
        <Box sx={{ height: "200px" }} />
        <NFT101 />
        <Box sx={{ height: "200px" }} />
        <Drops />
        <Box sx={{ height: "200px" }} />
        <Footer />
      </Container>
    </Fragment>
  );
}
