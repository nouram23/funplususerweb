import React from "react";
import { Button, Form, Input } from "antd";
import Link from "next/link";

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
      <div className="col-span-4  h-screen w-full  flex justify-center mx-auto items-center">
        <div className="w-96 h-[500px] flex flex-col  items-center rounded-lg">
          <Form
            className="text-black sm:space-y-4 space-y-2  flex flex-col items-center"
            action=""
            layout="vertical"
          >
            <Link href="/">
              <a>
                <img
                  className="h-20"
                  alt="logo"
                  src="/assets/images/logo/logo.svg"
                />
              </a>
            </Link>

            <div className=" flex justify-start w-full py-2">
              <p className="text-gradient text-4xl flex text-left">Нэвтрэх</p>
            </div>
            <Form.Item label="Утасны дугаар" className="text-[#9d32c2]">
              <Input
                className="sm:w-80 w-64 py-2 rounded-xl px-3 ring-1 ring-[#9d32c2] placeholder:text-slate-500"
                type="number"
                placeHolder="99999999"
              />
            </Form.Item>
            <Form.Item label="Нууц үг">
              <Input
                className="sm:w-80 w-64 py-2 rounded-xl px-3 ring-1 ring-[#9d32c2] placeholder:text-slate-500"
                type="password"
                placeholder="password"
              />
            </Form.Item>
            <div className="flex justify-end w-full py-1">
              <Link href="/auth/passwordForget">
                <a>
                  <p className="text-gradient">Нууц үгээ мартсан уу?</p>
                </a>
              </Link>
            </div>
            <Link href={"/"}>
              <Button
                type="primary"
                className="hover:text-white sm:w-80 w-64 h-10 rounded-xl pl-2 font-light hover:bg-gradient-to-l from-[#e97a34] to-[#9d32c2] bg-gradient-to-r from-[#9d32c2] to-[#e97a34] text-white border-none"
              >
                Нэвртэх
              </Button>
            </Link>
            <Link href="/auth/register">
              <a className="text-gradient  hover:bg-white text-sm">
                {" "}
                Бүртгүүлэх
              </a>
            </Link>
          </Form>
        </div>
      </div>
    </div>
  );
}
