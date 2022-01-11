import { Container } from "@mui/material";
import { Fragment } from "react";
import { useIntl } from "react-intl";
import { useSelector, useDispatch } from "react-redux";
import Drops from "src/components/drops";
import Header from "src/components/header";
import LargeCorousel from "src/components/largeCorousel";
import News from "src/components/news";

export default function Home() {
  const messages = useIntl();
  const pages = [
    { title: "Marketplace", url: "#" },
    { title: "News", url: "/news" },
    { title: "Drops", url: "#" },
    { title: "Feed", url: "#" },
  ];

  return (
    <Fragment>
      <Header pages={pages} />
      <Container maxWidth="xl">
        <LargeCorousel />
        <News />
        <Drops />
      </Container>
    </Fragment>
  );
}
