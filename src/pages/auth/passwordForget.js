import React from "react";
import { Button, Form, Input, Tabs } from "antd";
import Link from "next/link";

export default function AuthRegister() {
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
          <a href="#">
            <img
              className="h-20 mb-6"
              alt="logo"
              src="/assets/images/logo/logo.svg"
            />
          </a>
          <Tabs className="text-[#9d32c2] hover:text-[#e97a34] ">
            <Tabs.TabPane
              className="text-[#9d32c2] hover:text-[#e97a34]"
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
    <Form
      className="text-black  flex flex-col items-center"
      action=""
      layout="vertical"
    >
      <Form.Item>
        <Input
          className="sm:w-72 w-64 py-2 rounded-xl px-3 ring-1 ring-[#9d32c2] placeholder:text-slate-500"
          type="number"
          placeHolder="Утасны дугаар"
        />
      </Form.Item>
      <Form.Item>
        <Input
          className="sm:w-72 w-64 py-2 rounded-xl px-3 ring-1 ring-[#9d32c2] placeholder:text-slate-500"
          type="number"
          placeHolder="Баталгаажуулах код"
        />
      </Form.Item>
      <Form.Item>
        <Input
          className="sm:w-72 w-64 py-2 rounded-xl px-3 ring-1 ring-[#9d32c2] placeholder:text-slate-500"
          type="number"
          placeHolder="Нууц үг"
        />
      </Form.Item>
      <Button className="sm:w-72 w-64 h-10 rounded-xl pl-2 font-light bg-gradient-to-r from-[#9d32c2] to-[#e97a34] text-white border-none">
        Сэргээх
      </Button>
      <Link
        href="#"
        className="text-transparent bg-clip-text bg-gradient-to-r from-[#9d32c2] to-[#e97a34] text-sm"
      >
        Нэвртэх бол энд дарна уу?
      </Link>
    </Form>
  );
};

const PasswordChangeForm = () => {
  return (
    <Form
      className="text-black   flex flex-col items-center"
      action=""
      layout="vertical"
    >
      <Form.Item>
        <Input
          className="sm:w-72 w-64 py-2 rounded-xl px-3 ring-1 placeholder:text-slate-500 ring-[#9d32c2]"
          type="number"
          placeHolder="Нууц үг"
        />
      </Form.Item>
      <Form.Item>
        <Input
          className="sm:w-72 w-64 py-2 rounded-xl px-3 ring-1 placeholder:text-slate-500 ring-[#9d32c2]"
          type="number"
          placeHolder="Шинэ нууц үг"
        />
      </Form.Item>
      <Form.Item>
        <Input
          className="sm:w-72 w-64 py-2 rounded-xl px-3 ring-1 placeholder:text-slate-500 ring-[#9d32c2]"
          type="number"
          placeHolder="Шинэ нууц үг давтан оруулах"
        />
      </Form.Item>
      <Button className="sm:w-72 w-64 h-10 rounded-xl pl-2 font-light bg-gradient-to-r from-[#9d32c2] to-[#e97a34] text-white border-none">
        Солих
      </Button>
      <Link
        href="#"
        className="text-transparent bg-clip-text bg-gradient-to-r from-[#9d32c2] to-[#e97a34] text-sm"
      >
        Нэвртэх бол энд дарна уу?
      </Link>
    </Form>
  );
};
