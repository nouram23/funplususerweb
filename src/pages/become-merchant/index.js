import { Button, Form, Input, Select } from "antd";
import Header from "components/Header";
import Footer from "components/Footer";
import { useRouter } from "next/router";
const { TextArea } = Input;

const { Option } = Select;

export default function BecomeMerchant() {
  const router = useRouter();
  const onFinish = async (values) => {
    const response = await fetch(`/api/v1/public/merchant_request`, {
      method: "POST",
      body: JSON.stringify({ values }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    alert("Таны мэдээллийг хүлээж авлаа!");
    router.push("/");
  };

  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  return (
    <>
      <Header />
      <div className="md:mt-24 mt-14 bg-[#1a1a1a] font-Roboto ">
        <div className=" max-w-7xl mx-auto flex flex-col min-h-screen md:py-56 sm:py-40 py-10">
          <div className="flex flex-col items-center  md:space-y-12 space-y-8 text-center">
            {" "}
            <h1 className="md:text-5xl text-3xl ">Funplus</h1>
            <p
              className="md:text-xl sm:text-lg text-base
               max-w-4xl px-10 md:leading-9 leading-8"
            >
              Технологийн эрин зуунд Funplus-ын тусламжтайгаар хэрэглэгчдэд амар
              хялбар, цаг хэмнэсэн, хэдийд ч, хаанаас ч, нэг дороос хүссэн
              үйлчилгээнийхээ цагийг цахимаар захиалах боломжтой.
            </p>
          </div>
          <div className=" max-w-screen-2xl flex flex-col lg:px-20  md:mt-80 ss:mt-20 mt-10">
            <div className=" border w-full max-w-md  border-white/10  lg:p-20 ss:p-10 p-4 mx-auto rounded-2xl ">
              <Form onFinish={onFinish} layout="vertical">
                <h1 className="text-center font-medium ss:text-2xl text-xl mb-8">
                  Байгууллагын мэдээлэл
                </h1>
                <Form.Item label="Байгууллагын нэр" name={"companyName"}>
                  <Input
                    className=" py-2 px-3   "
                    type="text"
                    placeHolder="Байгууллагын нэр"
                  />
                </Form.Item>
                {/* <Form.Item label="Байгууллагын регистрийн дугаар">
                  <Input
                    className="sm:w-80 w-64 py-2 rounded-xl px-3   "
                    type="text"
                    placeHolder="Байгууллагын регистрийн дугаар"
                  />
                </Form.Item> */}
                <Form.Item
                  className=" "
                  name="serviceTypes"
                  label="Үйл ажиллагааны чиглэл"
                >
                  <Select
                    size={"large"}
                    onChange={handleChange}
                    mode="multiple"
                  >
                    <Option value="Гоо сайхан">Гоо сайхан</Option>
                    <Option value="Спорт">Спорт</Option>
                    <Option value="Боловсрол">Боловсрол</Option>
                    <Option value="Энтертаймент">Энтертаймент</Option>
                  </Select>
                </Form.Item>
                <h1 className="text-center font-medium ss:text-2xl text-xl mb-8">
                  Холбогдох ажилтан
                </h1>
                <Form.Item label="Ажилтны нэр" name={"workerName"}>
                  <Input
                    className=" py-2  px-3   "
                    type="text"
                    placeHolder="Ажилтаны нэр"
                  />
                </Form.Item>
                <Form.Item label="Утасны дугаар" name={"phone"}>
                  <Input
                    className=" py-2  px-3   "
                    type="number"
                    placeHolder="Утасны дугаар"
                  />
                </Form.Item>
                <Form.Item label="Имэйл хаяг" name={"email"}>
                  <Input
                    className=" py-2  px-3   "
                    type="email"
                    placeHolder="Имэйл хаяг"
                  />
                </Form.Item>

                <Form.Item>
                  <Button
                    htmlType="submit"
                    className="w-full h-10 pl-2 font-light bg-gradient "
                  >
                    Илгээх
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
