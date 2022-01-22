import { Container, Box } from "@mui/material";
import { Fragment } from "react";
import { useIntl } from "react-intl";
import { useSelector, useDispatch } from "react-redux";
import HomeDropsList from "src/components/homeDropsList";
import Header from "src/components/header";
import LargeCorousel from "src/components/largeCorousel";
import NewsCorousel from "src/components/newsCorousel";
import Footer from "src/components/footer";

export default function Home() {
  const messages = useIntl();
  const pages = [
    { title: "Marketplace", url: "#" },
    { title: "News", url: "/news" },
    { title: "Drops", url: "/drops" },
    { title: "Feed", url: "#" },
  ];

  return (
    <Fragment>
      <Header pages={pages} />
      <Container maxWidth="xl">
        <LargeCorousel />
        <Box sx={{ height: "10vh" }} />

        <NewsCorousel />
        <Box sx={{ height: "10vh" }} />
        <HomeDropsList />
        <Box sx={{ height: "10vh" }} />
      </Container>
      <Footer />
    </Fragment>
  );
}
