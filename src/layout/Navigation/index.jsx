import React, { useState } from "react";

import { Link, useLocation } from "react-router-dom";
import { Layout, Menu } from "antd";
import {
  SettingOutlined,
  UserOutlined,
  CustomerServiceOutlined,
  FileTextOutlined,
  FileSyncOutlined,
  DashboardOutlined,
  TeamOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;
const { SubMenu } = Menu;
function Navigation() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const router = [
    {
      key: 1,
      path: '/'
    },
    {
      key: 2,
      path: '/users'
    },
    {
      key: 3,
      path: '/course'
    },
    {
      key: 4,
      path: '/posts'
    }
  ]
  const getSelectedKeys = () => {
    const itemS = router.find((item) => item.path == location.pathname);
    if (itemS) return itemS.key.toString();
    return "1";
  }
  getSelectedKeys()
  const onCollapse = () => {
    setCollapsed(!collapsed);
  };
  return (
    <>
      <Sider
        width={200} 
        collapsible
        collapsed={collapsed}
        onCollapse={onCollapse}
        style={{
          zIndex: 1000,
        }}
      >
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={[getSelectedKeys()]} mode="inline">
          <Menu.Item key="1" icon={<DashboardOutlined />}>
            <Link to="/" />
            Trang chủ
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />}>
            <Link to="/users">Thành viên</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<FileTextOutlined />}>
            <Link to="/course" />
            Khóa học
          </Menu.Item>
          <Menu.Item key="4" icon={<FileSyncOutlined />}>
            <Link to="/posts" />
            Bài viết
          </Menu.Item>
        </Menu>
      </Sider>
    </>
  );
}
export default Navigation;
