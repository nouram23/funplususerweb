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
    const response = await fetch("/api/v1/public/service_types");
    const types = await response.json();
    setData(types);
    setLoading(false);
  }, []);
  return (
    <Layout>
      <div className="md:mt-24 mt-14  bg-[#1a1a1a] ">
        <div className="sm:max-w-7xl  max-w-md mx-auto py-10 px-1">
          <div className="flex justify-center flex-wrap mx-auto ">
            {(data || []).map((e, i) => {
              return (
                <ServiceItem
                  item={{
                    loading: loading,
                    icon: e.icon,
                    count: e.count,
                    name: e.name,
                  }}
                  id={e.id}
                />
              );
            })}

            <ServiceItem isComingSoon={true} />
          </div>
          <h1 className="text-center sm:text-4xl text-2xl font-semibold mt-4">
            Funplus-д нэгдсэнээр...
          </h1>
          <div className="flex justify-start sm:justify-center flex-wrap sm:max-w-7xl  max-w-md mx-auto mt-8">
            <Recommendation
              item={{
                icon: "assets/images/slider/slide-img/1.svg",
                name: "Бүгд нэг дор",
                desc: "Хаанаас ч, хэдийд ч хүссэн үйлчилгээнийхээ цагийг нэг дороос захиалах боломжтой",
                gr1: "#4a56bd",
                gr2: "#b14b56",
              }}
            />
            <Recommendation
              item={{
                icon: "assets/images/slider/slide-img/2.svg",
                name: "Хурдан шуурхай",
                desc: "Аливаа үйлчилгээний цагийг олон газраас хайж цагаа бүү алд",
                gr1: "#4465ca",
                gr2: "#cf4681",
              }}
            />
            <Recommendation
              item={{
                icon: "assets/images/slider/slide-img/3.png",
                name: "Цаг алдахгүй",
                desc: "Хэрэглэгч таны үнэт цаг болон туулах замыг бид товчилно ",
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
