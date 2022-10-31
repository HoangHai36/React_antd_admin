import React, { useCallback, useEffect } from "react";
import { Dropdown, Button, PageHeader, Table } from "antd";
import { EllipsisOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { crudPost } from "@/redux/crudPost/actions";
import { selectListItems, selectListCategotyItems, selectCurrentItem } from "@/redux/crudPost/selectors";

import uniqueId from "@/utils/uinqueId";

export default function DataTablePost({ config, DropDownRowMenu, AddNewItem }) {
  let { entity, dataTableColumns, dataTableTitle } = config;
  dataTableColumns = [
    ...dataTableColumns,
    {
      title: "",
      render: (row) => (
        <Dropdown overlay={DropDownRowMenu({ row })} trigger={["click"]}>
          <EllipsisOutlined style={{ cursor: "pointer", fontSize: "24px" }} />
        </Dropdown>
      ),
    },
  ];

  const { result: listResult, isLoading: listIsLoading } = useSelector(
    selectListItems
  );
  const listCategory = useSelector(
    selectListCategotyItems
  );
  const selectItemCategory = (itemId) => {
    const item =  listCategory?.result?.items?.find((item) => item.nhom_tin_tuc_id === itemId);
    return item?.ten_nhom;
  }
  const mapData = () => {
    const data = [];
     listResult.items.forEach(item => {
      item.nhom_tin_tuc_id = selectItemCategory(item.nhom_tin_tuc_id);
      data.push(item);
    })
    console.log(data);
    return data;
  }
  let { pagination, items } = listResult;
  const dispatch = useDispatch();
  const handelDataTableLoad = useCallback((pagination) => {
    dispatch(crudPost.list(entity, pagination.current));
    items = mapData();
  }, []);

  useEffect(() => {
    dispatch(crudPost.list(entity));
    dispatch(crudPost.listCategory('postCategories'));
    items = mapData();
  }, []);
  console.log(items)
  return (
    <>
      <PageHeader
        title={dataTableTitle}
        ghost={false}
        extra={[
          <Button onClick={handelDataTableLoad} key={`${uniqueId()}`}>
            Refresh
          </Button>,
          <AddNewItem key={`${uniqueId()}`} config={config} />,
        ]}
        style={{
          padding: "20px 0px",
        }}
      ></PageHeader>
      <Table
        columns={dataTableColumns}
        rowKey={() => `${uniqueId()}`}
        dataSource={items}
        pagination={pagination}
        loading={listIsLoading}
        onChange={handelDataTableLoad}
      />
    </>
  );
}
