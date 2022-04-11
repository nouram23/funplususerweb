import Merchant from "components/Menchart";
import Header from "components/Header";
import Footer from "components/Footer";
import React from "react";
import { Layout, Menu } from "antd";

import Item from "./item";

const { Content, Sider } = Layout;
const { SubMenu } = Menu;
const rootSubmenuKeys = ["sub1"];

export default function Service() {
  const [openKeys, setOpenKeys] = React.useState(["sub1"]);

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  return (
    <>
      <Header />
      <div className="">
        {" "}
        <div className="md:mt-24 mt-20 bg-[#1a1a1a] ">
          <div className="max-w-screen-2xl  mx-auto ">
            <Layout>
              <Sider
                breakpoint="lg"
                collapsedWidth="0"
                style={{ width: 256 }}
                onBreakpoint={(broken) => {
                  console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                  console.log(collapsed, type);
                }}
              >
                <div className="" />
                <Menu
                  mode="inline"
                  openKeys={openKeys}
                  onOpenChange={onOpenChange}
                  style={{ width: 256 }}
                  defaultSelectedKeys={["16"]}
                >
                  <SubMenu key="sub1" title="Үйлчилгээний Байгууллагууд">
                    <Menu.Item key="1">Barber</Menu.Item>
                    <Menu.Item key="2">Basketball</Menu.Item>
                    <Menu.Item key="3">Beauty</Menu.Item>
                    <Menu.Item key="4">Billiard</Menu.Item>
                    <Menu.Item key="5">Bowling</Menu.Item>
                    <Menu.Item key="6">Coach</Menu.Item>
                    <Menu.Item key="7">Extreme</Menu.Item>
                    <Menu.Item key="8">Kareoke</Menu.Item>
                    <Menu.Item key="9">Manicure</Menu.Item>
                    <Menu.Item key="10">Maze</Menu.Item>
                    <Menu.Item key="11">Paintball</Menu.Item>
                    <Menu.Item key="12">Photography</Menu.Item>
                    <Menu.Item key="13">PingPong</Menu.Item>
                    <Menu.Item key="14">Restaurent</Menu.Item>
                    <Menu.Item key="15">Swimming Pool</Menu.Item>
                  </SubMenu>
                </Menu>
              </Sider>
              <Layout>
                <Content>
                  <div className="site-layout-background min-h-full bg-[#1a1a1a] ">
                    <div className="flex justify-center flex-wrap mx-auto pt-20">
                      <Item
                        item={{
                          icon: "assets/images/billiard-photo/1.png",
                          name: "Monjoy Billiard Club",
                        }}
                      />
                      <Item
                        item={{
                          icon: "assets/images/billard-photo/2.png",
                          name: "Monjoy Billiard Club",
                        }}
                      />
                      <Item
                        item={{
                          icon: "assets/images/billard-photo/2.png",
                          name: "Monjoy Billiard Club",
                        }}
                      />
                      <Item
                        item={{
                          icon: "assets/images/billard-photo/2.png",
                          name: "Monjoy Billiard Club",
                        }}
                      />
                      <Item
                        item={{
                          icon: "assets/images/billard-photo/2.png",
                          name: "Monjoy Billiard Club",
                        }}
                      />
                      <Item
                        item={{
                          icon: "assets/images/billard-photo/2.png",
                          name: "Monjoy Billiard Club",
                        }}
                      />
                      <Item
                        item={{
                          icon: "assets/images/billard-photo/2.png",
                          name: "Monjoy Billiard Club",
                        }}
                      />
                      <Item
                        item={{
                          icon: "assets/images/billard-photo/2.png",
                          name: "Monjoy Billiard Club",
                        }}
                      />
                      <Item
                        item={{
                          icon: "assets/images/billard-photo/2.png",
                          name: "Monjoy Billiard Club",
                        }}
                      />
                    </div>
                  </div>
                </Content>
              </Layout>
            </Layout>
          </div>
        </div>
      </div>
      <Merchant />
      <Footer />
    </>
  );
}
