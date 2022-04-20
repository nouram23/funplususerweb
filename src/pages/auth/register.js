/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Modal, Button, Checkbox, } from "antd";
import Link from "next/link";
import OtpInput from "react-otp-input";
import * as yup from "yup";
import { Form, Input, InputNumber } from "formik-antd"
import { Formik } from "formik"
import { mn_mobile_regex } from "utils";
import { AuthAPI } from "apis";

export default function AuthRegister() {
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [otp, setOtp] = React.useState();
  const [checked, setChecked] = React.useState(false);
  const [phone, setPhone] = React.useState();
  const [state, setState] = React.useState(false);
  const showModal = (e) => {
    setIsModalVisible(true);
  };
  const handleChange = (otp) => setOtp(otp);

  const handleSignUp = () => {
    setState(!state);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  function onChange(e) {
    setChecked(e.target.checked);
  }
  const onFinish = async (e) => {
    setPhone(e.phone);
  };

  return (
    <div className="w-full h-full lg:grid grid-cols-10 ">
      <div className="col-span-6  h-screen  hidden lg:block">
        <img
          alt="bg"
          className="w-full bg-cover object-center h-screen"
          src="/assets/images/banner/2-1-570x500.jpg"
        />
      </div>
      <div className="col-span-4  h-screen flex justify-center items-center">
        <div className="w-80  ">
          <div className="">
            <SubmitForm />
            {" "}

          </div>
        </div>
      </div>
    </div>
  );
}

const schema = yup.object({
  phone: yup.string().required("Заавал бөглөнө үү").matches(mn_mobile_regex, "Та утасны дугаараа зөв хийнэ үү"),
  password: yup.string().required("Заавал бөглөнө үү").min(8, "Хамгийн багадаа 8-ын урт хийнэ үү"),
  name: yup.string().required("Заавал бөглөнө үү")
})

export const SubmitForm = ({ onSubmit: _onSubmit, values: _values }) => {

  const [viewModal, setViewModal] = React.useState(false)
  const [viewOtp, setViewOtp] = React.useState(false)
  const [values, setValues] = React.useState({
    ...{ phone: "", name: "", password: "" },
    ..._values
  })

  const onSubmit = async (values, formik) => {

    try {

      setValues({
        ...values
      });

      setViewModal(true);
      setViewOtp(true);

    } catch (err) {
      console.log(err)
    }

  }

  React.useEffect(() => {
    setValues({
      ...values,
      ..._values
    })
  }, [_values])



  return (
    <>
      <Modal
        className=""
        title="Бүртгүүлэх"
        width={500}
        visible={viewModal}
        style={{ top: "30%" }}
        onCancel={() => { }}
      // footer={[
      //   <Button
      //     type="primary"
      //     key="sign up"
      //     className="w-full  bg-gradient h-10"
      //     onClick={handleSignUp}
      //     disabled={!checked}
      //   >
      //     Илгээх
      //   </Button>,
      // ]}
      >
        <div className="space-y-4 flex- flex-col justify-center items-center">
          {viewOtp ? (
            <div>
              <p className="xs:text-sm text-xs font-bold flex justify-center my-3">
                Таны дугаарт илгээсэн 4 оронтой тоог оруулна уу!
              </p>
              <OtpInput
                containerStyle={{
                  display: "flex",
                  justifyContent: "center",
                  color: "black",
                }}
                inputStyle={{
                  width: 40,
                  height: 40,
                  borderRadius: "10px",
                  border: "none",
                }}
                value={otp}
                onChange={handleChange}
                numInputs={4}
                separator={<span>-</span>}
              />
              <div className="flex justify-center mt-3">
                <Button type="link">Дахин илгээх</Button>
              </div>
            </div>
          ) : (
            <div>
              <Input
                // defaultValue={phone}
                // placeholder={phone}
                type="number"
                addonBefore={"+976"}
              />
              <div className="flex justify-between  mt-3">
                <Checkbox
                  className="xs:text-sm text-xs"
                // onChange={onChange}
                >
                  Би зөвшөөрч байна
                </Checkbox>
                <Link href="/serviceCondition">
                  <a
                    className="xs:text-sm text-xs text-[#9d32c2]"
                    target="_blank"
                    type="link"
                  >
                    Үйлчилгээний нөхцөл харах
                  </a>
                </Link>
              </div>
            </div>
          )}
        </div>
      </Modal>
      <Formik onSubmit={onSubmit} validationSchema={schema} initialValues={values} enableReinitialize>
        {
          ({ isSubmitt }) => {

            return (
              <Form
                // onFinish={onFinish}
                className="w-full  ss:px-0 px-4"
                layout="vertical"
              >
                <Link href="/">
                  <a>
                    <img
                      className="ss:h-20 h-14"
                      alt="logo"
                      src="/assets/images/logo/logo.svg"
                    />
                  </a>
                </Link>
                <div className="flex justify-start w-full py-2">
                  <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#9d32c2] to-[#e97a34] ss:text-4xl text-3xl  ">
                    Бүртгүүлэх
                  </p>
                </div>
                <Form.Item name="name" label="Нэр">
                  {/* <label className="block text-[#9d32c2]">Нэр</label> */}
                  <Input
                    className=" py-2 px-3   "
                    type="text"
                    placeHolder="Johnny Depp"
                    name="name"
                  />
                </Form.Item>
                <Form.Item name="phone" label="Утасны дугаар">
                  <div>
                    {/* <label className="block text-[#9d32c2]">Утасны дугаар</label> */}
                    <InputNumber
                      name="phone"
                      size="large"
                      placeHolder="00000000"
                      allowClear
                      defaultValue={" "}
                      className="w-full"
                    />
                  </div>
                </Form.Item>
                <Form.Item name="password" label="Нууц үг">
                  <div>
                    {/* <label className="block text-[#9d32c2]">Нууц үг</label> */}
                    <Input.Password
                      required
                      className=" py-2    px-3 "
                      placeholder="*****"
                      name="password"
                    />
                  </div>
                </Form.Item>

                <Button
                  // onClick={showModal}
                  htmlType="submit"
                  className="w-full pl-2 h-10  bg-gradient mb-1"
                >
                  Бүртгүүлэх
                </Button>
                <Link href="/auth/login">
                  <a className="text-[#9d32c2]">Нэвртэх бол энд дарна уу?</a>
                </Link>
              </Form>
            )
          }
        }
      </Formik>
    </>

  )
}
