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
        <div className="w-80 ">
          <Form className="w-full  ss:px-0 px-3" action="" layout="vertical">
            <Link href="/">
              <a>
                <img
                  className="ss:h-20 h-16"
                  alt="logo"
                  src="/assets/images/logo/logo.svg"
                />
              </a>
            </Link>

            <div className=" flex justify-start w-full py-2">
              <p className="text-gradient ss:text-4xl text-3xl flex text-left">
                Нэвтрэх
              </p>
            </div>
            <Form.Item className="text-[#9d32c2]">
              <div>
                <label className="block">Утасны дугаар</label>
                <Input
                  className="w-full   px-3    "
                  type="number"
                  placeHolder="99119911"
                />
              </div>
            </Form.Item>
            <Form.Item className="text-[#9d32c2]">
              <div>
                <label className="block">Нууц үг</label>
                <Input.Password
                  className=" px-3   "
                  type="password"
                  placeholder="*****"
                />
              </div>
            </Form.Item>
            <div className="flex justify-end  py-1">
              <Link href="/auth/passwordForget">
                <a>
                  <p className="text-[#9d32c2]">Нууц үгээ мартсан уу?</p>
                </a>
              </Link>
            </div>
            <Link href={"/"}>
              <Button
                type="primary"
                className="hover:text-white w-full mb-1 font-light hover:from-[#e97a34] hover:to-[#9d32c2] bg-gradient-to-r from-[#9d32c2] to-[#e97a34] text-white border-none"
              >
                Нэвртэх
              </Button>
            </Link>
            <Link href="/auth/register">
              <a className="text-[#9d32c2]  text-sm"> Бүртгүүлэх</a>
            </Link>
          </Form>
        </div>
      </div>
    </div>
  );
}
