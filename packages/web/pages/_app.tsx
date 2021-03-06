import React from "react";
import "../styles/global.css";
import { Provider } from "react-redux";
import { IntlProvider } from "react-intl";
import CssBaseline from "@mui/material/CssBaseline";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider } from "@mui/material";

import { appStore } from "@next/common/store";

import AppLocale from "localization";
import EnLang from "localization/entries/en-US";
import restheme from "src/theme/theme";
import CircularLoader from "src/components/loader";
import GlobalStyles from "@mui/material/GlobalStyles";

import "react-image-lightbox/style.css";

//
import NProgress from "nprogress";
import "../public/css/nprogress.css";
import { useRouter } from "next/router";
import Head from "next/head";
// import { useStore } from "@next/common/store";

export default function App({ Component, pageProps }) {
  // const store = useStore(pageProps.initialReduxState);

  //Preloader code
  const router = useRouter();

  React.useEffect(() => {
    const handleStart = (url) => {
      console.log(`Loading: ${url}`);
      NProgress.start();
    };
    const handleStop = () => {
      NProgress.done();
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);

  return (
    <Provider store={appStore}>
      <PersistGate loading={null} persistor={appStore.persistor}>
        <ThemeProvider theme={restheme}>
          <IntlProvider
            locale="en"
            defaultLocale="en"
            messages={AppLocale.en.messages}
          >
            <Head>
              <title>SolShorts</title>
              <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
              />
            </Head>
            <CssBaseline />
            <Component {...pageProps} />
          </IntlProvider>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}
