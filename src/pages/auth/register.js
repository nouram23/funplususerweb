/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Modal, Button, Checkbox, message, Spin } from "antd";
import Link from "next/link";
import OtpInput from "react-otp-input";
import * as yup from "yup";
import { Form, Input, InputNumber } from "antd";
import { mn_mobile_regex } from "utils";
import { AuthAPI } from "apis";
import { useRouter } from "next/router";

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
            <SubmitForm />{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

const schema = yup.object({
  phone: yup
    .string()
    .required("Заавал бөглөнө үү")
    .matches(mn_mobile_regex, "Та утасны дугаараа зөв хийнэ үү"),
  password: yup
    .string()
    .required("Заавал бөглөнө үү")
    .min(8, "Хамгийн багадаа 8-ын урт хийнэ үү"),
  name: yup.string().required("Заавал бөглөнө үү"),
});

export const SubmitForm = ({ onSubmit: _onSubmit, values: _values }) => {
  const router = useRouter();

  const [checkServiceTerms, setCheckServiceTerms] = React.useState(false);

  const [viewModal, setViewModal] = React.useState(false);
  const [viewOtp, setViewOtp] = React.useState(false);
  const [otpValue, setOtpValue] = React.useState(false);
  const [loadingModal, setLoadingModal] = React.useState(false);
  const [values, setValues] = React.useState({
    ...{ phone: "", name: "", password: "" },
    ..._values,
  });

  const onSub = () => {
    setViewModal(true);
    setViewOtp(false);
  };

  const onSubmit = async (values) => {
    try {
      /**

       */

      setValues({
        ...values,
      });

      onSub();
    } catch (err) {
      console.log(err);
    }
  };

  React.useEffect(() => {
    setValues({
      ...values,
      ..._values,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [_values]);

  const onNext = () => {
    if (!viewOtp) {
      (async () => {
        setLoadingModal(true);

        try {
          await AuthAPI.signup(values);
        } catch (err) {
          console.log(err);
          message.error(err?.message);
          setViewOtp(false);
        }

        setLoadingModal(false);
      })();
      setViewOtp(true);
      return;
    } else {
      if ((otpValue + "").length !== 4) {
        message.error("OTP кодоо 4 тоо хийнэ үү");
        return;
      }

      (async () => {
        setLoadingModal(true);
        try {
          await AuthAPI.check_otp({
            phone: values?.phone,
            activate_code: otpValue,
          });
          setLoadingModal(true);
          message.success(
            "Таны мэдээлэлийг амжилттай бүртгэгдлээ таньд баярлалаа"
          );
          setTimeout(() => {
            router.push("/auth/login");
          }, 700);
        } catch (err) {
          console.log(err);
          message.error(err?.message);
        }
        setLoadingModal(false);
      })();
      return;
    }
  };

  const re_again_otp = () => {
    (async () => {
      setLoadingModal(true);
      try {
        await AuthAPI.re_again_otp({
          phone: values?.phone,
        });
      } catch (err) {
        console.log(err);
        message.error(err?.message);
      }
      setLoadingModal(false);
    })();
  };

  return (
    <React.Fragment>
      {<RegisterForm onSubmit={onSubmit} values={values} />}
      <Modal
        className=""
        title="Бүртгүүлэх"
        width={500}
        visible={viewModal}
        style={{ top: "30%" }}
        closable={false}
        onCancel={() => setViewModal(false)}
        onOk={() => setViewOtp(false)}
        maskClosable={false}
        footer={null}
      >
        <Spin spinning={loadingModal}>
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
                  className="my-otp"
                  value={otpValue}
                  onChange={(e) => setOtpValue(e)}
                  numInputs={4}
                  separator={<span>-</span>}
                />
                <div className="flex justify-center mt-3">
                  <Button onClick={re_again_otp} type="link">
                    Дахин илгээх
                  </Button>
                </div>
              </div>
            ) : (
              <div>
                <Input
                  value={values?.phone}
                  // defaultValue={phone}
                  // placeholder={phone}
                  type="number"
                  addonBefore={"+976"}
                  readOnly
                />
                <div className="flex justify-between  mt-3">
                  <Checkbox
                    className="xs:text-sm text-xs"
                    checked={checkServiceTerms}
                    onChange={(e) => setCheckServiceTerms(e.target.checked)}
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
            <div className="py-4 w-full flex flex-row">
              <Button
                onClick={() => setViewModal(false)}
                className="flex-1 mr-2"
                size="large"
                disabled={viewOtp}
              >
                Болих
              </Button>
              <Button
                onClick={onNext}
                className="flex-1  ml-2 bg-gradient"
                size="large"
                disabled={!viewOtp && !checkServiceTerms}
              >
                Үргэлжлүүлэх
              </Button>
            </div>
          </div>
        </Spin>
      </Modal>
    </React.Fragment>
  );
};

const RegisterForm = ({ onSubmit: _onSubmit, values }) => {
  const onSubmit = (values) => {
    _onSubmit(values);
  };

  return (
    <Form
      // onFinish={onFinish}
      className="w-full  ss:px-0 px-4"
      layout="vertical"
      onFinish={onSubmit}
      initialValues={values}
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
      <Form.Item
        name="name"
        label="Нэр"
        rules={[{ required: "true", message: "Заавал бөглөнө үү " }]}
      >
        {/* <label className="block text-[#9d32c2]">Нэр</label> */}
        <Input
          className=" rounded-lg"
          type="text"
          size="large"
          placeHolder="Johnny Depp"
          name="name"
        />
      </Form.Item>
      <Form.Item
        name="phone"
        label="Утасны дугаар"
        rules={[
          {
            pattern: new RegExp(mn_mobile_regex),
            message: "Утасны дугаараа зөв хийнэ үү",
            min: 8,
            max: 8,
          },
        ]}
      >
        <div>
          {/* <label className="block text-[#9d32c2]">Утасны дугаар</label> */}
          <InputNumber
            name="phone"
            size="large"
            placeHolder="00000000"
            allowClear
            defaultValue={""}
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
        size="large"
        className="w-full pl-2  bg-gradient mb-1"
      >
        Бүртгүүлэх
      </Button>
      <Link href="/auth/login">
        <a className="text-[#9d32c2]">Нэвртэх бол энд дарна уу?</a>
      </Link>
    </Form>
  );
};
