import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import Merchart from "../Merchant";
import LoggedInHeader from "components/LoggedInHeader";

export default function Layout({ children }) {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  React.useEffect(async () => {
    try {
      const response = await fetch("/api/me");

      // if (!response.body.locked) {
      //   return;
      // }

      const data = await response.json();

      console.log(data);
      if (data.name) setIsLoggedIn(true);
    } catch (err) {}
  }, []);
  return (
    <div className="main-wrapper font-Nunito">
      {isLoggedIn ? (
        <LoggedInHeader setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <Header />
      )}
      {children}
      <Merchart />
      <Footer />
    </div>
  );
}
