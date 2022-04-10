import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import Menchart from "../Menchart";

export default function Layout({ children }) {
  return (
    <div className="main-wrapper">
      <Header />
      {children}
      <Menchart />
      <Footer />
    </div>
  );
}
