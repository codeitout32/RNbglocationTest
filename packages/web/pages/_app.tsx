import "../styles/global.css";
import { Provider } from "react-redux";
import { IntlProvider } from "react-intl";
import CssBaseline from "@mui/material/CssBaseline";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider } from "@mui/material";

import { useStore } from "@next/common/store";

import AppLocale from "localization";
import EnLang from "localization/entries/en-US";
import restheme from "src/theme";
import CircularLoader from "src/components/loader";
import GlobalStyles from "@mui/material/GlobalStyles";

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <PersistGate loading={CircularLoader} persistor={store.persistor}>
      <Provider store={store}>
        <ThemeProvider theme={restheme}>
          <IntlProvider
            locale="en"
            defaultLocale="en"
            messages={AppLocale.en.messages}
          >
            <CssBaseline />
            <GlobalStyles styles={{ root: { textTransform: "capitalize" } }} />
            <Component {...pageProps} />
          </IntlProvider>
        </ThemeProvider>
      </Provider>
    </PersistGate>
  );
}
