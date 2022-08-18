// ** Next Imports
import Head from "next/head";
import { Router } from "next/router";

// ** Loader Import
import NProgress from "nprogress";

// ** Emotion Imports
import { CacheProvider } from "@emotion/react";

// ** Config Imports
import themeConfig from "src/configs/themeConfig";

//** session imports
import { SessionProvider } from "next-auth/react";

// ** Component Imports
import UserLayout from "src/layouts/UserLayout";
import ThemeComponent from "src/@core/theme/ThemeComponent";

// ** Contexts
import {
  SettingsConsumer,
  SettingsProvider,
} from "src/@core/context/settingsContext";

// ** Utils Imports
import { createEmotionCache } from "src/@core/utils/create-emotion-cache";

// ** React Perfect Scrollbar Style
import "react-perfect-scrollbar/dist/css/styles.css";

// ** Global css styles
import "../../styles/globals.css";

import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { msalConfig } from "../../authConfig";

// const username = process.env.DB_USERNAME;
// const password = process.env.DB_PASSWORD;

const clientSideEmotionCache = createEmotionCache();

// ** Pace Loader
if (themeConfig.routingLoader) {
  Router.events.on("routeChangeStart", () => {
    NProgress.start();
  });
  Router.events.on("routeChangeError", () => {
    NProgress.done();
  });
  Router.events.on("routeChangeComplete", () => {
    NProgress.done();
  });
}

// ** Configure JSS & ClassName
const App = (props) => {
  const {
    Component,
    emotionCache = clientSideEmotionCache,
    pageProps,
    session,
  } = props;

  // Variables
  const getLayout =
    Component.getLayout ?? ((page) => <UserLayout>{page}</UserLayout>);
  const msalInstance = new PublicClientApplication(msalConfig);
  return (
    <MsalProvider instance={msalInstance}>
      <SessionProvider session={pageProps.session}>
        <CacheProvider value={emotionCache}>
          <Head>
            <title> Seeker | One Nation One Funding Platform </title>
            <meta
              name="description"
              content={`${themeConfig.templateName} – Seeker – A One Nation - One Funding platform.`}
            />
            <meta
              name="keywords"
              content="Funding, Seeker, One Nation One Funding Platform, Scholarship, National Scholarship Portal, HEI, Higher Education"
            />
            <meta
              name="viewport"
              content="initial-scale=1, width=device-width"
            />
          </Head>

          <SettingsProvider>
            <SettingsConsumer>
              {({ settings }) => {
                return (
                  <ThemeComponent settings={settings}>
                    {getLayout(<Component {...pageProps} />)}
                  </ThemeComponent>
                );
              }}
            </SettingsConsumer>
          </SettingsProvider>
        </CacheProvider>
      </SessionProvider>
    </MsalProvider>
  );
};

export default App;
