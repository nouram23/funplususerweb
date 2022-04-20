import React, { useState, useEffect } from "react";
import ServiceItem from "components/ServiveItem/item";
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
            {data.map((e, i) => {
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
            {/* <ServiceItem
              item={{
                loading: loading,
                icon: "assets/images/product/medium-size/1-2.svg",
                count: 10,
                name: "Үсчин",
              }}
            />
            <ServiceItem
              item={{
                loading: loading,
                icon: "assets/images/product/medium-size/1-3.svg",
                count: 10,
                name: "Заал",
              }}
            />
            <ServiceItem
              longText={{
                loading: loading,
                icon: "assets/images/product/medium-size/1-4.svg",
                count: 10,
                name: "Усан бассейн",
              }}
            />
            <ServiceItem
              item={{
                loading: loading,
                icon: "assets/images/product/medium-size/1-5.svg",
                count: 10,
                name: "Гоо сайхан",
              }}
            />
            <ServiceItem
              item={{
                loading: loading,
                icon: "assets/images/product/medium-size/1-6.svg",
                count: 10,
                name: "Боулинг",
              }}
            />
            <ServiceItem
              longText={{
                loading: loading,
                icon: "assets/images/product/medium-size/1-7.svg",
                count: 10,
                name: "Сэтгэл судлаач",
              }}
            />
            <ServiceItem
              longText={{
                loading: loading,
                icon: "assets/images/product/medium-size/1-8.svg",
                count: 10,
                name: "Экстрем спорт",
              }}
            />
            <ServiceItem
              item={{
                loading: loading,
                icon: "assets/images/product/medium-size/1-9.svg",
                count: 10,
                name: "Кароеке",
              }}
            />
            <ServiceItem
              item={{
                loading: loading,
                icon: "assets/images/product/medium-size/1-10.svg",
                count: 10,
                name: "Маникюр",
              }}
            />
            <ServiceItem
              longText={{
                loading: loading,
                icon: "assets/images/product/medium-size/1-11.svg",
                count: 10,
                name: "Энтертаймент төв",
              }}
            />
            <ServiceItem
              item={{
                loading: loading,
                icon: "assets/images/product/medium-size/1-12.svg",
                count: 10,
                name: "Пейнтбол",
              }}
            />
            <ServiceItem
              longText={{
                loading: loading,
                icon: "assets/images/product/medium-size/1-13.svg",
                count: 10,
                name: "Зургийн студи",
              }}
            />
            <ServiceItem
              item={{
                loading: loading,
                icon: "assets/images/product/medium-size/1-14.svg",
                count: 10,
                name: "Теннис",
              }}
            />
            <ServiceItem
              item={{
                loading: loading,
                icon: "assets/images/product/medium-size/1-15.svg",
                count: 10,
                name: "Ресторан",
              }}
            /> */}
            <ServiceItem isComingSoon={true} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
