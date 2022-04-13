import { Menu, Select } from "antd";
import React from "react";
const { Option } = Select;

const SubMenu = Menu.SubMenu;
export default function TableMenu({ action }) {
  return (
    <div>
      <Menu className="w-[281px] " selectable={true} selectedKeys mode="inline">
        <SubMenu title={action?.title}>
          <Select
            onChange={action?.optionClick}
            style={{ width: 140 }}
            defaultValue="Энгийн өрөө"
          >
            <Option value={0}>Ширээ 1</Option>
            <Option value={1}>Ширээ 2</Option>
            <Option value={2}>Ширээ 3</Option>
            <Option value={-1}>Болих</Option>
          </Select>
          <Select
            onChange={action?.optionClickVip}
            style={{ width: 140 }}
            defaultValue="VIP өрөө"
          >
            <Option value={0}>VIP Ширээ 1</Option>
            <Option value={1}>VIP Ширээ 2</Option>
            <Option value={2}>VIP Ширээ 3</Option>
            <Option value={-1}>Болих</Option>
          </Select>
        </SubMenu>
      </Menu>
    </div>
  );
}
