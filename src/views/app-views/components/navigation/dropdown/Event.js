import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu, message, Space } from 'antd';
import React from 'react';
const onClick = ({ key }) => {
  message.info(`Click on item ${key}`);
};
const menu = (
  <Menu
    onClick={onClick}
    items={[
      {
        label: '1st menu item',
        key: '1',
      },
      {
        label: '2nd menu item',
        key: '2',
      },
      {
        label: '3rd menu item',
        key: '3',
      },
    ]}
  />
);
const Event = () => (
  <Dropdown overlay={menu}>
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        Hover me, Click menu item
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
);
export default Event;
