import React from "react";
import {
  Carousel,
  Calendar,
  Select,
  Row,
  Col,
  Drawer,
  Button,
  Card,
} from "antd";
import Product from "components/Product";
import Layout from "components/Layout";
import TimeTable from "components/TimeTable";
import TableMenu from "components/TableMenu";
import VipTimeTable from "components/VipTimeTable";
import { useRouter } from "next/router";
import useFetch from "hooks/useFetch";
import { ServiceAPI } from "apis";
const today = new Date();

const tables = [
  {
    time1: "10:30-12:30",
    time2: "12:30-14:30",
    time3: "14:30-16:30",
    time4: "16:30-18:30",
    time5: "18:30-20:30",
  },
  {
    time1: "10:30-12:30",
    time2: "12:30-14:30",
    time3: "14:30-16:30",
    time4: "16:30-18:30",
    time5: "18:30-20:30",
  },
  {
    time1: "10:30-12:30",
    time2: "12:30-14:30",
    time3: "14:30-16:30",
    time4: "16:30-18:30",
    time5: "18:30-20:30",
  },
];
const vipTables = [
  {
    time1: "10:30-12:30",
    time2: "12:30-14:30",
    time3: "14:30-16:30",
    time4: "16:30-18:30",
    time5: "18:30-20:30",
  },
  {
    time1: "10:30-12:30",
    time2: "12:30-14:30",
    time3: "14:30-16:30",
    time4: "16:30-18:30",
    time5: "18:30-20:30",
  },
  {
    time1: "10:30-12:30",
    time2: "12:30-14:30",
    time3: "14:30-16:30",
    time4: "16:30-18:30",
    time5: "18:30-20:30",
  },
];
export default function Booking() {
  const [date, setDate] = React.useState(today);
  const [totalTime, setTotalTime] = React.useState(0);
  const router = useRouter();

  const onSelect = (e) => {
    setDate(e.toDate().toJSON());
  };
  console.log(date);

  const { result: data } = useFetch(ServiceAPI.detail, router.query.id)({});

  const [visible, setVisible] = React.useState(false);
  const [index, setIndex] = React.useState(-1);
  const [indexVip, setIndexVip] = React.useState(-1);
  const [btnIndexes, setBtnIndexes] = React.useState({
    btn1: false,
    btn2: false,
    btn3: false,
    btn4: false,
    btn5: false,
  });
  let times = [
    btnIndexes.btn1 ? tables[index].time1 : null,
    btnIndexes.btn2 ? tables[index].time2 : null,
    btnIndexes.btn3 ? tables[index].time3 : null,
    btnIndexes.btn4 ? tables[index].time4 : null,
    btnIndexes.btn5 ? tables[index].time5 : null,
  ];

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  const onClick = (e) => {
    setIndex(e);
    times = [];
    setBtnIndexes(false);
  };

  const onVipClick = (e) => {
    setIndexVip(e);
    times = [];
  };
  React.useEffect(() => {
    console.log(times);
    times.map((e) => {
      if (e === null && totalTime > 0) setTotalTime((pre) => pre--);
      else setTotalTime((pre) => pre++);
    });
  }, [times]);

  return (
    <Layout>
      <div className="md:mt-24 mt-14  bg-[#1a1a1a] ">
        <div className="max-w-screen-2xl mx-auto lg:px-10 md:py-20 py-10 px-2">
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
              <div className="my-9 xs:grid  grid-cols-6 lg:pr-10">
                <Product
                  items={{
                    url: "/assets/images/billiard-photo/a1.svg",
                    title: "???????????? ??????????",
                    desc: "???????????????????? 6 ??????????",
                  }}
                />
                <Product
                  items={{
                    url: "/assets/images/billiard-photo/a2.svg",
                    title: "???????????????????? ????????",
                    desc: "???????? ???????????? ????????????????",
                  }}
                />
                <Product
                  items={{
                    url: "/assets/images/billiard-photo/a4.svg",
                    title: "???????????? ??????????????",
                    desc: "24/7",
                  }}
                />
                <Product
                  items={{
                    url: "/assets/images/billiard-photo/a5.svg",
                    title: "?????? ???????????? ????????",
                    desc: "???????????? ??????????????????",
                  }}
                />

                <Product
                  items={{
                    url: "/assets/images/billiard-photo/a3.svg",
                    title: "VIP ????????",
                    desc: "VIP 6 room",
                  }}
                />
              </div>
              <div className="mb-9 lg:pr-10">
                <h1 className="xk:text-2xl text-xl font-bold"> ??????????????????????</h1>
                <p className=" mt-4 xl:text-lg ss:text-base text-sm">
                  {" "}
                  ?????????????? ???????????????????? ??????????, ????????????????, ?????? ???????????? ???????????? ????????????
                  ???????????? ???????????? ?????????? ?????? ???????????????? ???????????????????????? ????????????.
                  ???????????????????????????? ????????????, ??????????, ????????, ????????, ????????????
                </p>
              </div>
            </div>
            <div className="lg:w-2/5 md:w-4/5 w-11/12 space-y-4">
              <h1 className="xl:text-3xl text-lg font-semibold">
                RED STAR pool Billiard&Karaoke
              </h1>
              <p className="xl:text-base lg:text-sm ss:text-base text-sm">
                ?????????????? ???????????????????? ??????????, ????????????????, ?????? ???????????? ???????????? ????????????
                ???????????? ???????????? ?????????? ?????? ???????????????? ???????????????????????? ????????????.
                ???????????????????????????? ????????????, ??????????, ????????, ????????, ????????????
              </p>
              <Button
                className="ss:hidden w-full h-10 bg-gradient-to-r from-[#9d32c2] to-[#e97a34] rounded-lg"
                onClick={showDrawer}
              >
                ????????????????
              </Button>
              <Drawer
                title="????????????????"
                placement={"bottom"}
                height={"90%"}
                onClose={onClose}
                visible={visible}
              >
                <div className="flex flex-col items-center">
                  <div className="max-w-sm">
                    <Calendar
                      fullscreen={false}
                      onSelect={onSelect}
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
                  <div className=" xs:w-96 w-full mt-4">
                    <TableMenu
                      action={{
                        optionClick: onClick,
                        optionClickVip: onVipClick,
                        title: "?????????? ????????????",
                      }}
                    />
                  </div>
                </div>
                {index != -1 ? (
                  <TimeTable
                    index={{
                      table: index,
                      setBtnIndexes: setBtnIndexes,
                      tables,
                      btnIndexes: btnIndexes,
                    }}
                  />
                ) : null}
                {indexVip != -1 ? (
                  <VipTimeTable
                    index={{
                      table: indexVip,
                      vipTables,
                      setBtnIndexes: setBtnIndexes,
                      btnIndexes: btnIndexes,
                    }}
                  />
                ) : null}
              </Drawer>
              <div className="hidden ss:flex justify-between xl:flex-row lg:flex-col md:flex-row flex-col">
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
                <div className="md:w-80 ss:w-96 w-auto xl:mt-0 lg:mt-4 md:mt-0 mt-4 ">
                  <TableMenu
                    action={{
                      optionClick: onClick,
                      optionClickVip: onVipClick,

                      title: "?????????? ????????????",
                    }}
                  />
                </div>
              </div>
              <div className="hidden ss:block">
                {index != -1 ? (
                  <TimeTable
                    index={{
                      table: index,
                      tables,
                      setBtnIndexes: setBtnIndexes,
                      btnIndexes: btnIndexes,
                    }}
                  />
                ) : null}
                {indexVip != -1 ? (
                  <VipTimeTable
                    index={{
                      table: indexVip,
                      vipTables,
                      setBtnIndexes: setBtnIndexes,
                      btnIndexes: btnIndexes,
                    }}
                  />
                ) : null}
              </div>
              <div></div>
            </div>
          </div>
          <Card>
            <div className="grid grid-cols-6   ">
              <div className="col-span-4 grid grid-cols-3 ">
                <p>2022-04-22</p>
                <div>
                  {times.map((e, i) => {
                    return (
                      <p className="" key={i}>
                        {e !== null ? e : null}
                      </p>
                    );
                  })}
                </div>
                <p>{totalTime}</p>
              </div>

              <div className=" col-span-2 grid grid-cols-2">
                <p>{totalTime * 1000}</p>
                <Button>zahialah</Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
