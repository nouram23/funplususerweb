/* eslint-disable @next/next/no-img-element */
import ThemeSwitch from "components/ThemeSwitch";
import Link from "next/link";
import React, { useState } from "react";
import { Drawer, Button } from "antd";

export default function Header() {
  return (
    <div className="bg-[#242424] w-full h-24  fixed left-0 top-0 z-20 ">
      <div className="max-w-screen-2xl h-full flex justify-evenly items-center sm:text-lg text-sm mx-auto">
        <ul className=" lg:flex space-x-5 hidden">
          <li>
            <a className="hover:text-[#9d32c2]" href="#">
              Таньд санал болгох
            </a>
          </li>
          <li>
            <a className="hover:text-[#9d32c2]" href="#">
              Хамтран ажилах
            </a>
          </li>
        </ul>

        <div className="focus:outline-none">
          <a href="#" className="">
            <img
              className="sm:h-14 h-8"
              src="/assets/images/logo/logo.svg"
              alt="Header Logo"
            />
          </a>
        </div>
        <div className="sm:flex hidden">
          <ul className=" flex flex-row items-baseline space-x-4 ">
            <li>
              <Link className="hover:text-[#9d32c2]" href="/profile">
                Миний мэдээлэл
              </Link>
            </li>
            <li className="">
              <a href="#">
                <button className="py-1 sm:px-4 px-2 rounded-full bg-gradient-to-r from-[#9d32c2] to-[#e97a34] hover:from-[#e97a34] hover:to-[#9d32c2]  ">
                  Гарах
                </button>
              </a>
            </li>
          </ul>
        </div>

        {/* <ThemeSwitch /> */}
      </div>
      <Sidebar />
    </div>
  );
}

const Sidebar = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <Button
        className="lg:hidden text-2xl fixed top-7 right-3 border-none text-[#9d32c2] hover:bg-gradient-to-r from-[#9d32c2] to-[#e97a34]"
        type="primary"
        onClick={showDrawer}
      >
        <i className="fa-solid fa-bars"></i>
      </Button>
      <Drawer title="" placement="right" onClose={onClose} visible={visible}>
        <div className="sm:hidden mt-4 flex justify-center  focus:outline-none">
          <a href="#" className="">
            <img
              className="h-12"
              src="assets/images/logo/logo.svg"
              alt="Header Logo"
            />
          </a>
        </div>
        <div className="sm:hidden mx-auto border-b-2 w-4/5  h-4 border-[#9d32c2]"></div>
        <div className="flex  flex-col space-y-5  sm:mx-10 mx-6 sm:my-20 my-6 sm:text-lg text-sm">
          <ul className="flex-col space-y-5  ">
            <li>
              <a className="hover:text-[#9d32c2]" href="#">
                Таньд санал болгох
              </a>
            </li>
            <li>
              <a className="hover:text-[#9d32c2]" href="#">
                Хамтран ажилах
              </a>
            </li>
          </ul>

          <ul className=" flex items-baseline flex-row sm:space-x-4 space-x-2 ">
            <li>
              <Link className="hover:text-[#9d32c2]" href="/profile">
                Миний мэдээлэл
              </Link>
            </li>
            <li className="">
              <a href="#">
                <button className="py-1 sm:px-4 px-2 rounded-full bg-gradient-to-r from-[#9d32c2] to-[#e97a34] hover:from-[#e97a34] hover:to-[#9d32c2]  ">
                  Гарах
                </button>
              </a>
            </li>
          </ul>
        </div>
      </Drawer>
    </>
  );
};
