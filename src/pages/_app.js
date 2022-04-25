/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import "styles/less/dark.less";
import "styles/globals.css";

import { AuthContainer } from "hooks/useAuth";

function MyApp({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  );
}

export default MyApp;
