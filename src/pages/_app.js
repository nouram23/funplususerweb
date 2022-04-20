/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import "styles/less/dark.less";
import "styles/globals.css";

import AppLoading from "components/Loading/AppLoading";
import { ConfigProvider } from "antd";

import dynamic from "next/dynamic";
import { AuthContainer } from "hooks/useAuth";

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = React.useState("dark");
  const [loading, setLoading] = React.useState(true);

  React.useEffect(async () => {
    try {
      const req = await fetch("/api/theme", {
        method: "GET",
      });

      setTheme(req.theme);
    } catch (err) {
      message.error("Таны үйлдлийг хийхэд алдаа гарлаа");
    }
    ConfigProvider.config({
      theme,
    });
    setLoading(false);
  }, []);

  if (loading) {
    return <AppLoading />;
  }
  return (
    <AuthContainer>
      <ConfigProvider>
        <Component {...pageProps} />
      </ConfigProvider>
    </AuthContainer>
  );
}

export default MyApp;
