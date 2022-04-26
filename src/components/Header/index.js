/* eslint-disable @next/next/no-img-element */
import ThemeSwitch from "components/ThemeSwitch";
import Link from "next/link";
import React, { useState } from "react";
import { Drawer, Button, Dropdown, Menu } from "antd";
import { logout } from "apis/auth";
import { useRouter } from "next/router";

export default function Header({ state }) {
  const router = useRouter();
  return (
    <div className="bg-[#242424] w-full md:h-24 h-14 fixed left-0 top-0 z-20 md:px-20 px-10">
      <div className="max-w-screen-xl h-full flex justify-between   items-center sm:text-lg text-sm mx-auto">
        <div className="focus:outline-none">
          <Link href="/">
            <a className="">
              <img
                className="md:h-14 ss:h-10 h-8"
                src="/assets/images/logo/logo.svg"
                alt="Header Logo"
              />
            </a>
          </Link>
        </div>

        <div className="md:flex hidden">
          <ul className=" flex flex-row items-center space-x-4 ">
            {!state?.isLoggedIn ? (
              <li>
                <Link className="hover:text-[#9d32c2]" href="/auth/login">
                  Нэвтрэх
                </Link>
              </li>
            ) : (
              <li>
                <Dropdown
                  overlay={
                    <Menu>
                      <Menu.Item>
                        <Link href="/profile">
                          <div>Миний мэдээлэл</div>
                        </Link>
                      </Menu.Item>

                      <Menu.Item>
                        <div
                          onClick={() => {
                            state?.setState(false);
                            console.log(state?.isLoggedIn);
                            logout().then(() => router.push("/auth/login"));
                          }}
                        >
                          <span className="mr-1">Гарах</span>
                          <i className="fa-solid fa-right-from-bracket"></i>
                        </div>
                      </Menu.Item>
                    </Menu>
                  }
                  trigger={["click"]}
                >
                  <i className="fa-solid fa-circle-user text-3xl"></i>
                </Dropdown>
              </li>
            )}
            <li className="">
              <Link href="/contact">
                <a>
                  <Button className="py-1 sm:px-4 px-2 rounded-full bg-gradient-to-r from-[#9d32c2] to-[#e97a34] hover:from-[#e97a34] hover:to-[#9d32c2]  ">
                    Холбоо барих
                  </Button>
                </a>
              </Link>
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
        className="md:hidden text-2xl fixed top-2 right-3 border-none text-[#9d32c2]"
        onClick={showDrawer}
      >
        <i className="fa-solid fa-bars"></i>
      </Button>
      <Drawer
        title=""
        placement="right"
        onClose={onClose}
        visible={visible}
        width={window && window.innerWidth > 1200 ? 800 : "auto"}
      >
        <div className="sm:hidden mt-4 flex justify-center  focus:outline-none">
          <Link href="/">
            <a className="">
              <img
                className="h-12"
                src="assets/images/logo/logo.svg"
                alt="Header Logo"
              />
            </a>
          </Link>
        </div>
        <div className="sm:hidden mx-auto border-b-2 w-4/5  h-4 border-[#9d32c2]"></div>
        <div className="flex  flex-col space-y-5  sm:mx-10 mx-6 sm:my-20 my-6 sm:text-lg text-sm">
          <ul className="flex-col space-y-7  ">
            <li>
              <a className="hover:text-[#9d32c2]" href="#">
                Таньд санал болгох
              </a>
            </li>
            <li>
              <Link href="/become-merchant">
                <a className="hover:text-[#9d32c2]">Хамтран ажилах</a>
              </Link>
            </li>
          </ul>

          <ul className=" flex items-baseline flex-row sm:space-x-4 space-x-2 ">
            <li>
              <Link className=" hover:text-[#9d32c2]" href="/auth/login">
                Нэвтрэх
              </Link>
            </li>
            <li className="">
              <Link href="/contact">
                <a>
                  <Button className="py-1 sm:px-4 px-2 rounded-full bg-gradient-to-r from-[#9d32c2] to-[#e97a34] hover:from-[#e97a34] hover:to-[#9d32c2]  ">
                    Холбоо барих
                  </Button>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </Drawer>
    </>
  );
};
