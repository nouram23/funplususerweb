import React, { useState, useEffect } from "react";
import ServiceItem from "components/ServiveItem/item";
import Recommendation from "components/Recommendation";
import Layout from "../components/Layout";
import { Skeleton } from "antd";
import { data } from "autoprefixer";
// import styles from "../styles/Home.module.css";

export default function Home() {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(async () => {
    const response = await fetch("/api/allServiceType");
    const types = await response.json();
    setData(types);
    console.log(types);
    setLoading(false);
  }, []);
  return (
    <Layout>
      <div className="md:mt-24 mt-14  bg-[#1a1a1a] ">
        <div className="md:max-w-7xl  max-w-xl mx-auto py-10">
          <div className="flex justify-center flex-wrap mx-auto ">
            {(data || []).map((e, i) => {
              if (e.type === "simple") {
                return (
                  <ServiceItem
                    key={i}
                    item={{
                      loading: loading,
                      icon: e.icon,
                      count: e.count,
                      name: e.name,
                    }}
                  />
                );
              } else {
                return (
                  <ServiceItem
                    longText={{
                      loading: loading,
                      icon: e.icon,
                      count: e.count,
                      name: e.name,
                    }}
                  />
                );
              }
            })}

            <ServiceItem isComingSoon={true} />
          </div>
          <h1 className="text-center text-4xl font-semibold mt-4">
            Яагаад манайхыг <span className="block">ашиглах вэ?</span>
          </h1>
          <div className="flex justify-center space-x-8 mt-8">
            <Recommendation
              item={{
                icon: "assets/images/slider/slide-img/1.svg",
                name: "Бүгд нэг дор",
                desc: "Цаг алдалгүй хэзээ ч, хаанаас ч цаг захиалах боломжтой",
                gr1: "#4a56bd",
                gr2: "#b14b56",
              }}
            />
            <Recommendation
              item={{
                icon: "assets/images/slider/slide-img/2.svg",
                name: "Хурдан шуурхай",
                desc: "Хурдан шуурхай, аппликэйшн ашиглах бүрдээ бэлэгтэй, хөнгөлөлттэй",
                gr1: "#4465ca",
                gr2: "#cf4681",
              }}
            />
            <Recommendation
              item={{
                icon: "assets/images/slider/slide-img/3.png",
                name: "Цаг алдахгүй",
                desc: "Цаг алдалгүй хэзээ ч, хаанаас ч цаг захиалах боломжтой",
                gr1: "#ad4242",
                gr2: "#9198e5",
              }}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
