import React from "react";
import { Modal, Button, Form, Input, InputNumber } from "antd";
import Link from "next/link";

export default function AuthRegister() {
  const [isModalVisible, setIsModalVisible] = React.useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleSinUp = () => {
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="w-full h-full lg:grid grid-cols-10">
      <div className="col-span-6  h-screen bg-gray-500 hidden lg:block">
        <img
          alt="bg"
          className="w-full bg-cover object-center h-screen"
          src="/assets/images/banner/2-1-570x500.jpg"
        />
      </div>
      <div className="col-span-4  h-screen bg-white flex justify-center items-center">
        <div className="w-96 h-[500px] flex flex-col  items-center rounded-lg">
          <Form
            className="text-black sm:space-y-4 space-y-2  flex flex-col items-center"
            action=""
            layout="vertical"
          >
            <a href="#">
              <img
                className="h-20"
                alt="logo"
                src="/assets/images/logo/logo.svg"
              />
            </a>
            <div className="flex justify-start w-full py-2">
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#9d32c2] to-[#e97a34] text-4xl flex text-left">
                Бүртгүүлэх
              </p>
            </div>
            <Form.Item>
              <Input
                className="sm:w-80 w-64 py-2 rounded-xl px-3 ring-1 placeholder:text-slate-500 ring-[#9d32c2]"
                type="text"
                placeHolder="Нэр"
              />
            </Form.Item>
            <Form.Item>
              <Input
                className="sm:w-80 w-64 py-2 rounded-xl px-3 ring-1 placeholder:text-slate-500 ring-[#9d32c2]"
                type="number"
                placeHolder="Утасны дугаар"
              />
            </Form.Item>
            <Form.Item>
              <Input
                className="sm:w-80 w-64 py-2 rounded-xl px-3 ring-1  placeholder:text-slate-500 ring-[#9d32c2]"
                type="password"
                placeholder="Нууц үг"
              />
            </Form.Item>

            <Button
              onClick={showModal}
              className="sm:w-80 w-64 h-10 rounded-xl pl-2 font-light bg-gradient-to-r from-[#9d32c2] to-[#e97a34] text-white border-none"
            >
              Бүртгүүлэх
            </Button>
            <Link
              href="/auth/login"
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#9d32c2] to-[#e97a34] text-sm"
            >
              Нэвртэх бол энд дарна уу?
            </Link>
          </Form>
          <div className="">
            {" "}
            <Modal
              className=""
              visible={isModalVisible}
              style={{ top: "30%" }}
              onOk={handleSinUp}
              footer={[
                <Button
                  key="sign up"
                  className="w-full rounded-lg bg-gradient h-10"
                  onClick={handleSinUp}
                >
                  Бүртгүүлэх
                </Button>,
              ]}
            >
              <div>
                <Input className="w-96" type="number" addonBefore={"+976"} />
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}
