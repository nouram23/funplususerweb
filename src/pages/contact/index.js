import Layout from "components/Layout";
import { Button, Form, Input, Tabs } from "antd";
import Link from "next/link";
const { TextArea } = Input;

export default function Contact() {
  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <>
      <Layout>
        <div className="md:mt-24 mt-20 bg-[#1a1a1a] font-Roboto ">
          <div className=" max-w-7xl mx-auto flex flex-col min-h-screen md:py-56 py-40 ">
            <div className="flex flex-col items-center md:space-y-12 space-y-8 text-center">
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
            <div className=" flex justify-between items-baseline lg:flex-row flex-col lg:px-20 mx-auto md:mt-80 mt-20">
              <div className=" border border-white/10  lg:p-20 p-10 mx-auto rounded-2xl">
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
                  <h1 className="hidden text-4xl mb-10 font-semibold">
                    Холбоо барих
                  </h1>
                  <p className="md:text-xl text-base max-w-sm ">
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
    <Form className="  flex flex-col items-center" action="" layout="vertical">
      <Form.Item>
        <Input
          className="sm:w-80 w-64 py-2 rounded-xl px-3   "
          type="text"
          placeHolder="Нэр"
        />
      </Form.Item>
      <Form.Item>
        <Input
          className="sm:w-80 w-64 py-2 rounded-xl px-3   "
          type="number"
          placeHolder="Утасны дугаар"
        />
      </Form.Item>
      <Form.Item>
        <Input
          className="sm:w-80 w-64 py-2 rounded-xl px-3   "
          type="email"
          placeHolder="Имэйл хаяг"
        />
      </Form.Item>
      <Form.Item>
        <TextArea
          className="sm:w-80 w-64 py-2 rounded-xl   "
          maxLength={200}
          autoSize={{ minRows: 10, maxRows: 15 }}
          placeHolder="Агуулга"
        />
      </Form.Item>
      <Button className="sm:w-80 w-64 h-10 rounded-xl pl-2 font-light bg-gradient ">
        Илгээх
      </Button>
    </Form>
  );
};

const Complaint = () => {
  return (
    <Form className="  flex flex-col items-center" action="" layout="vertical">
      <Form.Item>
        <Input
          className="sm:w-80 w-64 py-2 rounded-xl px-3   "
          type="text"
          placeHolder="Нэр"
        />
      </Form.Item>
      <Form.Item>
        <Input
          className="sm:w-80 w-64 py-2 rounded-xl px-3   "
          type="number"
          placeHolder="Утасны дугаар"
        />
      </Form.Item>
      <Form.Item>
        <Input
          className="sm:w-80 w-64 py-2 rounded-xl px-3   "
          type="email"
          placeHolder="Имэйл хаяг"
        />
      </Form.Item>
      <Form.Item>
        <TextArea
          className="sm:w-80 w-64 py-2 rounded-xl   "
          maxLength={200}
          autoSize={{ minRows: 10, maxRows: 15 }}
          placeHolder="Агуулга"
        />
      </Form.Item>
      <Button className="sm:w-80 w-64 h-10 rounded-xl pl-2 font-light bg-gradient ">
        Илгээх
      </Button>
    </Form>
  );
};
