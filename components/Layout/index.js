import React from "react";
import Footer from "../Footer";
import Header from "../Header";


export default function Layout({ children }) {


  return (
    <div className="main-wrapper">
      <Header />
      {
        children
      }

      <Footer />
    </div>
  )
}