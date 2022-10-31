import React from "react";
import { Avatar, Tag } from "antd";
import { IMG_BASE_URL } from "@/config/serverApiConfig";
import { UserOutlined } from "@ant-design/icons";
import CrudModule from "@/modules/CrudModule";
import UserForm from "@/forms/UserForm";
import { formatDatetime } from "@/utils/helpers";

function Users() {
  const entity = "users";
  const searchConfig = {
    displayLabels: ["company", "surname", "name"],
    searchFields: "company,surname,name",
    outputValue: "_id",
  };
  const getColor = (type) => {
    if(type) {
      switch(type) {
        case "Học sinh":  
          return "#2db7f5";
        case "Giáo viên": 
          return "#108ee9";
        case "Quản lý": 
          return "#f50";
        case "active": 
        case "Đang hoạt động":
          return "#87d068";
        case "inactive": 
        case "Bị khóa":
          return "red";          
      }
    }
  }
  const panelTitle = "Customer Panel";
  const dataTableTitle = "Thành viên";

  const readColumns = [];
  const dataTableColumns = [
    {
      title: "Ảnh đại diện",
      dataIndex: "anh_dai_dien",
      render: (anh_dai_dien) => {
        return (
          <Avatar
            style={{ float: "left" }}
            src={IMG_BASE_URL + anh_dai_dien}
            shape="square"
            size={60}
            icon={<UserOutlined />}
          />
        );
      },
    },
    {
      title: "E-mail",
      dataIndex: "email",
      sorter: {
        compare: (a, b) => a.email.localeCompare(b.email),
        multiple: 2,
      },
    },
    {
      title: "Nhóm tài khoản",
      dataIndex: "nhom_nhan_vien",
      render: (nhom_nhan_vien) => {
       return <Tag color={getColor(nhom_nhan_vien?.ten_nhom)}>{nhom_nhan_vien?.ten_nhom}</Tag>;
      },
      ellipsis: true,
    },
    {
      title: "Tên đăng nhập",
      dataIndex: "ten_tai_khoan",
      sorter: {
        compare: (a, b) => {
          return a.ten_tai_khoan.localeCompare(b.ten_tai_khoan);
        },
        multiple: 1,
      },
      ellipsis: true,
    },
    {
      title: "Họ và tên",
      dataIndex: "ten_nhan_vien",
      sorter: {
        compare: (a, b) => {
          return a.ten_nhan_vien.localeCompare(b.ten_nhan_vien);
        },
        multiple: 3,
      },
      ellipsis: true,
    },
    {
      title: "Trạng thái",
      dataIndex: "trang_thai",
      render: (trang_thai) => {
        return <Tag color={getColor(trang_thai)}>{(trang_thai == "active" || trang_thai == "Đang hoạt động") ? "Đang hoạt động" : "Bị khóa"}</Tag>;
       },
      sorter: {
        compare: (a, b) => {
          return a.trang_thai.localeCompare(b.trang_thai);
        },
        multiple: 4,
      },
    },
    {
      title: "Ngày tạo",
      dataIndex: "ngay_tao",
      render: (date) => (
        <span style={{ wordWrap: "break-word", wordBreak: "break-word" }}>
          {formatDatetime(date)}
        </span>
      ),
      ellipsis: true,
      sorter: {
        compare: (a, b) => {
          return a.ngay_tao.localeCompare(b.ngay_tao);
        },
        multiple: 5,
      },
    },
    ];
  const ADD_NEW_ENTITY = "Add new customer";
  const config = {
    entity,
    panelTitle,
    dataTableTitle,
    ADD_NEW_ENTITY,
    readColumns,
    dataTableColumns,
    searchConfig,
  };
  return (
    <CrudModule
      createForm={<UserForm />}
      updateForm={<UserForm isUpdateForm={true} />}
      config={config}
    />
  );
}

export default Users;
