import React from "react";
import { Carousel, Calendar, Select, Row, Col, Tabs, Menu, Button } from "antd";
import Product from "components/Product";
import Layout from "components/Layout";
import TimeTable from "components/TimeTable";
import TableMenu from "components/TableMenu";
import vipTimeTable from "components/vipTimeTable";

const { TabPane } = Tabs;

export default function Service() {
  const [index, setIndex] = React.useState(0);
  const onClick = (e) => {
    setIndex(e.key);
  };
  return (
    <Layout>
      <div className="mt-24 bg-[#1a1a1a] ">
        <div className="max-w-screen-2xl  mx-auto lg:px-10 px-2">
          <div className="pl-40 flex h-12 mx-auto font-bold items-center ">
            Нүүр Хуудас-Бүтээгдэхүүн-Billiard
          </div>
          <div className="flex lg:flex-row flex-col lg:justify-center lg:items-start items-center">
            <div className="lg:w-3/5 md:w-4/5 w-11/12">
              <div>
                <Carousel className="w-full lg:pr-10" autoplay>
                  <img
                    className="sm:h-[400px]  h-72  rounded-xl"
                    src="/assets/images/slider/image/1.png"
                    alt="The Woods"
                  />

                  <img
                    className="sm:h-[400px]  h-72 rounded-xl"
                    src="/assets/images/slider/image/2.png"
                    alt="Cinque Terre"
                  />

                  <img
                    className="sm:h-[400px]  h-72 rounded-xl"
                    src="/assets/images/slider/image/4.png"
                    alt="Mountains and fjords"
                  />
                </Carousel>
              </div>
              <div className="my-9 sm:grid  grid-cols-6 lg:pr-10">
                <Product
                  items={{
                    url: "/assets/images/billiard-photo/a1.svg",
                    title: "Заалны ширээ",
                    desc: "Стандартын 6 ширээ",
                  }}
                />
                <Product
                  items={{
                    url: "/assets/images/billiard-photo/a2.svg",
                    title: "Алкохолтой эсэх",
                    desc: "Архи пивоор үйлчилнэ",
                  }}
                />
                <Product
                  items={{
                    url: "/assets/images/billiard-photo/a4.svg",
                    title: "Цагийн хуваарь",
                    desc: "24/7",
                  }}
                />
                <Product
                  items={{
                    url: "/assets/images/billiard-photo/a5.svg",
                    title: "Цаг цуцлах эсэх",
                    desc: "Цуцлах боломжгүй",
                  }}
                />

                <Product
                  items={{
                    url: "/assets/images/billiard-photo/a3.svg",
                    title: "VIP өрөө",
                    desc: "VIP 6 room",
                  }}
                />
              </div>
              <div className="mb-9 lg:pr-10">
                <h1 className="xk:text-2xl text-xl font-bold"> Танилцуулга</h1>
                <p className=" mt-4 xl:text-lg text-base ">
                  {" "}
                  Дэлхийн стандартын ширээ, хэрэгсэл, тав тухтай орчинд монгол
                  залуус чөлөөт цагаа зөв боловсон өнгрүүлэхээр боллоо.
                  Агааржуулалтын систем, цэмбэ, плаж, палк, сандал
                </p>
              </div>
            </div>
            <div className="lg:w-2/5 md::w-4/5 w-11/12 space-y-4">
              <h1 className="xl:text-3xl text-lg font-semibold">
                RED STAR pool Billiard&Karaoke
              </h1>
              <p className="xl:text-base lg:text-sm text-base">
                Дэлхийн стандартын ширээ, хэрэгсэл, тав тухтай орчинд монгол
                залуус чөлөөт цагаа зөв боловсон өнгрүүлэхээр боллоо.
                Агааржуулалтын систем, цэмбэ, плаж, палк, сандал
              </p>
              <div className="flex justify-between">
                <div className="max-w-sm">
                  <Calendar
                    fullscreen={false}
                    headerRender={({ value, onChange }) => {
                      const start = 0;
                      const end = 12;
                      const monthOptions = [];

                      const current = value.clone();
                      const localeData = value.localeData();
                      const months = [];
                      for (let i = 0; i < 12; i++) {
                        current.month(i);
                        months.push(localeData.monthsShort(current));
                      }

                      for (let index = start; index < end; index++) {
                        monthOptions.push(
                          <Select.Option
                            className="month-item"
                            key={`${index}`}
                          >
                            {months[index]}
                          </Select.Option>
                        );
                      }

                      const month = value.month();

                      return (
                        <div className="flex justify-end p-2">
                          <Row gutter={16}>
                            <Col>
                              <Select
                                size="small"
                                dropdownMatchSelectWidth={false}
                                value={String(month)}
                                onChange={(selectedMonth) => {
                                  const newValue = value.clone();
                                  newValue.month(parseInt(selectedMonth, 10));
                                  onChange(newValue);
                                }}
                              >
                                {monthOptions}
                              </Select>
                            </Col>
                          </Row>
                        </div>
                      );
                    }}
                  />
                </div>
                <div className="space-y-4">
                  <TableMenu
                    action={{
                      menuClick: onClick,
                      subKey: 1,
                      title: "Энгийн ширээ",
                      tables: {
                        table1: "TABLE 1",
                        table2: "TABLE 2",
                        table3: "TABLE 3",
                      },
                    }}
                  />
                  <TableMenu
                    action={{
                      menuClick: onClick,
                      subKey: 2,
                      title: "VIP ширээ",
                      tables: {
                        table1: "VIP TABLE 1",
                        table2: "VIP TABLE 2",
                        table3: "VIP TABLE 3",
                      },
                    }}
                  />
                </div>
              </div>
              <TimeTable index={{ table: index }} />
              <vipTimeTable />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
