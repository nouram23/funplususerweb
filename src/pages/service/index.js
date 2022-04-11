import Merchant from "components/Menchart";
import Header from "components/Header";
import Footer from "components/Footer";
import React from "react";

import Item from "./item";

export default function Service() {
  return (
    <>
      <Header />
      <div>
        <div className="md:mt-24 mt-20 bg-[#1a1a1a] ">
          <div className="mx-auto max-w-screen-2xl">
            <div className="w-full h-full ">
              <div className=" bg-[#1f1f1f] flex  pl-10 py-10">
                <div className="sm:max-w-lg mx-auto ">
                  <h1 className=" lg:text-2xl text-base mb-4 ">
                    Үйлчилгээний байгууллагууд
                  </h1>
                  <ul className="lg:text-xl md:text-base text-sm font-light space-y-2">
                    <li>
                      <a href="#">Barber</a>
                    </li>
                    <li>
                      <a href="#">Baketball</a>
                    </li>
                    <li>
                      <a href="#">Basketball</a>
                    </li>
                    <li>
                      <a href="#">Beauty</a>
                    </li>
                    <li>
                      <a href="#">Billiard</a>
                    </li>
                    <li>
                      <a href="#">Bowling</a>
                    </li>
                    <li>
                      <a href="#">Coach</a>
                    </li>
                    <li>
                      <a href="#">Extereme</a>
                    </li>
                    <li>
                      <a href="#">Karaoke</a>
                    </li>
                    <li>
                      <a href="#">Manicure</a>
                    </li>
                    <li>
                      <a href="#">Maze</a>
                    </li>
                    <li>
                      <a href="#">Paintball</a>
                    </li>
                    <li>
                      <a href="#">Photography</a>
                    </li>
                    <li>
                      <a href="#">PingPong</a>
                    </li>
                    <li>
                      <a href="#">Restourant</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-[#1a1a1a]  flex justify-center mx-auto items-center">
                <div className="flex justify-center flex-wrap  md:py-10 py-10 sm:px-10 px-2 mx-auto">
                  <Item
                    item={{
                      icon: "assets/images/billiard-photo/1.png",
                      name: "Monjoy Billiard Club",
                    }}
                  />
                  <Item
                    item={{
                      icon: "assets/images/billiard-photo/2.png",
                      name: "Monjoy Billiard Club",
                    }}
                  />
                  <Item
                    item={{
                      icon: "assets/images/billiard-photo/3.png",
                      name: "Monjoy Billiard Club",
                    }}
                  />
                  <Item
                    item={{
                      icon: "assets/images/billiard-photo/4.png",
                      name: "Monjoy Billiard Club",
                    }}
                  />
                  <Item
                    item={{
                      icon: "assets/images/billiard-photo/5.png",
                      name: "Monjoy Billiard Club",
                    }}
                  />
                  <Item
                    item={{
                      icon: "assets/images/billiard-photo/1.png",
                      name: "Monjoy Billiard Club",
                    }}
                  />
                  <Item
                    item={{
                      icon: "assets/images/billiard-photo/1.png",
                      name: "Monjoy Billiard Club",
                    }}
                  />
                  <Item
                    item={{
                      icon: "assets/images/billiard-photo/1.png",
                      name: "Monjoy Billiard Club",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Merchant />
      <Footer />
    </>
  );
}
