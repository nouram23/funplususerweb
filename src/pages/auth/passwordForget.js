import React from "react";
import { Button, Form, Input, InputNumber, Tabs } from "antd";
import Link from "next/link";
import { AuthAPI } from "apis";

export default function AuthRegister() {
  const [selectActiveKey, setSelectActiveKey] = React.useState("get_code");

  const [phone, setPhone] = React.useState("");

  return (
    <div className="w-full h-full lg:grid grid-cols-10">
      <div className="col-span-6  h-screen  hidden lg:block">
        <img
          alt="bg"
          className="w-full bg-cover object-center h-screen"
          src="/assets/images/banner/2-1-570x500.jpg"
        />
      </div>
      <div className="col-span-4 h-screen flex justify-center items-center">
        <div className="w-80 xs:px-0 px-3">
          <Link href="/">
            <a>
              <img
                className="h-20"
                alt="logo"
                src="/assets/images/logo/logo.svg"
              />
            </a>
          </Link>
          <Tabs activeKey={selectActiveKey} onChange={setSelectActiveKey}>
            <Tabs.TabPane tab="Код авах" key="get_code" tabKey="get_code">
              {" "}
              <GetCode phone={phone} onSubmit={(e) => console.log(e)} />
            </Tabs.TabPane>
            <Tabs.TabPane
              tab="Нууц үг сэргээх"
              key="change_password"
              tabKey="change_password"
            >
              <PasswordChangeForm
                phone={phone}
                onSubmit={(e) => console.log(e)}
              />
            </Tabs.TabPane>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

const GetCode = ({ phone, onSubmit }) => {
  return (
    <Form className="w-full" layout="vertical">
      <Form.Item label="Утасны дугаар" className="">
        <InputNumber
          className="w-full "
          name="phone"
          size="large"
          placeholder="00000000"
        />
      </Form.Item>

      <Button
        size="large"
        className="pl-2 w-full font-light bg-gradient-to-r from-[#9d32c2] to-[#e97a34] mb-1"
      >
        Код авах
      </Button>
      <Button type="link" href="login" className="text-[#9d32c2] text-sm">
        {" "}
        Нэвртэх бол энд дарна уу?
      </Button>
    </Form>
  );
};

const PasswordChangeForm = ({ phone, onSubmit }) => {
  const onFinish = async (values) => {
    console.log(values);
    try {
      await AuthAPI.passwordForget(values);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Form className="w-full" action="" layout="vertical" onFinish={onFinish}>
      <Form.Item label="Утасны дугаар" className="" name="phone">
        {/* <label className="block text-[#9d32c2]">Утасны дугаар</label> */}
        <InputNumber
          className="w-full "
          name="phone"
          size="large"
          placeholder="00000000"
        />
      </Form.Item>

      <Form.Item className="" label="Баталгаажуулах код" name={"verifyCode"}>
        <InputNumber className=" w-full " size="large" placeholder="1234" />
      </Form.Item>
      <Form.Item className="" label="Шинэ нууц үг" name={"newPassword"}>
        <Input.Password size="large" type="number" placeholder="New password" />
      </Form.Item>
      <Form.Item
        className=""
        label="  Шинэ нууц үг давтан оруулах"
        name={"newPasswordAgain"}
      >
        <Input.Password
          size="large"
          className=" "
          type="number"
          placeholder="Confirm password"
        />
      </Form.Item>
      <Button
        htmlType="submit"
        size="large"
        className="w-full  pl-2 font-light bg-gradient-to-r from-[#9d32c2] to-[#e97a34] mb-1"
      >
        Сэргээх
      </Button>
      <Button href="login" type="link" className="text-[#9d32c2] text-sm ">
        {" "}
        Нэвртэх бол энд дарна уу?
      </Button>
    </Form>
  );
};
