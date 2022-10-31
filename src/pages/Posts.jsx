import React from "react";
import { Avatar, Tag, Switch, Form } from "antd";
import { IMG_BASE_URL } from "@/config/serverApiConfig";
import { UserOutlined } from "@ant-design/icons";
import CrudModulePost from "@/modules/CrudModulePost";
import UserForm from "@/forms/UserForm";
import { formatDatetime } from "@/utils/helpers";

function Posts() {
  const entity = "posts";
  // const dispatch = useDispatch();
  const getColor = (type) => {
    if(type) {
      switch(type) {
        case "active": 
        case "Đang hoạt động":
          return "#87d068";
        case "inactive": 
        case "Bị khóa":
          return "red";          
      }
    }
    return "#87d068";
  }
  const checkValue = (value) => {
    if(value) {
      switch(value) {
        case 1: 
          return true;
        default:
          return false;          
      }
    }
    return false;  
  }
  const changeSwitch = function(checked) {
    console.log(checked);
  }
  const panelTitle = "Danh sách bài viết";
  const dataTableTitle = "Danh sách bài viết";
  const entityDisplayLabels = ["company"];

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
      title: "Tiêu đề",
      dataIndex: "tieu_de",
      sorter: {
        compare: (a, b) => a.tieu_de.localeCompare(b.tieu_de),
        multiple: 2,
      },
    },
    {
      title: "Nhóm bài viết",
      dataIndex: "nhom_tin_tuc_id",
      render: (nhom_nhan_vien) => {
       return nhom_nhan_vien;
      },
      ellipsis: true,
    },
    {
      title: "Tin nổi bật",
      dataIndex: "tin_noi_bat",
      render: (tin_noi_bat) => {
        return <Switch checkedChildren="có" unCheckedChildren="không" defaultChecked={checkValue(tin_noi_bat)} onChange={changeSwitch}/>;
       },
      sorter: {
        compare: (a, b) => {
          return a.tin_noi_bat - b.tin_noi_bat;
        },
        multiple: 1,
      },
      ellipsis: true,
    },
    {
      title: "Tin mới",
      dataIndex: "tin_moi",
      render: (tin_moi) => {
        return <Switch checkedChildren="có" unCheckedChildren="không" defaultChecked={checkValue(tin_moi)}/>;
       },
      sorter: {
        compare: (a, b) => {
          return a.tin_moi - b.tin_moi;
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

  const ADD_NEW_ENTITY = "Add new post";
  const DATATABLE_TITLE = "post List";
  const ENTITY_NAME = "post";
  const CREATE_ENTITY = "Create post";
  const UPDATE_ENTITY = "Update post";
  const config = {
    entity,
    panelTitle,
    dataTableTitle,
    ENTITY_NAME,
    CREATE_ENTITY,
    ADD_NEW_ENTITY,
    UPDATE_ENTITY,
    DATATABLE_TITLE,
    readColumns,
    dataTableColumns,
    entityDisplayLabels,
  };
  return (
    <CrudModulePost
      createForm={<UserForm />}
      updateForm={<UserForm isUpdateForm={true} />}
      config={config}
    />
  );
}

export default Posts;
