import LoggedInHeader from "components/LoggedInHeader";
import Merchant from "components/Merchant";
import Footer from "components/Footer";
import Link from "next/link";
import { Table } from "antd";

export default function Profile() {
  const dataSource = [
    {
      key: "1",
      name: "Бат",
      orderName: "Теннис",
      orderNum: 1,
      date: "2022-04-20",
    },
    {
      key: "2",
      name: "Болд",
      orderName: "Гольф",
      orderNum: 2,
      date: "2022-04-20",
    },
  ];

  const columns = [
    {
      title: "Захиалгын дугаар",
      dataIndex: "orderNum",
      key: "orderNum",
    },
    {
      title: "Захиалагийн нэр",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Захиалгын нэр",
      dataIndex: "orderName",
      key: "orderName",
    },
    {
      title: "Огноо",
      dataIndex: "date",
      key: "date",
    },
  ];
  return (
    <div>
      <LoggedInHeader />
      <div className="bg-[#1a1a1a] h-screen mt-24 pt-16">
        <div className="rounded-lg  max-w-screen-lg mx-auto bg-[#212121] py-12 ">
          <div className="flex justify-between mb-7 pl-28 pr-20">
            <h1 className=" font-bold text-xl">Миний мэдээлэл</h1>
            <Link href={"/profile/update"}>
              <i className="fa-solid fa-pen-to-square cursor-pointer text-2xl hover:text-pink-500"></i>
            </Link>
          </div>
          <div className="flex items-center justify-evenly">
            <i className="fa-solid fa-user-large  text-5xl"></i>
            <div className="grid grid-cols-3 gap-3">
              <div className="col-span-1">
                <p className="text-[#a2a2a2]">Нэр</p>
                <p className="font-bold">Erdene-Uul</p>
              </div>
              <div>
                <p className="text-[#a2a2a2]">Дугаар</p>
                <p className="font-bold">1223</p>
              </div>
              <div>
                <p className="text-[#a2a2a2]">Мэйл</p>
                <p className="font-bold">example@gmail.com</p>
              </div>
              <div>
                <p className="text-[#a2a2a2]">Хаяг</p>
                <p className="font-bold">Mongolia</p>
              </div>
              <div>
                <p className="text-[#a2a2a2]">Дансны дугаар</p>
                <p className="font-bold">23231232</p>
              </div>
              <div>
                <p className="text-[#a2a2a2]">Регистер</p>
                <p className="font-bold">3456789</p>
              </div>
            </div>
            <Link href="/auth/passwordForget">
              <p className="text-pink-500 text-sm ml-4 cursor-pointer ">
                Нууц үг солих
              </p>
            </Link>
          </div>
        </div>
        <div className="rounded-lg mt-7  max-w-screen-lg mx-auto  py-12 ">
          <h1 className="font-bold text-xl text-center mb-4">
            Захиалгын мэдээлэл
          </h1>

          <Table pagination={false} dataSource={dataSource} columns={columns} />
        </div>
      </div>
      <Merchant />
      <Footer />
    </div>
  );
}
