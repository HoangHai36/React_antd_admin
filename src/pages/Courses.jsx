import React from "react";
import { Avatar } from "antd";
import { IMG_BASE_URL } from "@/config/serverApiConfig";
import { UserOutlined } from "@ant-design/icons";
import CrudModule from "@/modules/CrudModule";
import SourceForm from "@/forms/SourceForm";
import { formatDatetime } from "@/utils/helpers";
function Courses() {
  const entity = "courses";
  const searchConfig = {
    displayLabels: ["client"],
    searchFields: "client,email,phone",
    outputValue: "_id",
  };

  const panelTitle = "Quản lý khóa học";
  const dataTableTitle = "Danh sach khóa học";
  const entityDisplayLabels = ["courses"];

  const readColumns = [];
  const dataTableColumns = [
    {
      title: "Ảnh đại diện",
      dataIndex: "anh_dai_dien",
      render: (anh_dai_dien) => {
        return <Avatar style={{ float: 'left' }} src={IMG_BASE_URL + anh_dai_dien} shape="square" size={60} icon={<UserOutlined />} />;
      },
    },
    {
      title: "Tên kháo học",
      dataIndex: "tieu_de",
      sorter: {
        compare: (a, b) => a.tieu_de.localeCompare(b.tieu_de),
        multiple: 2,
      },
      ellipsis: true,
    },
    {
      title: "Giảng viên",
      dataIndex: "giang_vien",
      render: (giang_vien) => {
        return giang_vien?.ten_nhan_vien;
      },
      ellipsis: true,
    },

    {
      title: "Nhóm khóa học",
      dataIndex: "nhom_khoa_hoc",
      render: (nhom_khoa_hoc) => {
        return  nhom_khoa_hoc?.ten_nhom;
      }, 
      ellipsis: true, 
    },
    {
      title: "Ngày tạo",
      dataIndex: "ngay_tao",
      render: (date) => {
        return formatDatetime(date)
      },
      sorter: {
        compare: (a, b) => {
          return a.ngay_tao.localeCompare(b.ngay_tao);
        },
        multiple: 1,
      },
      ellipsis: true,
    },
  ];

  const ADD_NEW_ENTITY = "Add new Course";
  const DATATABLE_TITLE = "Course List";
  const ENTITY_NAME = "courses";
  const CREATE_ENTITY = "Create Course";
  const UPDATE_ENTITY = "Update Course";
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
    searchConfig,
    entityDisplayLabels,
  };
  return (
    <CrudModule
      createForm={<SourceForm />}
      updateForm={<SourceForm isUpdateForm={true} />}
      config={config}
    />
  );
}

export default Courses;
