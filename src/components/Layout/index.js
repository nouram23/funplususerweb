import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import Merchart from "../Merchant";

export default function Layout({ children }) {
  return (
    <div className="main-wrapper">
      <Header />
      {children}
      <Merchart />
      <Footer />
    </div>
  );
}
