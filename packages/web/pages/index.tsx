import { Container, Box } from "@mui/material";
import { Fragment, useEffect } from "react";
import { useIntl } from "react-intl";
import { useSelector, useDispatch } from "react-redux";
import HomeDropsList from "src/components/homeDropsList";
import Header from "src/components/header";
import LargeCorousel from "src/components/largeCorousel";
import NewsCorousel from "src/components/newsCorousel";
import Footer from "src/components/footer";
import Marketplace from "src/components/homepage/marketplace";
import Feed from "src/components/homepage/feed";
import HoldNEarn from "src/components/homepage/holdnEarn";
import NavsInfo from "src/components/homepage/navsInfo";
import NewsList from "src/components/NewsList";
import { useRouter } from "next/router";

export default function Home() {
  const messages = useIntl();
  const pages = [
    { title: "News", url: "/news" },
    { title: "Drops", url: "/drops" },
    { title: "Services", url: "/services" },
    { title: "Marketplace", url: "/marketplace" },
    { title: "Feed", url: "/feed" },
  ];

  const router = useRouter();

  useEffect(() => {
    router.push("/en/read/");
  }, []);

  return (
    <>
      <Header pages={pages} />
      {/* Preiviously xl container was here */}
      <Container maxWidth="md" disableGutters>
        <NewsList />
      </Container>
      <Box sx={{ height: "10vh" }} />
      <Footer />
    </>
  );
}
