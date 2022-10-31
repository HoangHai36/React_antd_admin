import React from "react";
import { Button, Menu } from "antd";
import { EyeOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { crud } from "@/redux/crud/actions";
import uniqueId from "@/utils/uinqueId";
import DataTable from "@/components/DataTable";
import history from "@/utils/history";

function AddNewItem({ config }) {
  const { ADD_NEW_ENTITY  } = config;
  const handelClick = () => {
    history.push("/user/add");
  };

  return (
    <Button onClick={handelClick} type="primary">
      {ADD_NEW_ENTITY}
    </Button>
  );
}
function DropDownRowMenu({ row }) {
  const dispatch = useDispatch();
  const Show = () => {
    history.push("/user/" + row?.nhan_vien_id);  
  };
  function Edit() {
    history.push("/user/edit/" + row?.nhan_vien_id);
  }
  function Delete() {
    const entity = row?.trang_thai == "active" ? "lockUser" : "deleteUser"
    dispatch(crud.delete(entity, row?.nhan_vien_id));
    dispatch(crud.resetState());
  }
  return (
    <Menu style={{ width: 130 }}>
      <Menu.Item key={`${uniqueId()}`} icon={<EyeOutlined />} onClick={Show}>
        Show
      </Menu.Item>
      <Menu.Item key={`${uniqueId()}`} icon={<EditOutlined />} onClick={Edit}>
        Edit
      </Menu.Item>
      <Menu.Item
        key={`${uniqueId()}`}
        icon={<DeleteOutlined />}
        onClick={Delete}
      >
        {row?.trang_thai == "active" ? "Lock" : "Delete" }
      </Menu.Item>
    </Menu>
  );
}

export default function AddData({ config }) {
  return (
    <DataTable
      config={config}
      DropDownRowMenu={DropDownRowMenu}
      AddNewItem={AddNewItem}
    />
  );
}
