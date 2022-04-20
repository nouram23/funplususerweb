import Layout from "components/Layout";
import { Button, Card, Form, Input, Tabs } from "antd";
import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
const { TextArea } = Input;

export default function Contact() {
  const [type, setType] = React.useState("request");
  const router = useRouter();

  const onChange = (type) => {
    setType(type);
  };

  const onSubmit = async (values) => {
    values.type = type;
    const response = await fetch("/api/feedback", {
      method: "POST",
      body: JSON.stringify({ values }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    alert("Таны хүсэлт амжилттай илгээгдлээ!");
    router.push("/");
  };
  return (
    <>
      <Layout>
        <div className="md:mt-24 mt-14 bg-[#1a1a1a] font-Roboto ">
          <div className=" max-w-7xl mx-auto flex flex-col min-h-screen md:py-56 sm:py-40 py-10">
            <div className="flex flex-col items-center  md:space-y-12 space-y-8 text-center">
              {" "}
              <h1 className="md:text-6xl text-3xl ">Санал хүсэлт</h1>
              <p
                className="md:text-2xl text-lg
               max-w-4xl px-10 md:leading-9 leading-8"
              >
                Таны санал хүсэлт бидний ирээдүйн үнэт зүйлс байх болно
              </p>
            </div>
            <div className=" max-w-screen-2xl flex items-baseline justify-between lg:flex-row flex-col lg:px-20  md:mt-80 ss:mt-20 mt-10">
              <div className=" border w-full max-w-md  border-white/10  lg:p-20 ss:p-10 p-4 mx-auto rounded-2xl">
                <Tabs onChange={onChange}>
                  <Tabs.TabPane
                    tab="Санал хүсэлт"
                    key="request"
                    tabKey="request"
                  >
                    <Form onFinish={onSubmit} layout="vertical">
                      <Form.Item name={"name"}>
                        <Input
                          required
                          className="   py-2     px-3   "
                          type="text"
                          placeHolder="Нэр"
                        />
                      </Form.Item>
                      <Form.Item name={"phone"}>
                        <Input
                          required
                          className="   py-2     px-3   "
                          type="number"
                          placeHolder="Утасны дугаар"
                        />
                      </Form.Item>
                      <Form.Item name={"email"}>
                        <Input
                          required
                          className="py-2 px-3x"
                          type="email"
                          placeHolder="Имэйл хаяг"
                        />
                      </Form.Item>
                      <Form.Item name={"about"}>
                        <TextArea
                          required
                          className="   py-2       "
                          maxLength={200}
                          autoSize={{ minRows: 10, maxRows: 15 }}
                          placeHolder="Агуулга"
                        />
                      </Form.Item>
                      <Button
                        htmlType="submit"
                        className=" w-full  h-10 pl-2 font-light bg-gradient "
                      >
                        Илгээх
                      </Button>
                    </Form>
                  </Tabs.TabPane>
                  <Tabs.TabPane tab="Гомдол" tabKey="complaint" key="complaint">
                    <Form onFinish={onSubmit} layout="vertical">
                      <Form.Item name={"name"}>
                        <Input
                          required
                          className="   py-2 px-3 "
                          type="text"
                          placeHolder="Нэр"
                        />
                      </Form.Item>
                      <Form.Item name={"phone"}>
                        <Input
                          required
                          className="   py-2     px-3   "
                          type="number"
                          placeHolder="Утасны дугаар"
                        />
                      </Form.Item>
                      <Form.Item name={"email"}>
                        <Input
                          required
                          className="   py-2     px-3   "
                          type="email"
                          placeHolder="Имэйл хаяг"
                        />
                      </Form.Item>
                      <Form.Item name={"about"}>
                        <TextArea
                          required
                          className=" py-2 "
                          maxLength={200}
                          autoSize={{ minRows: 10, maxRows: 15 }}
                          placeHolder="Агуулга"
                        />
                      </Form.Item>
                      <Button
                        htmlType="submit"
                        className="w-full h-10 pl-2 font-light bg-gradient "
                      >
                        Илгээх
                      </Button>
                    </Form>
                  </Tabs.TabPane>
                </Tabs>
              </div>
              <div className="flex flex-col mt-10 space-y-6 mx-auto px-10">
                <div>
                  <p className="md:text-xl text-base  max-w-sm ">
                    Та энэхүү формыг бөглөөд илгээхэд манай хамт олон тантай
                    эргээд холбогдох болно
                  </p>
                </div>
                <ul className=" md:text-xl text-base space-y-2">
                  <li>Хаяг: Монгол, Улаанбаатар хот</li>
                  <li>Утас: +(976) 7600-2001</li>
                  <li>И-мэйл: contact@funplus.mn</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
