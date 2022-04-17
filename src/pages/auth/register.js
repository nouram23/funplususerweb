import React from "react";
import { Modal, Button, Form, Input, Checkbox } from "antd";
import Link from "next/link";
import OtpInput from "react-otp-input";
import CheckableTag from "antd/lib/tag/CheckableTag";
import FormItemLabel from "antd/lib/form/FormItemLabel";

export default function AuthRegister() {
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [otp, setOtp] = React.useState("");
  const [checked, setChecked] = React.useState(false);
  const [phone, setPhone] = React.useState();
  const [state, setState] = React.useState(false);
  const regex = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i;
  const showModal = (e) => {
    setIsModalVisible(true);
  };
  const handleChange = (otp) => setOtp({ otp });

  const handleSignUp = () => {
    setState(!state);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  function onChange(e) {
    setChecked(e.target.checked);
  }
  const onFinish = (e) => {
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
          <Form
            onFinish={onFinish}
            className="w-full  ss:px-0 px-4"
            action=""
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
            <Form.Item name="name">
              <label className="block text-[#9d32c2]">Нэр</label>
              <Input
                required
                className=" py-2 px-3   "
                type="text"
                placeHolder="Johnny Depp"
              />
            </Form.Item>
            <Form.Item name="phone">
              <div>
                <label className="block text-[#9d32c2]">Утасны дугаар</label>
                <Input
                  required
                  className=" py-2    px-3   "
                  type="number"
                  placeHolder="99119911"
                />
              </div>
            </Form.Item>
            <Form.Item name="password">
              <div>
                <label className="block text-[#9d32c2]">Нууц үг</label>
                <Input.Password
                  required
                  className=" py-2    px-3 "
                  placeholder="*****"
                />
              </div>
            </Form.Item>

            <Button
              onClick={showModal}
              htmlType="submit"
              className="w-full pl-2  bg-gradient mb-1"
            >
              Бүртгүүлэх
            </Button>
            <Link href="/auth/login">
              <a className="text-transparent bg-clip-text bg-gradient text-sm ">
                Нэвртэх бол энд дарна уу?
              </a>
            </Link>
          </Form>
          <div className="">
            {" "}
            <Modal
              className=""
              title="Бүртгүүлэх"
              width={500}
              visible={isModalVisible}
              style={{ top: "30%" }}
              onCancel={handleCancel}
              footer={[
                <Button
                  type="primary"
                  key="sign up"
                  className="w-full  bg-gradient h-10"
                  onClick={handleSignUp}
                  disabled={!checked}
                >
                  Илгээх
                </Button>,
              ]}
            >
              <div className="space-y-4 flex- flex-col justify-center items-center">
                {state ? (
                  <div>
                    <p className="xs:text-sm text-xs font-bold flex justify-center my-3">
                      Таны дугаарт илгээсэн 4 оронтой тоог оруулна уу!
                    </p>
                    <OtpInput
                      containerStyle={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                      inputStyle={{ width: 30, height: 30 }}
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
                      defaultValue={phone}
                      placeholder={phone}
                      type="number"
                      addonBefore={"+976"}
                    />
                    <div className="flex justify-between  mt-3">
                      <Checkbox
                        className="xs:text-sm text-xs"
                        onChange={onChange}
                      >
                        Зөвшөөрч байна
                      </Checkbox>
                      <Link href="/serviceCondition">
                        <a
                          className="xs:text-sm text-xs text-[#9d32c2]"
                          target="_blank"
                          type="link"
                        >
                          Үйлчилгээний нөхцөл
                        </a>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}
