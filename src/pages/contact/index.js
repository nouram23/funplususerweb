import Layout from "components/Layout";
import { Button, Card, Form, Input, Tabs } from "antd";
import Link from "next/link";
const { TextArea } = Input;

export default function Contact() {
  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <>
      <Layout>
        <div className="md:mt-24 mt-14 bg-[#1a1a1a] font-Roboto ">
          <div className=" max-w-7xl mx-auto flex flex-col min-h-screen md:py-56 sm:py-40 py-10">
            <div className="flex flex-col items-center  md:space-y-12 space-y-8 text-center">
              {" "}
              <h1 className="md:text-6xl text-3xl ">Холбоо барих</h1>
              <p
                className="md:text-2xl text-lg
               max-w-4xl px-10 md:leading-9 leading-8"
              >
                Монголчуудын уламжлалт хэрэглээг халж, хялбар, үр ашигтай,
                иргэдийн хайртай үйлчилгээг бий болгохын тулд бид хичээн ажиллаж
                байна.
              </p>
            </div>
            <div className=" max-w-screen-2xl flex items-baseline justify-between lg:flex-row flex-col lg:px-20  md:mt-80 ss:mt-20 mt-10">
              <div className=" border w-full max-w-md  border-white/10  lg:p-20 ss:p-10 p-4 mx-auto rounded-2xl">
                <Tabs className="">
                  <Tabs.TabPane
                    className=" "
                    tab="Санал хүсэлт"
                    key="request"
                    tabKey="request"
                  >
                    <Requestt />
                  </Tabs.TabPane>
                  <Tabs.TabPane tab="Гомдол" key="complaint" tabKey="complaint">
                    <Complaint />
                  </Tabs.TabPane>
                </Tabs>
              </div>
              <div className="flex flex-col mt-10 space-y-6 mx-auto px-10">
                <div>
                  <p className="md:text-xl text-base  max-w-sm ">
                    Та энэхүү формыг бөглөөд илгээхэд, манай баг тантай эргээд
                    холбогдох болно.
                  </p>
                </div>
                <ul className=" md:text-xl text-base space-y-2">
                  <li>Хаяг: Mongolia, Ulaanbaatar</li>
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
const Requestt = () => {
  return (
    <Form className="" action="" layout="vertical">
      <Form.Item>
        <Input className="   py-2     px-3   " type="text" placeHolder="Нэр" />
      </Form.Item>
      <Form.Item>
        <Input
          className="   py-2     px-3   "
          type="number"
          placeHolder="Утасны дугаар"
        />
      </Form.Item>
      <Form.Item>
        <Input className="py-2 px-3x" type="email" placeHolder="Имэйл хаяг" />
      </Form.Item>
      <Form.Item>
        <TextArea
          className="   py-2       "
          maxLength={200}
          autoSize={{ minRows: 10, maxRows: 15 }}
          placeHolder="Агуулга"
        />
      </Form.Item>
      <Button className=" w-full  h-10 pl-2 font-light bg-gradient ">
        Илгээх
      </Button>
    </Form>
  );
};

const Complaint = () => {
  return (
    <Form className=" " action="" layout="vertical">
      <Form.Item>
        <Input className="   py-2 px-3 " type="text" placeHolder="Нэр" />
      </Form.Item>
      <Form.Item>
        <Input
          className="   py-2     px-3   "
          type="number"
          placeHolder="Утасны дугаар"
        />
      </Form.Item>
      <Form.Item>
        <Input
          className="   py-2     px-3   "
          type="email"
          placeHolder="Имэйл хаяг"
        />
      </Form.Item>
      <Form.Item>
        <TextArea
          className="   py-2       "
          maxLength={200}
          autoSize={{ minRows: 10, maxRows: 15 }}
          placeHolder="Агуулга"
        />
      </Form.Item>
      <Button className="w-full   h-10     pl-2 font-light bg-gradient ">
        Илгээх
      </Button>
    </Form>
  );
};