import React from "react";
import { Button, Form, Input, InputNumber, Tabs, message } from "antd";
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
  const [loading, setLoading] = React.useState(false);
  const onFinish = async (values) => {
    setLoading(true);
    try {
      await AuthAPI.passwordForget({
        username: "" + values?.username,
      });
    } catch (err) {
      console.log(err);
      message.error("Таны дугаар буруу байна!");
    }
    setLoading(false);
  };

  return (
    <Form onFinish={onFinish} className="w-full" layout="vertical">
      <Form.Item
        rules={[{ required: "true", message: "Заавал бөглөнө үү " }]}
        label="Утасны дугаар"
        className=""
        name="username"
      >
        <InputNumber
          className="w-full "
          name="phone"
          size="large"
          placeholder="00000000"
        />
      </Form.Item>

      <Button
        htmlType="submit"
        size="large"
        className="pl-2 w-full font-light bg-gradient-to-r from-[#9d32c2] to-[#e97a34] mb-1"
        loading={loading}
        disabled={loading}
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
  const [loading, setLoading] = React.useState(false);
  const onFinish = async (values) => {
    setLoading(true);
    try {
      await AuthAPI.password_change({
        ...values,
        username: "" + values.username,
        activate_code: "" + values.activate_code,
        password: "" + values.password,
      });
    } catch (err) {
      console.log(err);
      message.error("Баталгаажуулах код буруу байна!");
    }
    setLoading(false);
  };

  return (
    <Form className="w-full" action="" layout="vertical" onFinish={onFinish}>
      <Form.Item
        label="Утасны дугаар"
        rules={[{ required: "true", message: "Утасны дугаараа оруулна уу" }]}
        className=""
        name="username"
      >
        <InputNumber
          className="w-full "
          name="phone"
          size="large"
          placeholder="00000000"
        />
      </Form.Item>

      <Form.Item
        rules={[
          { required: "true", message: "Баталгаажуулах кодоо оруулна уу" },
        ]}
        className=""
        label="Баталгаажуулах код"
        name={"activate_code"}
      >
        <InputNumber className=" w-full " size="large" placeholder="1234" />
      </Form.Item>
      <Form.Item
        className=""
        rules={[{ required: "true", message: "Нууц үгээ оруулна уу " }]}
        label="Шинэ нууц үг"
        name={"password"}
      >
        <Input.Password
          size="large"
          type={"password"}
          placeholder="New password"
        />
      </Form.Item>
      {/* <Form.Item
        className=""
        label="  Шинэ нууц үг давтан оруулах"
        name={"password"}
      >
        <Input.Password
          size="large"
          className=" "
          type="number"
          placeholder="Confirm password"
        />
      </Form.Item> */}
      <Button
        htmlType="submit"
        size="large"
        loading={loading}
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
