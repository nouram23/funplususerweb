import { Menu } from "antd";
import React from "react";

const SubMenu = Menu.SubMenu;
export default function TableMenu({ action }) {
  return (
    <div>
      <Menu selectable={true} selectedKeys style={{ width: 200 }} mode="inline">
        <SubMenu key={action?.subKey} title={action?.title}>
          <Menu.Item onClick={action?.menuClick} key={0}>
            {action?.tables.table1}
          </Menu.Item>
          <Menu.Item onClick={action?.menuClick} key={1}>
            {action?.tables.table2}
          </Menu.Item>
          <Menu.Item onClick={action?.menuClick} key={2}>
            {action?.tables.table3}
          </Menu.Item>
        </SubMenu>
      </Menu>
    </div>
  );
}
