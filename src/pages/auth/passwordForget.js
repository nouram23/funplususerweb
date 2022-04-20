import React from "react";
import { Button, Form, Input, Tabs } from "antd";
import Link from "next/link";

export default function AuthRegister() {


  const [selectActiveKey, setSelectActiveKey] = React.useState("password_forget");

  const [phone, setPhone] = React.useState("")

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
            <Tabs.TabPane
              tab="Нууц үг сэргээх"
              key="password_forget"
              tabKey="password_forget"
            >
              {" "}
              <PasswordForgetForm phone={phone} onSubmit={e => console.log(e)} />
            </Tabs.TabPane>
            <Tabs.TabPane
              tab="Нууц үг солих"
              key="change_password"
              tabKey="change_password"

            >
              <PasswordChangeForm phone={phone} onSubmit={e => console.log(e)} />
            </Tabs.TabPane>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

const PasswordForgetForm = ({ phone, onSubmit }) => {
  return (
    <Form className="w-full" layout="vertical">
      <Form.Item className="">
        <div>
          <label className="block text-[#9d32c2]">Утасны дугаар</label>
          <Input
            className=" py-2  px-3  "
            type="number"
            placeHolder="99119911"
          />
        </div>
      </Form.Item>
      <Form.Item className="">
        <div>
          <label className="block text-[#9d32c2]">Баталгаажуулах код</label>
          <Input className=" py-2 px-3 " placeHolder="1234" />
        </div>
      </Form.Item>
      <Form.Item className="">
        <div>
          <label className="block text-[#9d32c2]">Нууц үг</label>
          <Input.Password
            className=" py-2  px-3    "
            type="number"
            placeHolder="password"
          />
        </div>
      </Form.Item>
      <Button className="pl-2 w-full font-light bg-gradient-to-r from-[#9d32c2] to-[#e97a34] mb-1">
        Сэргээх
      </Button>
      <Link href="login">
        <a className="text-[#9d32c2] text-sm"> Нэвртэх бол энд дарна уу?</a>
      </Link>
    </Form>
  );
};

const PasswordChangeForm = ({ phone, onSubmit }) => {
  return (
    <Form className="w-full" action="" layout="vertical">
      <Form.Item className="">
        <div>
          <label className="block text-[#9d32c2]">Нууц үг</label>
          <Input.Password
            className=" px-3  py-2 "
            type="number"
            placeHolder="Password"
          />
        </div>
      </Form.Item>
      <Form.Item className="">
        <div>
          <label className="block text-[#9d32c2]">Шинэ нууц үг</label>
          <Input.Password
            className="px-3 py-2 "
            type="number"
            placeHolder="New password"
          />
        </div>
      </Form.Item>
      <Form.Item className="">
        <div>
          <label className="block text-[#9d32c2]">
            Шинэ нууц үг давтан оруулах
          </label>
          <Input.Password
            className="py-2 px-3 "
            type="number"
            placeHolder="Confirm password"
          />
        </div>
      </Form.Item>
      <Button className="w-full  pl-2 font-light bg-gradient-to-r from-[#9d32c2] to-[#e97a34] mb-1">
        Солих
      </Button>
      <Link href="login">
        <a className="text-[#9d32c2] text-sm "> Нэвртэх бол энд дарна уу?</a>
      </Link>
    </Form>
  );
};
