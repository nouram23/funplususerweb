import Layout from "components/Layout";
import React from "react";
import { Button, Card, Form, Input, Modal, Upload, message } from "antd";
import { FileAddOutlined } from "@ant-design/icons";
const { Dragger } = Upload;

export default function JobApplication() {
  const [jobs, setJobs] = React.useState([]);

  React.useEffect(async () => {
    const result = await fetch("/api/jobApplication");
    const data = await result.json();

    setJobs(data);
  }, []);

  const props = {
    name: "file",
    multiple: true,
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  const [isModalVisible, setIsModalVisible] = React.useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const onFinish = async (values) => {
    console.log(JSON.stringify({ values }));
    const response = await fetch("/api/applicantInfo", {
      method: "POST",
      body: JSON.stringify({ values }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);
    setIsModalVisible(false);
  };
  return (
    <>
      <Layout>
        <div className="md:mt-24 mt-14 bg-[#1a1a1a] font-Roboto ">
          <div className=" max-w-7xl mx-auto flex flex-col min-h-screen md:py-56 sm:py-40 py-10">
            <div className="flex flex-col items-center  md:space-y-12 space-y-8 text-center">
              {" "}
              <h1 className="md:text-6xl text-3xl ">Нээлттэй ажлын байрууд</h1>
            </div>
            <div className=" border border-white/10  lg:p-20 ss:p-10 p-4 mx-auto rounded-2xl text-center  mt-28 space-y-8 ">
              {jobs.map((el, i) => (
                <Card
                  key={i}
                  onClick={showModal}
                  className="rounded-xl cursor-pointer"
                >
                  <h1>{el.name}</h1>
                </Card>
              ))}
              {/* <Card onClick={showModal} className="rounded-xl">
                <h1>Designer</h1>
              </Card>
              <Card onClick={showModal} className="rounded-xl">
                <h1>Designer</h1>
              </Card>
              <Card onClick={showModal} className="rounded-xl">
                <h1>Designer</h1>
              </Card> */}
            </div>
          </div>
        </div>
        <div className="">
          {" "}
          <Modal
            className=""
            title="Анкет илгээх"
            width={400}
            visible={isModalVisible}
            style={{ top: "30%" }}
            onCancel={handleCancel}
            footer={null}
          >
            <Form
              className="flex flex-col items-center"
              onFinish={onFinish}
              action=""
              layout="vertical"
            >
              <Form.Item label="Таны нэр" name={"name"}>
                <Input
                  className="sm:w-80 w-64 py-2 rounded-xl px-3   "
                  type="text"
                  placeHolder="Таны нэр"
                />
              </Form.Item>
              <Form.Item label="Утасны дугаар" name={"phone"}>
                <Input
                  className="sm:w-80 w-64 py-2 rounded-xl px-3   "
                  type="number"
                  placeHolder="Утасны дугаар"
                />
              </Form.Item>
              <Form.Item label="Имэйл хаяг" name={"email"}>
                <Input
                  className="sm:w-80 w-64 py-2 rounded-xl px-3   "
                  type="email"
                  placeHolder="Имэйл хаяг"
                />
              </Form.Item>
              <Form.Item>
                <Dragger {...props}>
                  <p className="ant-upload-drag-icon">
                    <FileAddOutlined />
                  </p>
                  <p className="ant-upload-text">CV-гээ оруулна уу!</p>
                  <p className="ant-upload-hint">
                    Файлын хэмжээ 10MB-аас хэтрэхгүй PDF, DOC, DOCX өргөтгөлтэй
                    байна.
                  </p>
                </Dragger>
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  size="large"
                  className="w-full rounded-lg bg-gradient h-10 "
                >
                  Илгээх
                </Button>
              </Form.Item>
            </Form>
          </Modal>
        </div>
      </Layout>
    </>
  );
}
