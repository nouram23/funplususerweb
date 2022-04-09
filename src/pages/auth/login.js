import React from "react";
import { Form, Input } from "antd";

export default function AuthLogin() {
  return (
    <div className="w-full h-full lg:grid grid-cols-10">
      <div className="col-span-6  h-screen bg-gray-500 hidden lg:block">
        <img
          alt="bg"
          className="w-full bg-cover object-cover h-screen"
          src="/assets/images/banner/2-1-570x500.jpg"
        />
      </div>
      <div className="col-span-4  h-screen bg-white flex justify-center mx-auto items-center">
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
                Нэвтрэх
              </p>
            </div>
            <Form.Item>
              <Input
                className="sm:w-80 w-64 py-2 rounded-xl px-3 ring-1 ring-[#9d32c2]"
                type="number"
                placeHolder="Утасны дугаар"
              />
            </Form.Item>
            <Form.Item>
              <Input
                className="sm:w-80 w-64 py-2 rounded-xl px-3 ring-1 ring-[#9d32c2]"
                type="password"
                placeholder="Нууц үг"
              />
            </Form.Item>
            <div className="flex justify-end w-full py-1">
              <a href="#">
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#9d32c2] to-[#e97a34]">
                  Нууц үгээ мартсан уу?
                </p>
              </a>
            </div>
            <button className="sm:w-80 w-64 py-2 rounded-xl pl-2 font-light bg-gradient-to-r from-[#9d32c2] to-[#e97a34] text-white border-none">
              Нэвртэх
            </button>
            <a
              href="#"
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#9d32c2] to-[#e97a34] text-sm"
            >
              Та бүртгүүлээгүй юу? Бүртгүүлэх
            </a>
          </Form>
        </div>
      </div>
    </div>
  );
}
