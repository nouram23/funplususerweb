import React from "react";
import { Modal, Button, Form, Input, Checkbox } from "antd";
import Link from "next/link";
import OtpInput from "react-otp-input";

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
  const onFinish = async (e) => {
    setPhone(e.phone);
  };

  return (
    <div className="w-full h-full lg:grid grid-cols-10 ">
      <div className="col-span-6  h-screen bg-gray-500 hidden lg:block">
        <img
          alt="bg"
          className="w-full bg-cover object-center h-screen"
          src="/assets/images/banner/2-1-570x500.jpg"
        />
      </div>
      <div className="col-span-4  h-screen flex justify-center items-center">
        <div className="w-96 h-[500px] flex flex-col  items-center rounded-lg">
          <Form
            onFinish={onFinish}
            className=" sm:space-y-4 space-y-2  flex flex-col items-center"
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
            <div className="flex justify-start w-full py-2">
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#9d32c2] to-[#e97a34] text-4xl flex text-left">
                Бүртгүүлэх
              </p>
            </div>
            <Form.Item name="name" label="Нэр">
              <Input
                required
                className="sm:w-80 w-64 py-2 rounded-xl px-3 ring-1  ring-[#9d32c2]"
                type="text"
                placeHolder="BAT "
              />
            </Form.Item>
            <Form.Item name="phone" label="Утасны дугаар">
              <Input
                required
                className="sm:w-80 w-64 py-2 rounded-xl px-3 ring-1  ring-[#9d32c2]"
                type="number"
                placeHolder="99999999"
              />
            </Form.Item>
            <Form.Item name="password" label="Нууц үг">
              <Input.Password
                required
                className="sm:w-80 w-64 py-2 rounded-xl px-3 ring-1   ring-[#9d32c2]"
                placeholder="*****"
              />
            </Form.Item>

            <Button
              onClick={showModal}
              htmlType="submit"
              className="sm:w-80 w-64 h-10 rounded-xl pl-2  bg-gradient "
            >
              Бүртгүүлэх
            </Button>
            <Link href="/auth/login">
              <a className="text-transparent bg-clip-text bg-gradient text-sm">
                {" "}
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
                  className="w-full rounded-lg bg-gradient h-10"
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
                    <p className="text-sm font-bold flex justify-center my-3">
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
                      value={phone}
                      type="number"
                      placeholder={phone}
                      addonBefore={"+976"}
                    />
                    <div className="flex flex-col space-y-4 mt-3">
                      <p className="text-sm ">
                        Үйлчилгээний нөхцөлтэй танилцаж, зөвшөөрснөөр
                        үйлчилгээтэй холбоотой харилцаанд оролцох эрх, үүрэг,
                        хариуцлагыг хүлээхээр талууд тохиролцсонд тооцогдоно
                      </p>
                      <Checkbox onChange={onChange}>Зөвшөөрч байна</Checkbox>
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
