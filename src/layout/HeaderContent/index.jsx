import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Layout, Avatar, Menu, Dropdown } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { logout } from "@/redux/auth/actions";
import uniqueId from "@/utils/uinqueId";
import storePersist from "@/redux/storePersist";
const { Header } = Layout;

export default function HeaderContent() {
  const dispatch = useDispatch();
  const userInfo = storePersist.get("auth");
  const menu = (
    <Menu>
      <Menu.Item key={`${uniqueId()}`} onClick={() => dispatch(logout())}>
        Logout
      </Menu.Item>
      <Menu.Item key={`${uniqueId()}`}>
        <Link to={'/user/' + userInfo.current?.nhan_vien_id}>Trang cá nhân</Link>
      </Menu.Item>
    </Menu>
  );
  return (
    <Header
      style={{ zIndex: 1, width: '100%',padding: 0, minHeight: "40px", color: "rgba(255, 255, 255, 0.65)"}}
    >
      <Dropdown overlay={menu} placement="bottomRight" arrow>
        <Avatar icon={<UserOutlined />} />
      </Dropdown>
      <span style={{ float: 'right', paddingRight: '10px' }}>  Xin chào,  {userInfo ? userInfo.current.ten_nhan_vien : "Bạn"} </span>
    </Header>
  );
}
