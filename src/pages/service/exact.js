import Merchant from "components/Menchart";
import Header from "components/Header";
import Footer from "components/Footer";
import React from "react";
import Image from "next/image";
import { Carousel } from "antd";
import Product from "components/Product";

export default function Service() {
  return (
    <>
      <Header />
      <div>
        <div className="md:mt-24 mt-20 bg-[#1a1a1a] ">
          <div className="pl-40 flex h-12 mx-auto bg-gradient-to-r from-[#9d32c2] to-[#e97a34] max-w-screen-3xl font-bold items-center">
            Нүүр Хуудас-Бүтээгдэхүүн-Billiard
          </div>
          <div>
            <Carousel autoplay>
              <div>
                <Image
                  width={500}
                  height={500}
                  src="/assets/images/slider/image/1.png"
                  alt="The Woods"
                />
              </div>
              <div>
                <Image
                  width={500}
                  height={500}
                  src="/assets/images/slider/image/2.png"
                  alt="Cinque Terre"
                />
              </div>
              <div>
                <Image
                  width={500}
                  height={500}
                  src="/assets/images/slider/image/4.png"
                  alt="Mountains and fjords"
                />
              </div>
            </Carousel>
          </div>
          <div className="flex mx-9">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
        </div>
      </div>
      <Merchant />
      <Footer />
    </>
  );
}
