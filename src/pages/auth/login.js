/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Button, Divider, message } from "antd";
import Link from "next/link";
import * as yup from "yup";
import { mn_mobile_regex } from "utils";
import { Formik } from "formik";
import { Form, Input, InputNumber, } from "formik-antd"
import { useRouter } from "next/router";
import { AuthAPI } from "apis";
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
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

const schema = yup.object({
  username: yup.string().required("Заавал бөглөнө үү").matches(mn_mobile_regex, "Та утасны дугаараа зөв хийнэ үү"),
  password: yup.string().required("Заавал бөглөнө үү")
})

const LoginForm = () => {

  const router = useRouter();

  const onSubmit = async (values) => {

    try {

      await AuthAPI.login(values)
      router.push("/")
    } catch (err) {
      console.log(err);
      message.error(err?.message)
      return;
    }
  }

  return (
    <Formik
      validationSchema={schema}
      onSubmit={onSubmit}
      initialValues={{
        username: "",
        password: "",
      }}
    >
      {
        ({ isSubmitting }) => (
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
            <Form.Item className="text-[#9d32c2]" name="username">
              <div>
                <label className="block">Утасны дугаар</label>
                <InputNumber
                  name="username"
                  size="large"
                  type="number"
                  placeHolder="00000000"
                  allowClear
                  defaultValue={" "}
                  className="w-full"
                />
              </div>
            </Form.Item>
            <Form.Item className="text-[#9d32c2]" name="password">
              <div>
                <label className="block">Нууц үг</label>
                <Input.Password
                  name="password"
                  allowClear
                  type="password"
                  placeholder="*****"
                  size="large"
                />
              </div>
            </Form.Item>
            <div className="flex justify-end  py-2">
              <Link href="/auth/passwordForget">
                <p >Нууц үгээ мартсан уу?</p>
              </Link>
            </div>

            <Button
              type="primary"
              loading={isSubmitting}
              htmlType="submit"
              size="large"
              className="hover:text-white w-full mb-1 font-light hover:from-[#e97a34] hover:to-[#9d32c2] bg-gradient-to-r from-[#9d32c2] to-[#e97a34] text-white border-none"
            >
              Нэвтрэх
            </Button>

            <Divider />
            <Button type="link" block href="/auth/register">
              Бүртгүүлэх
            </Button>
            {/* <Link href="/auth/register">
            <a className="text-gradient  text-sm"> Бүртгүүлэх</a>
          </Link> */}
          </Form>
        )
      }
    </Formik>
  )
}