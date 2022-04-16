import React from "react";
import { Button, Form, Input, Tabs } from "antd";
import Link from "next/link";

export default function AuthRegister() {
  return (
    <div className="w-full h-full lg:grid grid-cols-10">
      <div className="col-span-6  h-screen  hidden lg:block">
        <img
          alt="bg"
          className="w-full bg-cover object-center h-screen"
          src="/assets/images/banner/2-1-570x500.jpg"
        />
      </div>
      <div className="col-span-4  h-screen  flex justify-center items-center">
        <div className="w-96 h-[500px] flex flex-col  items-center rounded-lg">
          <Link href="/">
            <a>
              <img
                className="h-20"
                alt="logo"
                src="/assets/images/logo/logo.svg"
              />
            </a>
          </Link>
          <Tabs className="text-[#9d32c2]  ">
            <Tabs.TabPane
              className="text-[#9d32c2] "
              tab="Нууц үг сэргээх"
              key="password_forget"
              tabKey="password_forget"
            >
              <PasswordForgetForm />
            </Tabs.TabPane>
            <Tabs.TabPane
              tab="Нууц үг солих"
              key="change_password"
              tabKey="change_password"
            >
              <PasswordChangeForm />
            </Tabs.TabPane>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

const PasswordForgetForm = () => {
  return (
    <Form className="  flex flex-col items-center" action="" layout="vertical">
      <Form.Item label="Утасны дугаар">
        <Input
          className="sm:w-72 w-64 py-2 rounded-xl px-3 ring-1 ring-[#9d32c2]   "
          type="number"
          placeHolder="99999999"
        />
      </Form.Item>
      <Form.Item label="Баталгаажуулах код">
        <Input
          className="sm:w-72 w-64 py-2 rounded-xl px-3 ring-1 ring-[#9d32c2]   "
          type="number"
          placeHolder="12456"
        />
      </Form.Item>
      <Form.Item label="Нууц үг">
        <Input
          className="sm:w-72 w-64 py-2 rounded-xl px-3 ring-1 ring-[#9d32c2]   "
          type="number"
          placeHolder="password"
        />
      </Form.Item>
      <Button className="sm:w-72 w-64 h-10 rounded-xl pl-2 font-light bg-gradient-to-r from-[#9d32c2] to-[#e97a34] ">
        Сэргээх
      </Button>
      <Link href="login">
        <a className="text-transparent bg-clip-text bg-gradient-to-r from-[#9d32c2] to-[#e97a34] text-sm mt-2">
          {" "}
          Нэвртэх бол энд дарна уу?
        </a>
      </Link>
    </Form>
  );
};

const PasswordChangeForm = () => {
  return (
    <Form className=" flex flex-col items-center" action="" layout="vertical">
      <Form.Item label="Нууц үг">
        <Input
          className="sm:w-72 w-64 py-2 rounded-xl px-3 ring-1    ring-[#9d32c2]"
          type="number"
          placeHolder="Password"
        />
      </Form.Item>
      <Form.Item label="Шинэ нууц үг">
        <Input
          className="sm:w-72 w-64 py-2 rounded-xl px-3 ring-1    ring-[#9d32c2]"
          type="number"
          placeHolder="New password"
        />
      </Form.Item>
      <Form.Item label="Шинэ нууц үг давтан оруулах">
        <Input
          className="sm:w-72 w-64 py-2 rounded-xl px-3 ring-1    ring-[#9d32c2]"
          type="number"
          placeHolder="Confirm password"
        />
      </Form.Item>
      <Button className="sm:w-72 w-64 h-10 rounded-xl pl-2 font-light bg-gradient-to-r from-[#9d32c2] to-[#e97a34]">
        Солих
      </Button>
      <Link href="login">
        <a className="text-transparent bg-clip-text bg-gradient-to-r from-[#9d32c2] to-[#e97a34] text-sm mt-2">
          {" "}
          Нэвртэх бол энд дарна уу?
        </a>
      </Link>
    </Form>
  );
};
