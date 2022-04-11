import Merchant from "components/Menchart";
import Header from "components/Header";
import Footer from "components/Footer";
import React from "react";
import { Carousel } from "antd";

export default function Service() {
  return (
    <>
      <Header />
      <div>
        <div className="md:mt-24 mt-20 bg-[#1a1a1a] ">
          <div className="mx-auto  max-w-screen-2xl">asdfsad</div>
          <Carousel autoplay></Carousel>
        </div>
      </div>
      <Merchant />
      <Footer />
    </>
  );
}
