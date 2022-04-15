import React from "react";
import { Modal, Button, Form, Input, Checkbox } from "antd";
import Link from "next/link";

export default function AuthRegister() {
  const [isModalVisible, setIsModalVisible] = React.useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleSignUp = () => {
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }

  return (
    <div className="w-full h-full lg:grid grid-cols-10 ">
      <div className="col-span-6  h-screen bg-gray-500 hidden lg:block">
        <img
          alt="bg"
          className="w-full bg-cover object-center h-screen"
          src="/assets/images/banner/2-1-570x500.jpg"
        />
      </div>
      <div className="col-span-4  h-screen flex justify-center items-center">
        <div className="w-96 h-[500px] flex flex-col  items-center rounded-lg">
          <Form
            className=" sm:space-y-4 space-y-2  flex flex-col items-center"
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
                className="sm:w-80 w-64 py-2 rounded-xl px-3 ring-1  ring-[#9d32c2]"
                type="text"
                placeHolder="Нэр"
              />
            </Form.Item>
            <Form.Item>
              <Input
                className="sm:w-80 w-64 py-2 rounded-xl px-3 ring-1  ring-[#9d32c2]"
                type="number"
                placeHolder="Утасны дугаар"
              />
            </Form.Item>
            <Form.Item>
              <Input
                className="sm:w-80 w-64 py-2 rounded-xl px-3 ring-1   ring-[#9d32c2]"
                type="password"
                placeholder="Нууц үг"
              />
            </Form.Item>

            <Button
              onClick={showModal}
              className="sm:w-80 w-64 h-10 rounded-xl pl-2  bg-gradient "
            >
              Бүртгүүлэх
            </Button>
            <Link href="/auth/login">
              <a className="text-transparent bg-clip-text bg-gradient text-sm">
                {" "}
                Нэвртэх бол энд дарна уу?
              </a>
            </Link>
          </Form>
          <div className="">
            {" "}
            <Modal
              className=""
              title="Бүртгүүлэх"
              width={500}
              visible={isModalVisible}
              style={{ top: "30%" }}
              onOk={handleSignUp}
              onCancel={handleCancel}
              footer={[
                <Button
                  key="sign up"
                  className="w-full rounded-lg bg-gradient h-10"
                  onClick={handleSignUp}
                >
                  Бүртгүүлэх
                </Button>,
              ]}
            >
              <div className="space-y-4">
                <Input
                  className=""
                  type="number"
                  placeholder="Утасны дугаар"
                  addonBefore={"+976"}
                />
                <div className="h-10 bg-slate-700"> </div>
                <div className="flex flex-col space-y-4">
                  <p className="text-sm ">
                    Үйлчилгээний нөхцөлтэй танилцаж, зөвшөөрснөөр үйлчилгээтэй
                    холбоотой харилцаанд оролцох эрх, үүрэг, хариуцлагыг
                    хүлээхээр талууд тохиролцсонд тооцогдоно
                  </p>
                  <Checkbox onChange={onChange}>Зөвшөөрч байна</Checkbox>
                </div>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}
